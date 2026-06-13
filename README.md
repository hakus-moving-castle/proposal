# Proposals

AI 友善的單頁報告工作區。使用者丟 Prompt，Agent 產出互動 HTML 簡報。

**線上瀏覽：** https://hakus-moving-castle.github.io/proposal/

## 快速導航

| 要做什麼 | 讀這裡 | 輸出位置 |
|----------|--------|----------|
| 產 HTML 簡報 / 報告 | [`.claude/skills/create-demo/SKILL.md`](.claude/skills/create-demo/SKILL.md) | `demos/<slug>/` |
| 瀏覽所有報告 | [`index.html`](index.html) | 根目錄入口頁 |

## 目錄結構

```
proposals/
├── index.html           # 報告目錄入口（GitHub Pages 首頁）
├── demos/<slug>/        # 每篇報告一個資料夾
│   ├── PROMPT.md
│   ├── index.html
│   └── i18n/
└── .github/workflows/   # push main → GitHub Pages deploy
```

## 現有報告

| Slug | 說明 | 開啟 |
|------|------|------|
| [`renovation-plan`](demos/renovation-plan/index.html) | 專案全面翻新：AI 驅動的敏捷考古與重構計畫 | [線上](https://hakus-moving-castle.github.io/proposal/demos/renovation-plan/) |

## 部署

`main` 分支 push 後，GitHub Actions（[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)）自動部署至 GitHub Pages。  
首次需在 repo **Settings → Pages → Build and deployment → Source** 選 **GitHub Actions**。  
（若 org plan 未開 GitHub Pages，需先升級或改用 public repo。）
