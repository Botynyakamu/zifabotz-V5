let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭─────[ *JASA RUN BOT* ]─────✧
┴
│ *📮: CARI SC SENDIRI*
┬
╰──────────···`.trim()
  const button = {
        buttonText: '⎙ㅤklik sini ⎙ㅤ',
        description: kontol,
        sections:  [{title: "STORE MURSID", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'nomor mursid', description: "kalau mau run silahkan cht mursid", rowId:".ownermursid"},
        {title: 'RULES', description: "rules zifabotz", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(run|runbotmursid)$/i
handler.help = ['rules']
module.exports = handler
