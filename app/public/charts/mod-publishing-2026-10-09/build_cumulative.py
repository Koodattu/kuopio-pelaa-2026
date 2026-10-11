"""Build lifetime cumulative charts; --refresh-history fetches the pre-2022 monthly history.

Later months remain the original dated snapshot. Early history must reconcile with
independently verified baselines, and the full series must match verified end totals.
"""
import sys
sys.dont_write_bytecode = True
import argparse
import csv
import json
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from itertools import accumulate
from build_charts import ROOT, collect_game, render

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--refresh-history', action='store_true')
args = parser.parse_args()
monthly = json.loads((ROOT / 'monthly-counts.json').read_text(encoding='utf-8'))
baselines = json.loads((ROOT / 'cumulative-baselines.json').read_text(encoding='utf-8'))
history_path = ROOT / 'pre-2022-monthly-counts.json'
if args.refresh_history:
    start_years = {'minecraft': 2020, 'skyrim': 2016, 'stardew': 2016, 'cyberpunk': 2020}
    def fetch(game):
        months = [f'{year}-{month:02d}' for year in range(start_years[game['key']], 2022) for month in range(1, 13)]
        result = collect_game(game, months)
        assert sum(result['counts']) == baselines['series'][game['key']]['before_2022'], game['name']
        return {**result, 'months': months}
    with ThreadPoolExecutor(max_workers=3) as pool:
        early_series = list(pool.map(fetch, monthly['series']))
    history = {'retrieved_at': datetime.now(timezone.utc).isoformat(), 'series': early_series,
               'scope': monthly['metric'], 'limitations': monthly['limitations']}
    history_path.write_text(json.dumps(history, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
history = json.loads(history_path.read_text(encoding='utf-8'))
series = []
for game in monthly['series']:
    early = next(g for g in history['series'] if g['key'] == game['key'])
    baseline = baselines['series'][game['key']]
    assert sum(early['counts']) == baseline['before_2022'], game['name']
    counts = list(accumulate(early['counts'] + game['counts']))
    assert counts[-1] == baseline['through_2026_09'], game['name']
    series.append({**game, 'months': early['months'] + monthly['months'], 'counts': counts})
months = sorted({month for game in series for month in game['months']})
snapshot = {
    **monthly, 'period': 'Full available platform history through 2026-09; range differs by game',
    'history_retrieved_at': history['retrieved_at'], 'baseline_retrieved_at': baselines['retrieved_at'],
    'metric': 'Cumulative currently publicly searchable mod projects created before each month-end',
    'limitations': monthly['limitations'] + ['Cumulative counts rise even with constant monthly publishing; curvature alone does not establish exponential growth.'],
    'months': months, 'series': series,
}
(ROOT / 'cumulative-counts.json').write_text(json.dumps(snapshot, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
with (ROOT / 'cumulative-counts.csv').open('w', encoding='utf-8-sig', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['Month end'] + [f"{g['name']} ({g['platform']})" for g in series])
    lookups = [dict(zip(g['months'], g['counts'])) for g in series]
    for month in months:
        writer.writerow([month] + [lookup.get(month, '') for lookup in lookups])
render(snapshot, suffix='-total')
