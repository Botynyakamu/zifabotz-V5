let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
╭═══ 〔 𝐋𝐈𝐒𝐓 𝐁𝐄𝐑𝐋𝐀𝐍𝐆𝐆𝐀𝐍𝐀𝐍 〕 ════
├⬡ 𝟏 ᗷᑌᒪᗩᑎ
├⬡ 4 ᗷᑌᒪᗩᑎ
├⬡ 8 BULAN
└═══════════════
𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗸𝗹𝗶𝗸 𝗽𝗮𝗱𝗮 "𝗟𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮" 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗹𝗶𝗵𝗮𝘁 𝗹𝗶𝘀𝘁.
╭═══════════════════════
║╭──❉ 〔 𝐕𝐈𝐀 𝐌𝐎𝐁𝐈𝐋𝐄 〕 ❉──────
║│➸ *DANA* : 085828764046
║│➸ *PULSA*: 085828764046
║│➸ *GOPAY*: 085828764046
║╰─────────
▌│█║▌║▌║║▌║▌║█│▌▌│█║▌║▌║║▌║▌║█│
╰═══════════════════════
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '4 Bulan', description: "Rp30.000\nSewa bot/premium selama 4 bulan.", rowId:".masuk"},
        {title: '1 Bulan', description: "Rp15.000\nSewa bot/premium selama 1 bulan.", rowId:".masuk"},
        {title: '8 bulan', description: "Rp40.000\nSewa bot/premium selama 8 bulan.", rowId:".masuk"},
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
