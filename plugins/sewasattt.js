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
        sections:  [{title: "STORE SATBOTSSS", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'nomor owner satbotsss', description: "kalau mau sewa silahkan cht owner satbotsss", rowId:".ownerbotsattt"},
        {title: 'RULES', description: "rules zifabotz", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(botsattt|sewasat)$/i
handler.help = ['rules']
module.exports = handler
