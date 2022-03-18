let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants }) => {
   r = text || 'gada pesannya'
   l = conn.getName(m.sender)
  let users = participants.map(u => u.jid)
  conn.reply(m.chat, '║╭──❉ 〔 TAGALL 〕\n│\n║│➸*Nama:* ' + l +  '\n║│➸ *Pesan:* ' + r +'\n│\n' + users.map(v => '║│➸@' + v.replace(/@.+/, '')).join`\n`, m, {
    contextInfo: { mentionedJid: users }
 
  
})
}
handler.command = /^(tagall|everyone)$/i
handler.tags = ["group"]
handler.help = ["tagall", "everyone"].map(a => a + ' <pesan>')
handler.owner = false 
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
