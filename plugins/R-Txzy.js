let handler = async (m, { conn }) => {
let caption = `*TANYA KE OWNER AJA COK,GW GAK TAU!*`

conn.sendButton( m.chat, caption, `©️ zifabotz`, `Otw tanya owner`, `.owner`, m)

       }
       
handler.customPrefix = /^(.sc|.script|.beli sc|.beli)/i
handler.command = new RegExp
module.exports = handler
