let handler = async (m, { conn }) => {
let caption = `BELI SC? SILAHAKN KLIK DI BAWAH!!`

conn.sendButton( m.chat, caption, `©️ zifabotz`, `Beli sc`, `.owner`, m)

       }
       
handler.customPrefix = /^(.sc|.script|.beli sc|.beli)/i
handler.command = new RegExp
module.exports = handler
