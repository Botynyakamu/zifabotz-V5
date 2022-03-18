let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *_INFORMASI OWNER_* ´ˎ˗
│ ✎ _Nama_ : Rozi
│ ✎ _Umur_ : 15
│ ✎ _Kelas_ : privasi
│ ✎ _Asal_ : Pontianak
│ ✎ _Official Grup_ :
│    https://chat.whatsapp.com/I8Q4oJVw8buHhIgMH5iVAv
│ ✎ _Instagram_ : 
│    instagram.com/zalfapontianak
│ ✎ _WhatsApp_ :
│    wa.me/6285828764046
╰‿‿‿‿‿‿‿‿
`.trim(), m)
}

handler.help = ['inforozi']
handler.tags = ['main', 'utama']
handler.command = /^(inforozi)$/i

handler.exp = 150

module.exports = handler
