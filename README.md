# 🔥 REDXBOT302 v7.0 ULTRA

> **Advanced WhatsApp Bot — Combined REDXBOT302 v6**
>
> 👑 **Owner:** Abdul Rehman Rajpoot | +923009842133  
> ⭐ **GitHub:** https://github.com/AbdulRehman19721986/redxbot302  
> 📢 **Channel:** https://whatsapp.com/channel/0029VbCMUDuLikgGEPWQZN3u  
> 💬 **Group:** https://chat.whatsapp.com/C4ynk2v10WXDeL67ahhJLj  
> ▶️ **YouTube:** https://youtube.com/@rootmindtech  
> 🔗 **Telegram:** https://t.me/TeamRedxhacker2  

---

## ✅ What's New in v7.0 ULTRA

| Feature | Status |
|---|---|
| Combined 500+ commands from REDXBOT302 v6 + MUZAMIL-XD | ✅ |
| FFmpeg auto-setup (fixes all media errors) | ✅ |
| Auto-restart on crash (up to 15 times) | ✅ |
| 24/7 keep-alive (Heroku, Railway, Render) | ✅ |
| Single owner only (Abdul Rehman Rajpoot) | ✅ |
| Co-owner removed from all files | ✅ |
| Memory management + GC every 3 min | ✅ |
| Temp file auto-cleanup every 20 min | ✅ |
| AI commands: GPT, DeepSeek, Bing, Imagine | ✅ |
| Prayer times, Greetings, Quran commands | ✅ |
| Rate-limit protection (auto wait on 429) | ✅ |
| Decryption spam suppressed | ✅ |
| Hot reload (index.js changes applied live) | ✅ |
| Syntax check on all plugins at startup | ✅ |

---

## 🚀 Quick Setup

### Step 1 — Get Session ID
Visit: **https://redxpair3-sigma.vercel.app**

### Step 2 — Configure
```bash
cp sample.env .env
# Edit .env and add your SESSION_ID
```

### Step 3 — Install & Run
```bash
npm install
node --expose-gc index.js
```

### Step 4 — Rebrand (run once)
```bash
node rebrand.js
```

---

## 🌐 Deploy Options

### Heroku
```bash
heroku create
heroku config:set SESSION_ID=YOUR_ID
git push heroku main
```

### Railway
1. Fork this repo → Connect to Railway
2. Set `SESSION_ID` in env variables
3. Deploy

### PM2 (VPS/24h server)
```bash
npm install -g pm2
pm2 start index.js --name redxbot302
pm2 save && pm2 startup
```

---

## 📦 Plugin Categories

- **AI:** `.ai`, `.openai`, `.deepseek`, `.imagine`, `.gpt`, `.llama`, `.mistral`
- **Downloads:** `.ytdl`, `.tiktok`, `.spotify`, `.fb`, `.ig`, `.yt`
- **Groups:** `.tagall`, `.promote`, `.demote`, `.kick`, `.mute`, `.unmute`
- **Tools:** `.sticker`, `.tourl`, `.translate`, `.tts`, `.ocr`, `.pdf`
- **Fun:** `.greet`, `.ship`, `.truth`, `.dare`, `.wordle`, `.trivia`
- **Islamic:** `.quran`, `.prayertime`, `.hadith`
- **Security:** `.antilink`, `.antibadword`, `.antidelete`, `.anticall`
- **Games:** `.tictactoe`, `.hangman`, `.sudoku`, `.battleship`
- **Owner:** `.settings`, `.broadcast`, `.clearmemory`, `.reload`
- ...and 400+ more!

---

## ⚙️ Environment Variables

| Variable | Required | Description |
|---|---|---|
| `SESSION_ID` | ✅ | From https://redxpair3-sigma.vercel.app |
| `PAIRING_NUMBER` | Optional | Your number (if no session) |
| `BOT_NAME` | Optional | Bot display name |
| `COMMAND_MODE` | Optional | `public` / `private` |
| `TIMEZONE` | Optional | Default: `Asia/Karachi` |
| `APP_URL` | Optional | For Heroku keep-alive |

---

*© 2026 Abdul Rehman Rajpoot — REDXBOT302 v7.0 ULTRA*
