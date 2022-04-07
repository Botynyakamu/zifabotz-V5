let handler = async (m, { conn }) => {
let caption = `*📮: HALLO KAK SAYA ZIFABOTZ,SILAHKAN KLIK BUTTON DI BAWAH UNTUK MENGETAHUI FITUR BOT*`

conn.sendButton( m.chat, caption, `©️ zifabotz`, `Menu`, `.menu`, m)

       }
       
handler.customPrefix = /^(hallo|hay|zif|zifa|zifabot|zifabotz|hai|hay|menu)/i
handler.command = new RegExp
module.exports = handler
