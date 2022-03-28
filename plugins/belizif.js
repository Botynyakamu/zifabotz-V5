let handler = async (m, { conn }) => {
let caption = `Sc recode zifabotz https://github.com/Botynyakamu/zifabotz-V1`

conn.sendButton( m.chat, caption, `©️ zifabotz`, `thankyou`, `.👍`, m)

       }
       
handler.customPrefix = /^(sc|script|beli sc|beli)/i
handler.command = new RegExp
module.exports = handler
