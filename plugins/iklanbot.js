let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭─────[ *IKLAN BOT* ]─────✧
┴
│ *IKALAN ZIFABOTZ*
┬
╰──────────···`.trim()
  const button = {
        buttonText: '🛒STORE ZIFABOTZ🛒',
        description: kontol,
        sections:  [{title: "pilih aje coek,jgan cari yg gk ada", rows: [
        {title: '*_Menu utama_*', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: '*_Sewa zifabotz_*', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewazifa"},
        {title: '*_Sewa azizbotz_*', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewaaziz"},
        {title: '*_Jasa run mursid_*', description: "jasa run bot", rowId:".jasarun"},
        {title: '*_RULES_*', description: "rules zifabotz", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(iklan|sponsor)$/i
handler.help = ['rules']
module.exports = handler
