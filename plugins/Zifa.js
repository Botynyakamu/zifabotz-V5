let handler = async (m, { conn }) => {
let caption = `anjir toxic🗿 awokawokaowk truskan bakat mu`

conn.sendButton( m.chat, caption, `©️ zifabotz`, `thankyou`, `.👍`, m)

       }
       
handler.customPrefix = /^(.sc|.script|.scr|.scrp|.scrpt)/i
handler.command = new RegExp
module.exports = handler
