let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭─────[ *_INFORMASI OWNER_* ]─────✧
┴
│ *🎀YUK SALING KENAL SAMA OWNER🎀*
┬
╰──────────···`.trim()
  const button = {
        buttonText: 'tentang owner',
        description: kontol,
        sections:  [{title: "pilih aje coek,jgan cari yg gk ada", rows: [
        {title: '*_Menu utama_*', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: '*_ASAL KOTA_*', description: "asal tempat owner", rowId:".asal"},
        {title: '*_GITHUB_*', description: "Github owner", rowId:".github"},
        {title: '*_YOUTUBE_*', description: "chenel owner", rowId:".yt"},
        {title: '*_TIKTOK_*', description: "TIKTOK owner", rowId:".tt"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(infoowner|biodata)$/i
handler.help = ['rules']
module.exports = handler
