# 專案全面翻新計畫

以 AI 考古補齊規格、隔離資料邊界、同步設計系統，並以文件驅動流水線降低技術債的重構提案。

## Language

**Specification（規格）**:
從舊 codebase 考古產出的業務文件，涵蓋每個步驟、頁面與使用流程。專案原本不存在、需從零整理；也是核對商業邏輯的唯一標準依據。
_Avoid_: 規格書（泛稱）、需求文件

**通靈**:
在缺乏 Specification 或 API 規格時，從程式碼反推業務邏輯或資料格式的做法。
_Avoid_: 猜測、逆向工程（對外溝通時）

**代碼考古學家（Code Archaeologist）**:
四角色 pipeline 的第一棒。從 legacy codebase 產出 As-is flow.md（含 Scoped Files、待 PM 釐清、Unverified Logic）、upstream endpoint types，並增量更新 CONTEXT.md。
_Avoid_: 代碼審查、Code Review

**資料邊界規劃師（Data Boundary Planner）**:
四角色 pipeline 第二棒。以 records/endpoints/ 的 upstream 為起點，產出 To-be Frontend Interface + Transformer，並沉澱共用 entity 至 contract-schemas/shared/。
_Avoid_: API 整合、後端規格撰寫

**資料邊界**:
前端與後端之間的型別與轉換邊界，由資料邊界規劃師在 contract-schemas/ 中定義。
_Avoid_: 資料層、DTO（泛稱）

**行為測試架構師（Behavior Test Architect）**:
四角色 pipeline 第三棒。將 flow.md 轉為 e2e-cases.feature，Happy Path 與 Edge Cases 必須可追溯對齊；待 PM 釐清與 Unverified Logic 均不寫 Scenario。
_Avoid_: 單元測試、integration test（此階段）

**文件盤點員（Documentation Auditor）**:
四角色 pipeline 第四棒。不重新考古，而是驗證 Role 1–3 模板契約：AI 跑 L1 覆蓋地圖與 L2 結構閘門產出 gap report，人類 L3 抽樣簽核後更新 survey-checklist.md。
_Avoid_: 代碼審查、全量人工重讀

**Scoped Files（覆蓋地圖）**:
flow.md 必填章節。列出 Record scope 內每個 legacy 檔案的歸屬（被 flow 引用、Dead Code、Unverified Logic 或交叉引用其他 flow），供 Role 4 L1 檢核「未歸屬檔案 = 0」。
_Avoid_: 檔案清單（泛稱）、coverage report

**三層檢核（L1 / L2 / L3）**:
Role 4 的分層驗收模型。L1 覆蓋地圖（檔案歸屬）、L2 結構閘門（模板與交叉引用，AI 可自動跑）、L3 人工抽樣（對照原始碼確認內容正確）。
_Avoid_: 100% 覆蓋、全量審查

**待 PM 釐清**:
flow.md 章節。商務意圖或場景不明——code 看得懂行為，但不知「為什麼」或正確規則。考古期標記，盤點凍結後經 Docusaurus Open Questions 與 PM 對齊。
_Avoid_: Unverified Logic、TODO（泛稱）

**Unverified Logic（未驗證邏輯）**:
flow.md 章節。code 謎團——有寫但無踩到、無法 reproduce 或無法解釋，非 PM 商務問題。留待上線 log 或後端確認。
_Avoid_: 待 PM 釐清、dead code（未確認前）

**Transformer**:
將後端 Raw JSON 轉換為前端乾淨型別的純函數，集中收攏散落在組件與 Store 的轉換邏輯。
_Avoid_: transform 層、mapper（除非指同一概念）

**Agent Skills 流水線**:
Grill-with-Docs → To-PRD → To-Issues → TDD 等 Skills 組成的文件驅動驗收與開發流程。
_Avoid_: Matt Pocock Skills（對外溝通時）

**Upstream Schema（上游結構）**:
考古學家從 codebase 推測的 endpoint 原始回傳結構，以 TypeScript type 形式暫存於 `docs/records/endpoints/[endpoint-name].ts`，供資料邊界規劃師作為 Transformer 設計的輸入。
_Avoid_: Raw JSON、後端 DTO、domain（此為單一專案翻新，不按 domain 切分）

