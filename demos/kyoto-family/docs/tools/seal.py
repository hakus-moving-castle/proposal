#!/usr/bin/env python3
"""把機密內容封成 index.html 可解的密文。

構造：encrypt-then-MAC
  k      = PBKDF2-HMAC-SHA256(pass, salt, ITER, 64) -> kEnc(32) | kMac(32)
  stream = HMAC-SHA256(kEnc, BE32(i)) 串接
  ct     = pt XOR stream
  tag    = HMAC-SHA256(kMac, salt || ct)[:16]
瀏覽器端用 WebCrypto 的 PBKDF2 + HMAC 就能還原，不需要任何函式庫。
"""
import base64, hashlib, hmac, json, os, struct, sys

ITER = 600_000
SALT = b'kyoto-family-2026'

def stream(k, n):
    out = bytearray()
    i = 0
    while len(out) < n:
        out += hmac.new(k, struct.pack('>I', i), hashlib.sha256).digest()
        i += 1
    return bytes(out[:n])

def seal(passphrase: str, payload: bytes):
    dk = hashlib.pbkdf2_hmac('sha256', passphrase.encode(), SALT, ITER, 64)
    kEnc, kMac = dk[:32], dk[32:]
    ks = stream(kEnc, len(payload))
    ct = bytes(a ^ b for a, b in zip(payload, ks))
    tag = hmac.new(kMac, SALT + ct, hashlib.sha256).digest()[:16]
    return {
        'salt': SALT.decode(),
        'iter': ITER,
        'tag': base64.b64encode(tag).decode(),
        'ct': base64.b64encode(ct).decode(),
    }

if __name__ == '__main__':
    here = os.path.dirname(os.path.abspath(__file__))
    src = json.load(open(os.path.join(here, 'secrets.json')))
    qr = base64.b64encode(open(os.path.join(here, src.pop('_qr_file')), 'rb').read()).decode()
    src['kkQr'] = 'data:image/png;base64,' + qr
    blob = seal(src.pop('_pass'), json.dumps(src, ensure_ascii=False).encode())
    print(json.dumps(blob, indent=2))
