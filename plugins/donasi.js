let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
╔═══════════════════
║ _*DONASI UNTUK ZIFABOTZ*_
╠═══════════════════
║╭──❉ 〔 *𝗗𝗢𝗡𝗔𝗦𝗜* 〕 ❉──────
║│➸ *DANA* : *_085828764046_*
║│➸ *PULSA*: *_085828764046_*
║│➸ *GOPAY*: _*085828764046*_
║╰──────────────────
╰═════```byzifabotz```
`.trim(), 'JANGAN ASAL SALIN', 'BACK', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
