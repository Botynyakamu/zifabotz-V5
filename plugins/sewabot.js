let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ 2 Bulan
├ 1 Bulan
├ 1 Minggu
├ Trial 1 Hari
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Digi : 60149431385
Umobile: 60189830350
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '2 Bulan', description: "Rm30.00\nSewa bot tanpa batasan waktu.", rowId:".masuk"},
        {title: '1 Bulan', description: "Rm25.00\nSewa bot selama 1 bulan.", rowId:".masuk"},
        {title: '1 Minggu', description: "Rm10.00\nSewa bot selama 1 minggu.", rowId:".masuk"},
        {title: 'Trial', description: "FREE\nBot gratis 1 Hari.", rowId:".join"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".snk"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
