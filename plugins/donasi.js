//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
┌〔 Donasi • Topup 〕
├ Digi🌸: 60149431385
├ Umobile🌸: 60189830350
├ DONASI BG, BIAR GW SEMANGAT🗿
├ GROUP RIEL BOT¹🥀
├ https://chat.whatsapp.com/HYr6cgrs7jmEmPMFtwviHW
├ GROUP RIEL BOT²✨
├ https://chat.whatsapp.com/F4mwyaFGBBR9UD4LFL3P1I
├ GROUP BOT LAN¹🥀
├ https://chat.whatsapp.com/BCkOrQkTa7pIORSOWyBJpk
├ GROUP BOT² LAN✨
├ https://chat.whatsapp.com/GzDQlgoUamS5Ok4EOcYRRB
├ JIKA LINK GRUB DI RESET SILA CHAT OWNER,KETIK #owner
└────
`.trim(), watermark, 'Menu', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
