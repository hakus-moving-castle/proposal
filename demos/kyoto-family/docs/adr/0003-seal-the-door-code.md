# 0003 — 門鎖密碼加密後嵌入，不以明文部署

- 狀態：**採用**
- 日期：2026-09-12

## 脈絡

這個 repo（`hakus-moving-castle/proposal`）是 **PUBLIC**，而且 `main` 一推就自動部署到 GitHub Pages。

民宿 Ken House Kyoto 採**自助入住**：屋主於抵達前 7 天發送鑰匙箱密碼，住客自行開箱取鑰匙。攻略頁需要顯示這個密碼 —— 使用者的原話是「密碼直接幫我寫上去好了」。

同一頁上還有一件**必須是明文**的東西：民宿的日文地址 `京都市中京区壬生御所ノ内町10-14`。它要拿給計程車司機看、要餵給 Google Maps，加密就失去用途。

## 決策

**地址明文，鑰匙箱密碼加密。**

機密內容（鑰匙箱密碼、WiFi 密碼、事前登記表單連結、KKday 憑證 QR、各訂單編號）封成一個密文區塊嵌在 `index.html`，家人輸入一次通關碼解開，之後同一支手機不再詢問（存 localStorage）。

構造為 encrypt-then-MAC：

```
金鑰   = PBKDF2-HMAC-SHA256(通關碼, salt, 600,000 次, 64 bytes) → kEnc | kMac
金鑰流 = HMAC-SHA256(kEnc, BE32(i)) 串接
密文   = 明文 XOR 金鑰流
標籤   = HMAC-SHA256(kMac, salt ‖ 密文)[:16]
```

瀏覽器端用 WebCrypto 的 `PBKDF2` 與 `HMAC` 還原，**不需要任何函式庫**，離線可用。通關碼與明文值記在 `SECRETS.md`（已 gitignore、已排除部署）。

## 理由

**地址 ＋ 鑰匙箱密碼一起公開，等於把家門鑰匙放到網路上**，而睡在裡面的是使用者的媽媽和姊姊。這兩項單獨存在都無害，**合起來才構成風險**，所以只要切斷其中一項就夠了 —— 而地址是不能動的那一項。

沒有選擇「乾脆不部署、只給本機檔案」，是因為交付物是一個要加到主畫面、要離線可開、要在改札口和集合場所掏出來用的 PWA。本機檔案做不到這些。

沒有沿用 kyoto-plan 的 FNV-1a XOR 混淆，是因為**保護對象不同**：那邊保護的是一張水族館門票（被盜用的損失是一張票錢），這邊保護的是一道門。同樣的工程量下沒有理由用弱的那個。

## 取捨

- **放棄**：一鍵即開。家人第一次打開要輸入一次通關碼，而通關碼得另外用 LINE 告訴她們 —— 多一道關卡。
- **換得**：即使有人偶然找到這個 public repo，也拿不到門鎖密碼。

威脅模型是**偶然發現與自動化爬取**，不是針對這家人的定向攻擊。600k 次 PBKDF2 讓字典攻擊的成本上升到與這個威脅模型不相稱的程度；若有人已經在定向攻擊這家人，他們不需要從 GitHub 下手。

WebCrypto 的 `crypto.subtle` 只在 **secure context** 下可用，因此這頁必須經 https 開啟。GitHub Pages 是 https，PWA 也只會從那裡載入；`file://` 直接開會解不開，此時頁面會明說原因而不是靜默失敗。

## 後果

- `.gitignore` 與部署 workflow 必須同時排除：`SECRETS.md`、`docs/tools/secrets.json`、`demos/*/*.pdf`（KKday 憑證與 Booking 確認單的原始檔）。
- 換通關碼＝改 `SECRETS.md` → 重跑 `docs/tools/seal.py` → 把輸出貼回 `index.html` 的 `SEALED`。
- 已驗證：加密 → 瀏覽器解密 → 渲染這一輪對 KKday QR 是**位元級無損**（7,453 bytes，SHA-256 `603efda0b4f9eb8e…`），且該圖以 CoreImage `CIDetector` 掃描得到的 payload 與原憑證一致。
