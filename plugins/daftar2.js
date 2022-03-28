let handler = async (m, { conn }) => {
let caption = `hanya bisa di gunakan di chat pribadi karna demi kepribadian anda`

conn.sendButton( m.chat, caption, `©️ zifabotz`, `>>Oky ngab<<`, `.👍`, m)

       }
       
handler.customPrefix = /^(daftar|.daftar|.daftar|robot)/i
handler.command = new RegExp
module.exports = handler
