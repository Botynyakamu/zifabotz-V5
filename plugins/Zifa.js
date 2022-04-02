let handler = async (m, { conn }) => {
let caption = `📮: *BOT INI MENGGUNAKN SC DARI https://github.com/Botynyakamu/zifabotz-V5*`

conn.sendButton( m.chat, caption, `©️ zifabotz`, `thankyou`, `.👍`, m)

       }
       
handler.customPrefix = /^(.sc|.script|.scr|.scrp|.scrpt)/i
handler.command = new RegExp
module.exports = handler
