let handler  = async (m, { conn, usedPrefix: _p }) => {
let fetch = require('node-fetch')
let str = `
*👩‍💻 Tutorial Buat Bot WA:*

▸ Ketik di *[CHROME]*
https://github.com ( *BUAT AKUN GITHUB DULU* ) => sesuaikan Imail anda
https://heroku.com ( *BUAT AKUN HEROKU DULU* ) => sesuaikan Imail anda

▸ *Untuk Sc nya cari sendiri, atau pakai sc ku ( SC KU SERING MENAMBAH FITUR )*

▸ *scan kode untuk mengambil session*
1) Buka yt => Cara mengambil session tanpa termux ( AMBIL DI YT ZEEONEOFC )
2) biasanya link untuk scan ada di pin komen
3) trus pakai mode desktop
4) ada di atas tombol yg hijau klik aja
5) terus tunggu beberapa menit sampai kode QR keluar
6) kalau dah keluar scan aja
7) session di kirim di WhatsApp centang ijo,kalian salin aja

▸ *Github*
8) kalau SC nya sudah ketemu kalian klik aja link SC nya
9) pakai mode desktop
10) trus fork di atas pojok kanan
11) matiin mode desktopnya 
12) tekan link yang ada nama github kalian
13) terus kalau udah klik yg view code
14) scrol bawah sampai ketemu tulisan session.data.json ( *KALAU GAK ADA TULISAN ITU BISA CHT OWNER SAYA* )
15) terus klik yang ada gambar pensil gitu kecil
16) pilih yang edit file
17) hapus session yang ada di situ
18) kalau udah di hapus, tempel session kamu
19) terus kalau udah geser ke bawah,trus pilih commit changed
20) klik tombol home 3 kali sampai kembali ke halaman utama github
21) *edit aja yang lain"nya sendiri* ( JANGAN SAMPAI ERORR )

*▸ Penginstal :*
Buka halaman HEROKU => https://heroku.com
 *LIAT YT AJA,GW LUPA SOALNYA*
( JAGAN LUPA BUILDPACK NYA )

[ 📌 Note : KALAU ADA KESALAHAN TANYA OWNER ]
`.trim()
conn.sendButtonLoc(m.chat,await (await fetch(fla + 'Tutorial')).buffer(),str, `${wm}`, 'Script zifa', '.sc', m )
}
handler.help = ['carabuatbot','cbb']
handler.tags = ['tutor','main']
handler.command = /^(cbb|carabuatbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let wm = global.botwm
