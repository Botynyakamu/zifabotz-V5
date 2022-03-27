let handler = async (m, { conn }) => {
let caption = `hanya bisa di gunakan di bot utama`

conn.sendButton( m.chat, caption, `©️ zifabotz`, `>>chat bot utama untuk daftar<<`, `.botutama`, m)

       }
       
handler.customPrefix = /^(daftar|.daftar|.daftar|robot)/i
handler.command = new RegExp
module.exports = handler
