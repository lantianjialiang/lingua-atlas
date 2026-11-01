# Lingua Atlas · 语光图鉴

英语与西班牙语词汇学习网站，基于 [Word Atlas](https://github.com/designfuchen/word-atlas) 改编。

- 原英语词库：7,298 条，保留插画、例句和英美发音。
- Collins Spanish 3000：当前实现原书顺序前100条，全部配有场景插图、自编西语例句及中文翻译。
- 在“关于”页切换辞书，两套学习、复习、收藏、错词与未完成会话分别保存。
- 无需注册，进度保存在当前浏览器；在“我的”页可分别导出备份。

## 本地开发

```sh
npm install
npm run dev
```

检查：`npm test`、`npx tsc -b`、`node scripts/check-spanish.mjs`。生产构建：`npm run build`。

部署到 GitHub Pages 项目路径时设置 `ATLAS_BASE=/lingua-atlas/` 再构建。

## 内容与许可

代码沿用 [MIT](LICENSE)；原英语内容遵循 [原内容许可](CONTENT_LICENSE.md)，署名 **Word Atlas contributors（词光）**。原项目作者为 [@designfuchen](https://github.com/designfuchen)。Collins 原书及其词条内容版权归原权利人所有，不包含在原英语词库的 CC BY 授权中。

西语插画使用内置 ImageGen 生成，提示词与来源记录在 [生成记录](data/spanish-generated-images.json)。词条位于 `public/spanish/entries/0.json`，插图及缩略图位于 `public/spanish/img`、`public/spanish/thumb`。西语目前使用浏览器设备语音。

保留原 localStorage 键、词库 ID 和备份格式，项目改名不会清空同一网址下已有学习进度。更换域名或端口前，请分别导出备份并在新网址导入。

[English](README.en.md) · [原项目文档存档](docs/UPSTREAM_README.zh.md)
