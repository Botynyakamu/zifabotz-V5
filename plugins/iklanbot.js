let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭─────[ *IKLAN BOT* ]─────✧
┴
│ IKALAN BOT BERBAYAR 10K PERMANEN
│ BAYAR LANGSUNG DI BUATIN
│ TIDAK MENERIMA HUTANG
│ KALAU MAU PASANG IKLAN SILAHKAN CHT OWMER
┬
╰──────────···`.trim()
  const button = {
        buttonText: 'IKLAN ZIFABOTZ',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa zifabotz', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewa"},
        {title: 'Group Bot', description: "Official Group Bot zifabotz", rowId:".gcbot"},
        {title: 'Donasi', description: "Donasi agar selalu online", rowId:".donasi"},
        {title: 'Owner', description: "Owner/Creator Bot", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(iklan|sponsor)$/i
handler.help = ['rules']
module.exports = handler
