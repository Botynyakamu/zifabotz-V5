const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {

let str = `››╭─〘 *Donasi* 〙
╭╡📮: Donasi ngab jgan gunain doang.
│┝‷✧ *Pulsa:* 6285828764046
│┝‷✧ *Dana:* 6285828764046
│┝‷✧ *Gopay:* 6285828764046
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat nomor dibawah
╰──────────···───╮`
let name = await conn.getName(m.sender)

let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  sumberImg = await (await fetch(fla + 'donasi')).buffer()
  image = (await conn.prepareMessage('6285826114932@s.whatsapp.net', sumberImg, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  res = await conn.prepareMessageFromContent(m.chat, {
    "productMessage": {
      "product": {
        "productImage": image,
        "productId": "4938174216214248",
        "title": "DONASI ZIFABOTZ",
        "description": '\n' + wm + '\n' + str,
        "retailerId": "Thanks For Donate !",
        "url": "▌│█║▌║▌║║▌║▌║█│▌",
        "descriptionCount": "999999999",
        "productImageCount": "1",
      },
      "businessOwnerJid": "6285828764046@s.whatsapp.net",
      "contextInfo": {
        "forwardingScore": 9999,
        "isForwarded": false
      }
    }
  },
    { quoted: fkon })
  conn.relayWAMessage(res)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(si|te)$/

module.exports = handler

let wm = global.botwm
