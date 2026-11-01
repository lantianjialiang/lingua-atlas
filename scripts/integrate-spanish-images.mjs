import fs from 'node:fs';
const jobs=JSON.parse(fs.readFileSync('data/spanish-generated-images.json','utf8'));
const p='public/spanish/entries/0.json',ip='public/spanish/index.json';
const entries=JSON.parse(fs.readFileSync(p,'utf8')),idx=JSON.parse(fs.readFileSync(ip,'utf8'));
idx.imageFormats??={};
for(const j of jobs){if(!j.path)continue;for(const d of ['img','thumb'])if(!fs.existsSync(`public/spanish/${d}/${j.id}.jpg`))throw Error(`Missing ${d}/${j.id}`);const e=entries.find(e=>e.id===j.id);if(!e)throw Error(j.id);e.m|=1;idx.imageFormats[j.id]='jpg';}
idx.illustrated=entries.filter(e=>e.m&1).length;idx.examples=entries.reduce((n,e)=>n+e.ex.length,0);
idx.words.forEach(row=>{row[6]=entries.find(e=>e.id===row[0]).m;});
fs.writeFileSync(p,JSON.stringify(entries,null,2));fs.writeFileSync(ip,JSON.stringify(idx,null,2));
console.log({words:idx.count,images:idx.illustrated,examples:idx.examples});
