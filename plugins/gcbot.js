let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
╭═══════════════════════
║╭──❉ 〔 ⳹ ❋ཻུ۪۪⸙𝙕𝙞𝙛𝙖𝙗𝙤𝙩𝙯⳹ ❋ཻུ۪۪ 〕 ❉────── 
║│➸ *_GROUP OFFC ZIFABOTZ_*
║│➸  *https://chat.whatsapp.com/I8Q4oJVw8buHhIgMH5iVAv*
╰─────────❉
▌│█║▌║▌║║▌║▌║█│▌
⳹ ❋ཻུ۪۪⸙𝙕𝙞𝙛𝙖𝙗𝙤𝙩𝙯⳹ ❋ཻུ۪۪⸙ by.rozi
`.trim()
conn.sendButton(m.chat, str, `${botol}`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
