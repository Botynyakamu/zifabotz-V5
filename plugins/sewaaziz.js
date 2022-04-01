let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭─────[ *SEWA SATBOTSSS* ]─────✧
┴
│ *pilih aja kak*
┬
╰──────────···`.trim()
  const button = {
        buttonText: '🛒klik sini🛒',
        description: kontol,
        sections:  [{title: "STORE ZIFABOTZ", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'nomor owner satbotsss', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewabotsat"},
        {title: 'list harga', description: "harga sewa satbotsss", rowId:".hargasatbotss"},
        {title: 'RULES', description: "rules zifabotz", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(botsat|sewasat)$/i
handler.help = ['rules']
module.exports = handler
