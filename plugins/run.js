let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
╭═══ 〔 𝐋𝐈𝐒𝐓 𝐁𝐄𝐑𝐋𝐀𝐍𝐆𝐆𝐀𝐍𝐀𝐍 〕 ════
├⬡ PERMANEN
└═══════════════
*_SILAHKAN KLIK  "jasa run"_*

Note: *SIAPKAN SC SENDIRI*
╭═══════════════════════
║╭──❉ 〔 𝐕𝐈𝐀 𝐌𝐎𝐁𝐈𝐋𝐄 〕 ❉──────
║│➸ *DANA*: 088233832771
║╰─────────
▌│█║▌║▌║║▌║▌║█│▌▌│█║▌║▌║║▌║▌║█│
╰═══════════════════════
`.trim()
    const button = {
        buttonText: 'jasa run',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'Owner', description: "Chat owner nya jika ingin jasa run.", rowId:".ownermursid"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(jasarun)$/i
handler.help = ['jasarun']
module.exports = handler
//R-Txzy
