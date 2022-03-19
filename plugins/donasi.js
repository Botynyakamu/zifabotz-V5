let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
╭═══════════════════════
║╭──❉ 〔 ⳹ ❋ཻུ۪۪⸙*DONASI*⳹ ❋ཻུ۪۪ 〕 ❉────── 
║│➸ DANA: 085828764046
║│➸ GOPAY: 085828764046
║│➸ PULSA : 085828764046
║│➸ *DONASI INI TIDAK MEMAKSA KAMU*
║│➸ *DAN KALAU ADA REZEKY DONASI AJA AGAR BOT SELALU ON & CREATOR BOT SEMANGAT*
║│➸ ```TERIMAKASIH```
╰─────────❉
_____••••••••• 
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), 'seikhlasnya aja', 'Owner Bot', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
