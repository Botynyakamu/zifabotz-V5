let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═════════════════
║╭──❉ *BIODATA OWNER* ❉───
║│➸ *Nama* : Rama ( ahmad ) 
║│➸ *Umur* : 19
║│➸ *Kelas* :  3 SMA
║│➸ *Status* : butuh ayng AWOKAWOK
║╰───────────────
╰════════════════
╭════════════════
║╭──❉ *ASAL KOTA* ❉───
║│➸ *DAERAH* : *_Jakarta =}} pusat_*
║│➸ *ASAL KOTA* : *_BEKASI_*
║│➸ *ALAMAT RUMAH* : *[PRIVASI]*
║│➸ *Gmail* : putriecee@gmail.com
║╰────────────────
╰═════════════════
_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'ROZI')).buffer(), ext, 'zifabotz', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewazifa', m)

}
handler.help = ['asal', 'kota']
handler.tags = ['info']
handler.command = /^(asal|kota)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
