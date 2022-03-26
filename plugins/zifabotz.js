let handler = async (m, { conn }) => {
let caption = `APAAN MANGGIL” BAT BOT BAT BOT_-`

conn.sendButton( m.chat, caption, `apaan`, 'apaan','apaan', m)

       }
       
handler.customPrefix = /^(bot|woy|cuy)/i
handler.command = new RegExp
module.exports = handler
