---
name: create-demo
description: 產出單頁 HTML 互動報告至 demos/ 目錄。當使用者丟入 Prompt 要求產出簡報、pitch deck、或滾動式報告時使用。
---

# Create Demo

將使用者的 Prompt 轉為可開啟的單頁滾動式 HTML 報告，存放於 `demos/<slug>/`。

> **注意**：使用者附帶的 Context 是**報告內容素材**，不是要另外建立的文件目錄結構。把 Context 消化進 `index.html` 的各區塊即可。

## 觸發條件

- 使用者提供 Prompt 要求產出簡報 / 報告 / presentation
- 使用者說「做一個 demo」「pitch 給 PM」

## 產出流程

### 1. 決定 slug

從標題產生 `kebab-case` slug，例如「Project Renovation Plan」→ `renovation-plan`。

### 2. 建立目錄

```
demos/<slug>/
├── PROMPT.md      # 完整 Prompt + Context（報告素材留存）
├── index.html     # 單頁滾動式互動簡報
└── i18n/
    ├── zh-tw.json
    ├── en.json
    ├── ja.json
    └── embed.js   # 從 JSON 產生，支援 file:// 雙擊開啟
```

### 3. 撰寫 PROMPT.md

留存使用者原始 Prompt 與 Context（作為報告素材參考，不另建檔案結構）。

### 4. 撰寫 i18n JSON

**所有可見文字必須走 i18n key，禁止硬編在 HTML。**

Key 命名：`<section>.<element>`

| Locale | 要求 |
|--------|------|
| `zh-tw` | Prompt 指定繁中原文，一字不差 |
| `en` | 專業簡報語氣 |
| `ja` | 敬體（です/ます） |

動態內容（lists、mock cards）用 JSON 陣列。

產生 embed.js：

```bash
node -e "
const fs=require('fs'),p='demos/<slug>/i18n',d={};
for(const l of['zh-tw','en','ja'])d[l]=JSON.parse(fs.readFileSync(p+'/'+l+'.json'));
fs.writeFileSync(p+'/embed.js','window.__I18N_EMBEDDED__='+JSON.stringify(d,null,2)+';');
"
```

### 5. 撰寫 index.html

- Tailwind CSS v3 CDN + vanilla JS
- 無 build step，雙擊即可開啟
- 右上角語系切換（`localStorage` key: `demo-locale`）
- Dark/light 對比
- Responsive 單頁滾動式版面
- 列表項統一用橘色圓點 bullet（`.dot-bullet`）
- Mermaid 圖表：文案放 `i18n` 的 `docflow.diagram`，用 Mermaid 11 + `look: 'handDrawn'`

### 6. 完成後

- 更新根目錄 `README.md` 的報告列表
- 更新根目錄 `index.html` 的 `I18N.*.demos` 陣列（GitHub Pages 入口）

## 鐵律

1. 每篇報告放 `demos/<slug>/`，不另建其他目錄結構
2. Context 是報告內容，不是 filesystem 規範——禁止依 Context 建立 docs/records/ 等資料夾
3. 單檔 HTML 優先

## 驗收清單

- [ ] `index.html` 無 build 可直接開啟
- [ ] 三語切換後所有文字同步更新
- [ ] Prompt 要求的互動區塊齊全
- [ ] `PROMPT.md` 已留存原始需求
