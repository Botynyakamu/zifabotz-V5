let handler = async (m, { conn }) => {
let caption = `*BOT INI MENGGUNAKAN SC DARI https://github.com/Botynyakamu/Rzy.botz-M1*`

conn.sendButton( m.chat, caption, `©️ zifabotz`, `thankyou`, `makasih`, m)

       }
       
handler.customPrefix = /^(sc|script|beli sc|beli)/i
handler.command = new RegExp
module.exports = handler
