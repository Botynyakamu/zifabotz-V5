let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : ROZI
║│➸ ```UMUR``` : 15thn
║│➸ ```ASAL``` : PONTIANAK
║│➸ ```OFFICIAL GRUP``` :
https://chat.whatsapp.com/I8Q4oJVw8buHhIgMH5iVAv
║│➸ ```ISTAGRAM``` : http://instagram.com/zalfapontianak
║│➸ ```WHATSAPP``` : http://wa.me/6285828764046
╰────────❉
`.trim(), m)
}

handler.help = ['inforozi']
handler.tags = ['main', 'utama']
handler.command = /^(inforozi)$/i

handler.exp = 150

module.exports = handler
