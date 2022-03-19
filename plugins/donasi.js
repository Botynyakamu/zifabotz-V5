let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
┌────〔 DONASI 〕
│✙ Gopay
│  085828764046
│*TIDAK MEMAKSA UNTUK BERDONASI*
│✙ Dana
│  085828764046
│*TIDAK MEMAKSA UNTUK BERDONASI*
│✙ Owner
│ wa.me/6285828764046
╰────────────
`.trim(), 'Jgn Asal Klik', 'BACK', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
