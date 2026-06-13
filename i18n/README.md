# i18n Conventions

專案層翻譯命名慣例，供未來翻譯腳本與 Google Sheet 同步使用。

## Locale Codes

| Code | Language |
|------|----------|
| `zh-tw` | 繁體中文 |
| `en` | English |
| `ja` | 日本語（敬體：です/ます） |

## Key Format

```
<namespace>.<component>.<element>
```

範例：`checkout.coupon.btn.apply`

## Entry Schema（供 Sheet / JSON 腳本）

```json
{
  "status": "active",
  "namespace": "checkout",
  "key": "coupon.btn.apply",
  "legacy_key": "old_checkout_module_v2.APPLY_COUPON_BUTTON",
  "zh_TW": "套用優惠",
  "en": "Apply coupon",
  "ja": "クーポンを適用する",
  "description": "Used in CouponInput component..."
}
```

### Status Values

| Status | Meaning |
|--------|---------|
| `active` | 使用中，同步至程式碼 |
| `unused` | 確認未使用，可刪除 |
| `in-progress` | 翻譯進行中，程式碼顯示 `🚧 ${value ?? "missing translation"}` |

## 鐵律

若需要的 key 不存在，**禁止在程式碼中自行發明新 key**。請 hardcode 並標記 `// TODO: i18n-missing`。

## Demo i18n

各 demo 的 UI 文案放於 `demos/<slug>/i18n/{zh-tw,en,ja}.json`，與專案層 i18n 分離。
