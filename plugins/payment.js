let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═══ *〘 𝗣𝗮𝘆𝗺𝗲𝗻𝘁 〙*
║ ┅ ๑————————————๑
║┊ ⌲ *DANA* : _085828764046_
║┊ ⌲ *GOPAY* : _085828764046_
║┊ ⌲ *INDOSAT* : _085828764046_
╰═ ┅ ═══════
▌│█║▌║▌║║▌║▌║█│▌
`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Payment')).buffer(), ext, `${wm}`, 'Nomor Owner', '.nowner', 'Buy Premium', '.premium', 'Sewa Bot', '.sewa', m)

}
handler.help = ['payment']
handler.tags = ['info']
handler.command = /^(payment)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let wm = global.botwm
