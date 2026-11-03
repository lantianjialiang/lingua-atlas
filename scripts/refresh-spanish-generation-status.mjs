import fs from 'node:fs';

const read = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const source = read('data/collins-spanish-source.json').entries;
const index = read('public/spanish/index.json');
const publishedEntries = index.count;
const integrated = new Set(index.words.filter(r => r[6] & 1).map(r => r[0]));
const root = '.local/spanish-generation/records';
const records = fs.readdirSync(root).filter(f => f.endsWith('.json')).map(f => read(`${root}/${f}`));
const saved = new Set(records.filter(r => r.path && fs.existsSync(r.path)).map(r => r.id));
const missing = source.flatMap((e, i) => !integrated.has(e.id) && !saved.has(e.id) ? [i + 1] : []);
const prepared = new Set(fs.readdirSync('data/spanish-batches').filter(f => f.endsWith('.entries.json')).flatMap(f => read(`data/spanish-batches/${f}`).map(e => e.id)));
for (const e of source.slice(0, publishedEntries)) prepared.add(e.id);
const old = fs.existsSync('data/spanish-generation-status.json') ? read('data/spanish-generation-status.json') : {};
const status = {
  ...old,
  status: index.illustrated === source.length ? 'complete' : (process.argv[2] || old.status || 'running'),
  totalEntries: source.length,
  publishedEntries,
  savedImageRecords: saved.size,
  integratedImages: index.illustrated,
  stagedImages: source.filter(e => saved.has(e.id) && !integrated.has(e.id)).length,
  remainingImageEntries: missing.length,
  preparedExampleEntries: prepared.size,
  nextBatch: missing.length ? Math.ceil(missing[0] / 100) : null,
  nextBatchRange: missing.length ? `${Math.floor((missing[0]-1)/100)*100+1}–${Math.min(source.length,Math.ceil(missing[0]/100)*100)}` : null,
  nextMissingImageOrdinal: missing[0] ?? null,
  contextReviewOrdinals: [],
  note: 'All prepared text is available; images are integrated independently with media flags. Use integrate-ready-spanish.mjs for future saved images. Existing dataset ID is preserved.',
  updatedAt: new Date().toISOString(),
};
delete status.generatedThisRun;
fs.writeFileSync('data/spanish-generation-status.json.next', JSON.stringify(status, null, 2));
fs.renameSync('data/spanish-generation-status.json.next', 'data/spanish-generation-status.json');
console.log(JSON.stringify(status));
