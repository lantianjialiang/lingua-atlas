import fs from 'node:fs';
const source=JSON.parse(fs.readFileSync('data/collins-spanish-source.json','utf8'));
const prepared=new Map(fs.readdirSync('data/spanish-batches').filter(f=>f.endsWith('.entries.json')).flatMap(f=>JSON.parse(fs.readFileSync('data/spanish-batches/'+f,'utf8'))).map(e=>[e.id,e]));
const corrections=new Set([304,305,306,308].filter(n=>{const p='.local/spanish-generation/records/'+source.entries[n-1].id+'.json';if(!fs.existsSync(p))return true;const r=JSON.parse(fs.readFileSync(p,'utf8'));return r.revision<2||r.reviewStatus!=='visually_verified'||!fs.existsSync(r.path);}));
const jobs=source.entries.map((r,i)=>{const ordinal=i+1,e=prepared.get(r.id),chapter=source.chapters.find(c=>c.id===r.chapter);return{id:r.id,word:e?.w||r.word,en:e?.senses[0]?.en||r.en,ordinal,batch:Math.floor(i/100)+1,example:e?.ex[0]?.en,zh:e?.ex[0]?.zh,context:`Chapter: ${chapter.title} / ${chapter.es}. Source page ${r.page}. Neighbouring terms: ${source.entries.slice(Math.max(0,i-3),i+4).map(x=>x.word+' ('+x.en+')').join('; ')}`,revision:corrections.has(ordinal)?2:1};}).filter(j=>j.ordinal>300&&(corrections.has(j.ordinal)||!fs.existsSync('.local/spanish-generation/records/'+j.id+'.json')));
jobs.sort((a,b)=>Number(corrections.has(b.ordinal))-Number(corrections.has(a.ordinal))||a.ordinal-b.ordinal);
fs.mkdirSync('.local/spanish-generation/revisions',{recursive:true});
for(const j of jobs.filter(j=>j.revision===2)){const p='.local/spanish-generation/records/'+j.id+'.json';if(fs.existsSync(p))fs.copyFileSync(p,'.local/spanish-generation/revisions/'+j.id+'-v1.json');}
fs.writeFileSync('.local/spanish-generation/queue.json',JSON.stringify(jobs));
console.log(JSON.stringify(jobs));
