let handler  = async (m, { conn, usedPrefix: _p }) => {
ye = `@${m.sender.split`@`[0]}`
let info = `Ea mencari sc dgn gaya, Mending Masuk gc gua.
• https://chat.whatsapp.com/L4wHUhXDZQyIX9d8eDNV76
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*${global.packname}*`, 'status@broadcast') 
}
handler.help = ['github']
handler.tags = ['info']
handler.command = ['script', 'sc', 'scbot', 'github']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

module.exports = handler
