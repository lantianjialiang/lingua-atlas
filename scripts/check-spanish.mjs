import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const idx=read('public/spanish/index.json');
const entries=Array.from({length:Math.ceil(idx.count/idx.chunk)},(_,n)=>read(`public/spanish/entries/${n}.json`)).flat();
assert.equal(entries.length,idx.count);assert.equal(idx.words.length,idx.count);assert.equal(new Set(entries.map(e=>e.id)).size,idx.count);
const source=read('data/collins-spanish-source.json').entries;
for(const [i,e] of entries.entries()){assert.equal(e.id,source[i].id);assert.equal(idx.words[i][0],e.id);assert.equal(idx.words[i][6],e.m);assert.ok(e.ex[0]?.en && e.ex[0]?.zh,`${e.w}: missing example`);assert.ok(e.senses[0]?.zh,`${e.w}: missing translation`);if(e.m&1)for(const d of ['img','thumb'])assert.ok(fs.statSync(`public/spanish/${d}/${e.id}.${idx.imageFormats?.[e.id]||'webp'}`).size>1000);}
assert.equal(idx.illustrated,entries.filter(e=>e.m&1).length);assert.equal(idx.examples,entries.reduce((n,e)=>n+e.ex.length,0));
console.log(`${idx.count} Spanish entries verified; ${idx.illustrated} illustrations and thumbnails, all translations/examples, source order and unique IDs.`);
