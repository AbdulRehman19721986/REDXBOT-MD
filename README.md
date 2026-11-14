# REDx MD Bot — WhatsApp Multi-Device Bot

**REDx MD Bot** is a WhatsApp Multi-Device automation bot project developed and maintained by **Abdul Rehman Rajpoot**.

> **Project name history:** This project was previously published as **REDXBOT302**. REDx MD Bot is its current name; REDXBOT302 is retained here as the former name so existing users can recognize the project.

- **Developer:** Abdul Rehman Rajpoot
- **GitHub account:** [@AbdulRehman19721986](https://github.com/AbdulRehman19721986)
- **Official source repository:** [REDx MD Bot](https://github.com/AbdulRehman19721986/REDXBOT-MD)
- **WhatsApp Channel:** https://whatsapp.com/channel/0029VbCMUDuLikgGEPWQZN3u
- **WhatsApp Group:** https://chat.whatsapp.com/C4ynk2v10WXDeL67ahhJLj
- **YouTube:** https://youtube.com/@rootmindtech
- **Telegram:** https://t.me/TeamRedxhacker2

## About REDx MD Bot

REDx MD Bot is a Node.js-based WhatsApp bot built around the Baileys WhatsApp Web library. This repository contains the bot source code, configuration, plugins, and deployment files. The project is intended for users who want to configure and run their own WhatsApp Multi-Device bot.

Search terms associated with this project include **REDx MD Bot**, **REDx MD**, **REDXBOT302**, **WhatsApp bot**, **WhatsApp Multi-Device bot**, and **Abdul Rehman Rajpoot**.

## Features

The project includes commands and tools across several categories:

- **AI tools:** GPT, OpenAI, DeepSeek, Bing, and image-generation integrations
- **Media:** YouTube, TikTok, Spotify, Facebook, and Instagram-related tools
- **Group administration:** tagging, promotion, demotion, kick, mute, and unmute
- **Utilities:** stickers, URL upload, translation, text-to-speech, OCR, and PDF tools
- **Games and entertainment:** trivia, Wordle, truth-or-dare, and board games
- **Islamic utilities:** Quran and prayer-time commands
- **Group protection:** anti-link, anti-badword, anti-delete, and anti-call options
- **Owner tools:** settings, broadcast, memory clearing, and plugin reload

Feature availability can depend on the configured APIs, environment variables, and installed plugins.

## Quick Setup

### 1. Get a session ID

Use the project's pairing service:

https://redxpair3-sigma.vercel.app

### 2. Configure environment variables

```bash
cp sample.env .env
# Edit .env and add your SESSION_ID and other settings.
```

### 3. Install dependencies and start

```bash
npm install
node --expose-gc index.js
```

### 4. Optional rebrand utility

Run this only when you intend to apply the repository's bundled rebrand utility:

```bash
node rebrand.js
```

## Deployment

### Railway

1. Fork this repository and connect it to Railway.
2. Add the required environment variables, including SESSION_ID.
3. Deploy the application.

### Heroku

```bash
heroku create
heroku config:set SESSION_ID=YOUR_SESSION_ID
git push heroku main
```

### VPS with PM2

The existing PM2 process label is retained for compatibility with installations that already use it.

```bash
npm install -g pm2
pm2 start index.js --name REDXBOT302
pm2 save
pm2 startup
```

## Environment Variables

| Variable | Purpose |
|---|---|
| `SESSION_ID` | WhatsApp session ID |
| `PAIRING_NUMBER` | Optional pairing number when not using a session |
| `BOT_NAME` | Bot display name; defaults to `REDx MD Bot` |
| `COMMAND_MODE` | Command access mode, such as `public` or `private` |
| `TIMEZONE` | Time zone; defaults to `Asia/Karachi` |
| `APP_URL` | Application URL used by supported keep-alive setup |

Keep credentials and private session data in environment variables. Do not commit your real .env file or session ID.

## Official Project Links

- **GitHub repository:** https://github.com/AbdulRehman19721986/REDXBOT-MD
- **Developer profile:** https://github.com/AbdulRehman19721986
- **WhatsApp Channel:** https://whatsapp.com/channel/0029VbCPnYf96H4SNehkev10

---

**REDx MD Bot** — developed and maintained by **Abdul Rehman Rajpoot**.
