import fs from 'node:fs';
const book=JSON.parse(fs.readFileSync('../espanol/dist/data/book.json','utf8'));
fs.writeFileSync('data/collins-spanish-source.json',JSON.stringify(book,null,2));
const completed=JSON.parse(fs.readFileSync('public/spanish/index.json','utf8')).count;
const batches=Array.from({length:Math.ceil(book.entries.length/100)},(_,i)=>({batch:i+1,start:i*100+1,end:Math.min((i+1)*100,book.entries.length),count:Math.min(100,book.entries.length-i*100),exampleLevel:i<5?'A1':i<12?'A2':i<22?'B1':i<30?'B1–B2':'B2',status:Math.min((i+1)*100,book.entries.length)<=completed?'complete':i===Math.floor(completed/100)?'in_progress':'planned'}));
fs.writeFileSync('data/spanish-batch-plan.json',JSON.stringify({sourceCount:book.entries.length,batchSize:100,completedEntries:completed,batches},null,2));
fs.writeFileSync('docs/SPANISH-CONTENT-PLAN.md',`# Collins 西语内容批次计划

共3214条（含短语），按原书顺序保留稳定ID。已完成1–${completed}，还需${Math.ceil((book.entries.length-completed)/100)}批。每批完成后更新网站和批次状态。

| 批次 | 范围 | 例句目标难度 | 语言要求 |
|---|---|---|---|
| 1–5 | 1–500 | A1 | 约4–9词，主要用现在时、常见名词和简单修饰；批次内逐步增加时间、地点或原因。 |
| 6–12 | 501–1200 | A2 | 约8–14词，引入过去时、将来表达、比较及简单连接词。 |
| 13–22 | 1201–2200 | B1 | 约12–20词，加入经历、因果、条件和关系从句。 |
| 23–30 | 2201–3000 | B1向B2过渡 | 约16–25词，逐步引入条件式、常见虚拟式及观点说明。 |
| 31–33 | 3001–3214 | B2 | 约20–30词，处理假设、让步与细微语义，保持自然可理解。 |

以上为自编例句的教学目标，不是Collins原书或词条的官方CEFR评级。长度是参考，短语不为凑字数生硬扩写；每批难度有重叠，优先复用较早词汇。每句明确呈现目标词或正常变形，附准确中文翻译，并检查性数一致、搭配和口语自然度。

每批流程：核对原书顺序与释义 → 编写100条例句和翻译 → 逐条生成100张与例句一致的插图 → 压缩大图和缩略图 → 校验ID、资源和例句完整性 → 接入分块词库 → 验证旧学习进度不变。失败项单独重试，整批通过再发布到索引。

机器可读清单：[spanish-batch-plan.json](../data/spanish-batch-plan.json)。插图使用内置ImageGen，逐词保存提示词和生成来源。保留现有西语词库ID以兼容已有学习记录。
`);
