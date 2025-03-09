// @ts-check
import fs from 'node:fs';
const files = [
  ['https://www.ausgrid.com.au/webapi/OutageListData/GetDetailedUnplannedOutages', 'unplanned.json'],
  ['https://www.ausgrid.com.au/webapi/OutageListData/GetDetailedPlannedOutages', 'planned.json'],
  ['https://www.energex.com.au/static/Energex/energex_po_current_unplanned.geojson', 'energex-unplanned.geojson'],
  ['https://www.energex.com.au/static/Energex/energex_po_current_planned.geojson', 'energex-planned.geojson'],
  ['https://www.ergon.com.au/static/Ergon/ergon_po_current_unplanned.geojson', 'ergon-unplanned.geojson'],
  ['https://www.ergon.com.au/static/Ergon/ergon_po_current_planned.geojson', 'ergon-planned.geojson'],
  ['https://www.essentialenergy.com.au/Assets/kmz/current.kml?GTg3NudO','essential-energy.kml'],
  ['https://www.energex.com.au/api/outages-text/v1.0.ex/summary','energex-summary.json'],
  ['https://www.energex.com.au/api/outages-text/v1.0.ex/suburb?council=&suburb=','energex-summary-suburbs.json'],
  ['https://www.essentialenergy.com.au/Assets/kmz/current.kml?GTg3NudO','essential-energy.kml'],
]

files.forEach(([source, dest]) => {
  const f = fetch(source);
  if (dest.endsWith('json')) {
    f.then(res => res.json()).then((json) => {
      fs.writeFile(dest, JSON.stringify(json, undefined, 2), {encoding: 'utf8'}, console.log);
    }).catch(console.error);
  } else {
    f.then(res => res.text()).then(text => fs.writeFile(dest, text, {encoding: 'utf8'}, console.log)).catch(console.error);
  }
});