import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const write=(p,v)=>{fs.writeFileSync(p+'.next',JSON.stringify(v,null,2));fs.renameSync(p+'.next',p);};
const source=read('data/collins-spanish-source.json');
const idx=read('public/spanish/index.json');
const previous=Array.from({length:Math.ceil(idx.count/idx.chunk)},(_,i)=>read(`public/spanish/entries/${i}.json`)).flat();
const text=new Map(previous.map(e=>[e.id,e]));
for(const file of fs.readdirSync('data/spanish-batches').filter(f=>f.endsWith('.entries.json')))for(const e of read('data/spanish-batches/'+file))if(!text.has(e.id))text.set(e.id,e);
const records=fs.readdirSync('.local/spanish-generation/records').filter(f=>f.endsWith('.json')).map(f=>read('.local/spanish-generation/records/'+f));
const available=records.filter(r=>r.path&&fs.existsSync(r.path));
const pending=available.filter(r=>!['img','thumb'].every(d=>fs.existsSync(`public/spanish/${d}/${r.id}.jpg`)));
if(pending.length){
 const manifest='.local/spanish-generation/integrate-ready.images.json';write(manifest,pending);
 execFileSync('powershell',['-NoProfile','-ExecutionPolicy','Bypass','-File','scripts/compress-spanish-images.ps1','-Manifest',manifest],{stdio:'inherit'});
}
idx.imageFormats??={};for(const r of available)idx.imageFormats[r.id]='jpg';
const entries=source.entries.map((r,i)=>{
 const e=structuredClone(text.get(r.id));if(!e?.ex?.[0]?.en||!e.ex[0].zh||!e.senses[0]?.zh)throw Error('Missing text '+r.id);
 const format=idx.imageFormats[r.id]||'webp';
 const hasImage=['img','thumb'].every(d=>fs.existsSync(`public/spanish/${d}/${r.id}.${format}`));
 e.m=hasImage?(e.m|1):(e.m&~1);
 const c=source.chapters.find(c=>c.id===r.chapter);e.topic=c.id===0?'essentials':'chapter-'+c.id;
 if(!idx.topics.some(t=>t[0]===e.topic))idx.topics.push([e.topic,c.title]);
 return e;
});
idx.count=entries.length;idx.chunk=100;idx.name=`Collins 西班牙语 · ${idx.count}条`;
idx.examples=entries.reduce((n,e)=>n+e.ex.length,0);idx.illustrated=entries.filter(e=>e.m&1).length;
idx.words=entries.map(e=>[e.id,e.w,e.senses[0].zh,e.uk||'',Math.max(0,idx.cefr.indexOf(e.cefr)),idx.topics.findIndex(t=>t[0]===e.topic),e.m]);
for(let i=0;i<Math.ceil(entries.length/100);i++)write(`public/spanish/entries/${i}.json`,entries.slice(i*100,(i+1)*100));
write('public/spanish/index.json',idx);
const plan=read('data/spanish-batch-plan.json');plan.completedEntries=idx.illustrated;plan.publishedEntries=idx.count;
for(const b of plan.batches){const e=entries.slice(b.start-1,b.end);b.savedImages=e.filter(x=>x.m&1).length;b.status=b.savedImages===b.count?'complete':b.savedImages?'partial':'pending';}
write('data/spanish-batch-plan.json',plan);
const missing=entries.findIndex(e=>!(e.m&1));const state=read('data/spanish-generation-status.json');
Object.assign(state,{publishedEntries:idx.count,integratedImages:idx.illustrated,stagedImages:0,remainingImageEntries:idx.count-idx.illustrated,nextMissingImageOrdinal:missing<0?null:missing+1,note:'All prepared text and all available images integrated. Missing pictures have media flag off. Resume using queue and integrate-ready-spanish.mjs, not prefix-only publishing.',updatedAt:new Date().toISOString()});
write('data/spanish-generation-status.json',state);
console.log({entries:idx.count,examples:idx.examples,images:idx.illustrated,newImages:pending.length,missingImages:idx.count-idx.illustrated});
