let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭─────[ *STORE BOT* ]─────✧
┴
│ *STORE ZIFABOTZ*
┬
╰──────────···`.trim()
  const button = {
        buttonText: '🛒STORE ZIFABOTZ🛒',
        description: kontol,
        sections:  [{title: "STORE ZIFABOTZ", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa zifabotz', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewazifa"},
        {title: 'Sewa satbotsss', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewabotsattt"},
        {title: 'Jasa run mursid', description: "jasa run bot", rowId:".jasarun"},
        {title: 'RULES', description: "rules zifabotz", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(iklan|sponsor)$/i
handler.help = ['rules']
module.exports = handler
