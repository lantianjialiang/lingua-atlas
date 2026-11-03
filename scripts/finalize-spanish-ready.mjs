import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
const root='.local/spanish-generation/records';
const records=fs.existsSync(root)?fs.readdirSync(root).filter(x=>x.endsWith('.json')).map(x=>read(path.join(root,x))):[];
let count=read('public/spanish/index.json').count;
if(count===3214){execFileSync(process.execPath,['scripts/integrate-ready-spanish.mjs'],{stdio:'inherit'});process.exit(0);}
while(count<3214){
 const batch=Math.floor(count/100)+1,tag=String(batch).padStart(3,'0');
 const entriesFile=`data/spanish-batches/${tag}.entries.json`;
 if(!fs.existsSync(entriesFile))break;
 const entries=read(entriesFile),byId=new Map(records.map(x=>[x.id,x]));
 const images=entries.map(e=>byId.get(e.id));
 if(images.some(x=>!x?.path||!fs.existsSync(x.path)))break;
 const manifest=`data/spanish-batches/${tag}.images.json`;
 fs.writeFileSync(manifest,JSON.stringify(images,null,2));
 execFileSync('powershell',['-NoProfile','-ExecutionPolicy','Bypass','-File','scripts/compress-spanish-images.ps1','-Manifest',manifest],{stdio:'inherit'});
 execFileSync(process.execPath,['scripts/publish-spanish-batch.mjs',String(batch)],{stdio:'inherit'});
 execFileSync(process.execPath,['scripts/check-spanish.mjs'],{stdio:'inherit'});
 count=read('public/spanish/index.json').count;
}
const status={publishedEntries:count,generatedThisRun:records.length,stagedImages:records.filter(x=>x.ordinal>count).length,lastSavedOrdinal:Math.max(count,...records.map(x=>x.ordinal)),updatedAt:new Date().toISOString()};
fs.writeFileSync('.local/spanish-generation/run-status.json',JSON.stringify(status,null,2));
console.log(status);
execFileSync(process.execPath,['scripts/refresh-spanish-generation-status.mjs'],{stdio:'inherit'});