**Flow（業務流程）**:
使用者完成某項任務的連續步驟。考古產物以 `docs/records/flows/[flow-name]/` 組織，與 endpoint 規格分開。Proposal 中的 flow 名稱（如 route-search）僅為切分粒度範例，實際清單於考古階段依 codebase 定義。
_Avoid_: domain、模組（泛稱）

**Record（考古紀錄）**:
一次完整 User Flow 考古的交付單位，產出 flow.md + e2e-cases.feature，並引用相關 endpoints。每條 Record 獨立跑完四角色 pipeline 後封檔。
_Avoid_: domain、ticket

## 考古產物分類

**User Flow（Record）**:
跨頁面的完整使用者任務，暫存於 docs/records/flows/。需 flow.md、BDD，並引用 endpoints。
_Avoid_: 頁面、路由

**靜態／內容頁**:
無複雜狀態機的頁面或區塊（如 Top Page、FAQ、Affiliate 介紹頁），直接寫入 docs/main/pages/，只列區塊與 i18n key。導向外部表單、站內無完整任務者不寫 BDD。
_Avoid_: flow、Record

**全域約束（Global Constraints）**:
跨 flow 橫切邏輯（Session 時效、防刷、URL 語系同步），收攏至 docs/records/global-constraints/，以 BDD 定義驗收標準。
_Avoid_: 基礎設施（泛稱）、middleware

**Endpoint 規格**:
單一 API 的 upstream 結構與（經規劃後的）Frontend Interface + Transformer。Proposal 中的 endpoint 檔名僅為範例，非預定 API 清單。
_Avoid_: domain

**SSOT（Single Source of Truth）**:
某領域唯一權威依據。此計畫中 Specification 是商業邏輯的 SSOT；docs/main/ 是重構期 To-be 的開發者 SSOT。
_Avoid_: 唯一真相、主文件（泛稱）

**Docusaurus 產出**:
盤點凍結（survey-checklist 100%）後，依 records/ + main/ 等盤點文件整理為 Docusaurus 格式、部署於獨立 repo 的文件網站。作為與 PM 對齊認知的正式介面（含 Open Questions 專區）；非考古期 Agent 直接寫入的工作目錄。
_Avoid_: 工作目錄、docs 根目錄（泛稱）

**Open Questions**:
Docusaurus 網站上的專區，彙整各 flow.md § 待 PM 釐清 項目，供盤點凍結後與 PM 對齊商務邏輯與場景。
_Avoid_: FAQ、待辦清單（泛稱）

**盤點凍結**:
survey-checklist 達 100% 的技術關卡。代表考古產物完備，可產出 Docusaurus；尚未做 PM Scope 決策。
_Avoid_: Main Docs 凍結、Scope 凍結

**Scope 凍結**:
帶 Docusaurus spec 與 Figma 與 PM 逐區塊確認後的決策關卡。每條 flow／頁面標記可先翻修或待後續對齊。
_Avoid_: Tier 1/2、需求凍結（泛稱）

**可先翻修**:
Scope 決策標記。PM 確認此區塊暫時不會修改業務邏輯或流程 → 優先排入重構開工。
_Avoid_: Tier 1、穩定版

**待後續對齊**:
Scope 決策標記。PM 表示此區塊日後會調整 → 第一輪仍須 spec + Figma As-is 供決策；暫緩開工與 To-be 設計，第二輪再對齊。
_Avoid_: Tier 2、延期（泛稱）

**重構開工門檻（專案級）**:
Phase 3 開工前一次性關卡：盤點凍結 + Docusaurus 部署 + Scope 凍結。待後續對齊不進開工池。
_Avoid_: 盤點未完成即開工 refactor

**Issue 開工門檻**:
僅可先翻修項目；依類型：純函數看 schema、UI 看 To-be Figma、Flow 看 BDD（待 PM 釐清除外）、Static Pages 看 pages spec。
_Avoid_: 全 Issue 統一要求 BDD 或 To-be

**合併驗收**:
垂直切片合併／上線前：BDD 綠、L1/L2/L3 檢核、PM sign-off。非開工門檻。
_Avoid_: 與開工門檻混為一談

