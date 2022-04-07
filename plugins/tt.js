let handler = async (m, { conn }) => {
let caption = `*Duh owner gw udah gak main TIKTOK lagi*`

conn.sendButton( m.chat, caption, `©️ zifabotz`, `Menu`, `.?`, m)

       }
       
handler.customPrefix = /^(tt)/i
handler.command = /^(tt)/i
module.exports = handler
