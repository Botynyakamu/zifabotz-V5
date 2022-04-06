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
        sections:  [{title: "YUK KENALAN SAMA OWNER", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'KELENGKAPAN', description: "Dll tentang owner", rowId:".asal"},
        {title: 'GITHUB', description: "Github owner", rowId:".gh"},
        {title: 'YOUTUBE', description: "chenel yt owner", rowId:".ytzi"},
        {title: 'TIKTOK', description: "TIKTOK owner", rowId:".tt"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(infoowner|biodata)$/i
handler.help = ['rules']
module.exports = handler
