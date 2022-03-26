let handler = async (m, { conn }) => {
let caption = `APA OI!!, MANGGIL” GAK JELAS`

conn.sendButton( m.chat, caption, `>>zifabotz<<`, `>>zifabotz<<`, `.infoowner`, m)

       }
       
handler.customPrefix = /^(bot|botwa|robotwa|robot)/i
handler.command = new RegExp
module.exports = handler