**Unverified Logic 觀測鐵律**:
重構須與 legacy 行為對齊。flow.md § Unverified Logic 所列分支，refactor 必加 runtime log；無 hit 後才可刪。新發現謎團先補標再加 log，禁止 silent 刪除。
_Avoid_: 建議性 log、未標記即刪除分支

**Figma As-is 畫布**:
盤點凍結後依 spec 100% 還原正式環境的 Figma 畫布。PM 對齊期與 Docusaurus spec 成對使用；非考古期前端工作項目。
_Avoid_: 設計稿終稿、To-be mockup（此階段）

## Figma Token 三層

**Raw / Primitives（原始色票）**:
最底層色彩字典，直接採 Tailwind CSS palette 命名（如 slate-500、blue-600）。禁止直接綁定畫布。
_Avoid_: primitive/neutral、自創色票名

**Brand（品牌漸層）**:
網站品牌色 100–900 scale（如 brand-blue-100、brand-orange-500）。供 Semantic 引用；禁止直接綁定畫布。
_Avoid_: brand/primary 單一值（無 scale）

**Semantic Token（語意色）**:
畫布唯一合法 Token。優先 shadcn 標準（background、primary、muted…）；brand／業務色在 Semantic 命名（如 link、brand-pink），於 globals.css `:root` 擴充，follow shadcn CLI 慣例。Figma Semantic 與 :root 變數 1:1。
_Avoid_: 畫布綁 Raw、與 shadcn 脫鉤的平行 token 系統

**Obra shadcn/ui kit**:
Figma 社區模板起點（https://obra.studio/work/figma-shadcn-ui-kit/）。複製至各專案本地後覆寫 Brand / Semantic，搭配 code 端 shadcn/ui CLI。
_Avoid_: 從零自建 Figma 元件庫

**Figma 文案（非 i18n SSOT）**:
畫布只放英文可讀文案（主語系 EN），不放 i18n key、不用 Variables Mode 維護翻譯。Description 限設計備註（動態／占位符／spec 連結）；key 與 ja／zh 等翻譯走考古 JSON → Sheet → code 與 docs/main/pages/。
_Avoid_: Figma 放 key、Variables 雙 SSOT、畫布用非 EN 主文案

**i18n Namespace**:
整理後翻譯以頁面／畫面為 namespace（checkout、affiliate-intro）；跨頁共用 → common。sync 輸出 messages/{locale}/{namespace}.json，檔內巢狀 JSON；Sheet key 欄用 dot notation，sync 時展開。
_Avoid_: 整條 flow 一個 namespace、code 端扁平 JSON

**i18n Sheet SSOT**:
考古整理保留 legacy 各語系原文，只做格式清洗與 key 重命名；寫入 Sheet 時 en／ja／zh_TW 等欄位應已齊全，非空殼待翻譯。
_Avoid_: 考古階段重新翻譯、Sheet 僅放 EN 待 Gemini 補譯

**i18next → next-intl 整理**:
考古期自 i18next 遷移至 next-intl 結構。多餘空白不 trim；陣列 `[a,b,c]` 換行改併為單 key 內 `\n`；插值 `{{var}}` 整理時直接改 `{var}`（Sheet 即終態，sync script 不轉格式）。code 用 whitespace-pre-line 渲染。
_Avoid_: sync script 做 placeholder 轉換、整理時刪空白

**Client-side API 邊界（無 BFF）**:
不建 BFF。前端 fetch Core API 後以 Zod safeParse + transform 正規化；ApiProtocolError（格式）與 ApiBusinessError（業務）分離。code 目錄 slug 對齊 contract-schemas/endpoints/。
_Avoid_: 元件直接碰 Raw JSON、另建 BFF 層

**ApiProtocolError / ApiBusinessError**:
Protocol：非 JSON、HTML 錯頁、Zod 失敗。Business：後端 error envelope。handleResponse 統一分流。
_Avoid_: 元件內通靈判斷 error 格式

**考古工作目錄（records/ + main/）**:
考古期 Agent 寫入、開發者查閱與 refactor 引用的工作資料。盤點凍結後留存；PM 對外溝通改走 Docusaurus 產出，不直接閱讀此目錄。
_Avoid_: Docusaurus、規格書終稿（對 PM 而言）
