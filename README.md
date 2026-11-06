# Lingua Atlas · 语光图鉴

英语与西班牙语词汇学习网站，基于 [Word Atlas](https://github.com/designfuchen/word-atlas) 改编。

- 原英语词库：7,298 条，保留插画、例句和英美发音。
- Collins Spanish 3000：按原书顺序每批100条逐步扩充，配场景插图、自编西语例句及中文翻译；例句难度逐步提高。
- 在“关于”页切换辞书，两套学习、复习、收藏、错词与未完成会话分别保存。
- 无需注册，进度保存在当前浏览器；在“我的”页可分别导出备份。

## 点词在线查询

例句、搭配与关联词中的每个单词均可点击。当前辞书已有的词优先使用本地词条；未收录的词按辞书语言（英语/西语）请求 MyMemory 中文参考译文，英语另查询 Free Dictionary API 的英文释义和音标。只有点击的单词会发送给服务，不上传例句或学习记录；查询结果在当前会话缓存，重复点击不会重复请求。在线词没有课程词卡，提供外部维基词典链接和设备朗读。网络失败、15 秒超时、限流或无结果时显示提示并可重试。

MyMemory 是翻译参考，不保证词性、多义项或语境准确；匿名服务有每日额度。API 与限制：[MyMemory](https://mymemory.translated.net/doc/spec.php)、[用量](https://mymemory.translated.net/doc/usagelimits.php)、[Free Dictionary API](https://dictionaryapi.dev/)。词典释义按返回的许可显示署名链接。如后续有许可合适的英汉/西汉辞书，可替换或补充在线结果。

## 本地开发

```sh
npm install
npm run dev
```

检查：`npm test`、`npx tsc -b`、`node scripts/check-spanish.mjs`。生产构建：`npm run build`。

部署到 GitHub Pages 项目路径时设置 `ATLAS_BASE=/lingua-atlas/` 再构建。

## 内容与许可

代码沿用 [MIT](LICENSE)；原英语内容遵循 [原内容许可](CONTENT_LICENSE.md)，署名 **Word Atlas contributors（词光）**。原项目作者为 [@designfuchen](https://github.com/designfuchen)。Collins 原书及其词条内容版权归原权利人所有，不包含在原英语词库的 CC BY 授权中。

西语插画使用内置 ImageGen 生成，提示词与来源记录在 [生成记录](data/spanish-generated-images.json)。词条位于 `public/spanish/entries/0.json`，插图及缩略图位于 `public/spanish/img`、`public/spanish/thumb`。西语单词及例句音频使用 OpenAI `gpt-realtime-2.1-mini` 生成，缺少录音时退回浏览器设备语音；录音是 AI 合成语音。

音频生成脚本为 `scripts/atlas/gen_realtime_audio.py`。先安装 `scripts/atlas/realtime-requirements.txt`，运行脚本（默认预览）即可生成 `rojo` 的单词和例句样音；`--dry-run` 统计尚缺音频，`--batch --workers 4` 生成并登记剩余文件。批量默认覆盖西班牙语单词发音 `uk`（西班牙本土口音）与例句 `ex` 两类，可用 `--kinds` 调整。脚本跳过已有 MP3，按批更新索引；API 密钥从 `OPENAI_API_KEY` 或 `--api-key-stdin` 获取，不写入仓库。在需要本机代理的环境中添加 `--proxy http://127.0.0.1:7890`。

保留原 localStorage 键、词库 ID 和备份格式，项目改名不会清空同一网址下已有学习进度。更换域名或端口前，请分别导出备份并在新网址导入。

[English](README.en.md) · [原项目文档存档](docs/UPSTREAM_README.zh.md)

批次安排与难度递进：[内容计划](docs/SPANISH-CONTENT-PLAN.md)；实际完成范围见 [批次清单](data/spanish-batch-plan.json)。每批通过完整性校验后再更新网站索引。
