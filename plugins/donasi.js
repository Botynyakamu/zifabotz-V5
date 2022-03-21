//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
╔═══════════════════
║ _*DONASI UNTUK ZIFABOTZ*_
╠═══════════════════
║╭──❉ 〔 *𝗗𝗢𝗡𝗔𝗦𝗜* 〕 ❉──────
║│➸ *DANA* : *_085828764046_*
║│➸ *PULSA*: *_085828764046_*
║│➸ *GOPAY*: _*085828764046*_
║╰──────────────────
╰═════```by.zifabotz```
`.trim(), watermark, 'MENU BOT', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
