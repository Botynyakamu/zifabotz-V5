let handler = async (m, { conn }) => {
let caption = `BELI SC? NIH KAK https://wa.me/p/4926495850761293/6285828764046`

conn.sendButton( m.chat, caption, `©️ zifabotz`, `Beli sc`, `.👍`, m)

       }
       
handler.customPrefix = /^(sc|script|beli sc|beli)/i
handler.command = new RegExp
module.exports = handler
