/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (autoketik === true) return m.reply('Auto Typing udah Aktif Banhhh🗿🚬')
//if (autoketik === true) return 
autoketik = true
m.reply(`Success Ativated Mode Auto Typing`)

}
handler.help = ['onketik']
handler.tags = ['info', 'main']

handler.command = /^(onngetik|onk|onketik)$/i

module.exports = handler
