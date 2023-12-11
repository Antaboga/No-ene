import fs from 'fs'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let pp = fs.readFileSync('./thumbnail.jpg')
await conn.reply(m.chat, `ᴋᴀᴍᴜ ʙɪsᴀ ᴅᴏɴᴀsɪ ᴅɪ ɴᴏᴍᴏʀ ᴅɪʙᴀᴡᴀʜ ɪɴɪ
ᴀᴛᴀᴜ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʟɪɴᴋ sᴀᴡᴇʀɪᴀ

• *DONASI*
┌ |
│ ◦ *All Payment* : https://saweria.co/Antaboga
└ |
`, { key: { fromMe: false,participant:"0@s.whatsapp.net", remoteJid: "status@broadcast"}, message: { orderMessage: { itemCount: 99999, status: 200, thumbnail: await conn.resize(pp, 100, 100), surface: 200, message: `ᴅᴏɴᴀsɪ ʙʏ 𝘼𝙉𝙏𝘼𝘽𝙊𝙂𝘼•𝙱𝙾𝚃𝚉`, orderTitle: '𝘼𝙉𝙏𝘼𝘽𝙊𝙂𝘼•𝙱𝙾𝚃𝚉', sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore :999, isForwarded: true }, sendEphemeral: true} )
await apivisit
}
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
export default handler