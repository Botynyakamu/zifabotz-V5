let handler = async (m, { conn }) => {
let caption = `BELI SC? NIH KAK`

conn.sendButton( m.chat, caption, `©️ zifabotz`, `Beli sc`, `beli sc`, m)

       }
       
handler.customPrefix = /^(sc|script|beli sc|beli)/i
handler.command = new RegExp
module.exports = handler
