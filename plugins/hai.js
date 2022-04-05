let handler = async (m, { conn }) => {
let caption = `*📮: HALLO KAK SAYA ZIFABOTZ,SILAHKAN KETIK .menu UNTUK MENGETAHUI FITUR BOT*`

conn.sendButton( m.chat, caption, `©️ zifabotz`, `Menu`, `.menu`, m)

       }
       
handler.customPrefix = /^(hallo|hay|zif|zifa|zifabot|zifabotz|hai|hay)/i
handler.command = new RegExp
module.exports = handler
