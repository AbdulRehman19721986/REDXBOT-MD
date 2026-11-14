// ============================================================
//  config.js  —  REDXBOT302 (FIXED: full mode support)
//  Persistent MODE getter/setter + all original config
// ============================================================

try { require('dotenv').config(); } catch (e) { console.warn('[CONFIG] dotenv not available, continuing with process.env as-is:', e.message); }
const { existsSync, readFileSync, writeFileSync, mkdirSync } = require('fs');
const { join } = require('path');

// ── Persistent mode store ─────────────────────────────────────
const MODE_FILE = join(__dirname, 'data', 'mode.json');

function loadMode() {
  try {
    if (existsSync(MODE_FILE)) {
      const data = JSON.parse(readFileSync(MODE_FILE, 'utf-8'));
      const m = (data.mode || '').toLowerCase();
      if (['public', 'groups', 'inbox', 'private', 'self'].includes(m)) return m;
    }
  } catch {}
  // Env fallback, then hard default = public
  return (process.env.MODE || 'public').toLowerCase();
}

function saveMode(mode) {
  try {
    const dir = join(__dirname, 'data');
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    writeFileSync(MODE_FILE, JSON.stringify({ mode }, null, 2));
    // Keep global in sync
    global.MODE = mode;
  } catch (e) {
    console.error('[MODE] Save failed:', e.message);
  }
}

// ── Session & pairing ─────────────────────────────────────────
global.SESSION_ID      = process.env.SESSION_ID || '';
global.PAIRING_NUMBER  = '+923009842133';

// ── Newsletter JID ────────────────────────────────────────────
global.NEWSLETTER_JID = process.env.NEWSLETTER_JID || '120363426816577327@newsletter';

// ── APIs ──────────────────────────────────────────────────────
global.APIs = {
  xteam:    'https://api.xteam.xyz',
  dzx:      'https://api.dhamzxploit.my.id',
  lol:      'https://api.lolhuman.xyz',
  violetics:'https://violetics.pw',
  neoxr:    'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari:   'https://api.akuari.my.id',
  akuari2:  'https://apimu.my.id',
  nrtm:     'https://fg-nrtm.ddns.net',
  bg:       'http://bochil.ddns.net',
  fgmods:   'https://api-fgmods.ddns.net',
};

global.APIKeys = {
  'https://api.xteam.xyz':        'd90a9e986e18778b',
  'https://api.lolhuman.xyz':     '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id':      'yourkey',
  'https://violetics.pw':         'beta',
  'https://zenzapis.xyz':         'yourkey',
  'https://api-fgmods.ddns.net':  'fg-dylux',
};

// ── Module exports ────────────────────────────────────────────
module.exports = {
  // Bot identity
  BOT_NAME:    process.env.BOT_NAME    || 'REDx MD Bot',
  BOT_VERSION: process.env.BOT_VERSION || '7.1.0',
  PREFIX:      process.env.PREFIX      || '.',

  // Owner / sudo
  OWNER_NUM:   process.env.OWNER_NUM || process.env.OWNER_NUMBER || '923009842133',
  OWNER_NAME:  process.env.OWNER_NAME  || 'Abdul Rehman Rajpoot',
  SUDO:        process.env.SUDO
                 ? process.env.SUDO.split(',').map(s => s.trim()).filter(Boolean)
                 : [],

  // ─── MODE ────────────────────────────────────────────────────
  //   public  → everyone (all chats)          DEFAULT
  //   groups  → groups only (owner always passes)
  //   inbox   → private/DM only (owner always passes)
  //   private → owner + sudo only (any chat)
  //   self    → owner ONLY (strictest)
  // ─────────────────────────────────────────────────────────────
  get MODE()    { return loadMode(); },
  set MODE(val) { saveMode(val.toLowerCase()); },

  loadMode,
  saveMode,

  // Legacy / compat
  WARN_COUNT:     3,
  NEWSLETTER_JID: global.NEWSLETTER_JID,
  APIs:           global.APIs,
  APIKeys:        global.APIKeys,

  // Server
  PORT:       process.env.PORT       || 3000,
  SESSION_ID: process.env.SESSION_ID || '',
};
