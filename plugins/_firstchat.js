// RECODE ALYAAXZY

let moment = require('moment-timezone')
let fetch = require ('node-fetch')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    let name = conn.getName(m.sender)
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await conn.send2ButtonLoc(m.chat, await(await fetch(thumbfoto)).buffer(), `
*Hi ${name}, ${ucapan()}*
───⬡ 〔 𝐁𝐎𝐓z 𝐂𝐇𝐀𝐓 〕 ⬡────
╭───────────────╮
        My name *ZIFABOTZ*
        Salah satu Bot diwhatsapp
╰───────────────╯
Silahkan mematuhi Rules Bot
Demi kenyamanan kita bersama.
`.trim(), watermark, 'Menu', '.?', 'Rules', '.rules')
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) { 
        res = "Selamat pagi ya"
    }
    if (time > 10) {
        res = "Selamat siang ya"
    }
    if (time >= 15) {
        res = "Selamat sore ya"
    }
    if (time >= 18) {
        res = "Selamat malam ya"
    }
    return res
}
