import fetch from "node-fetch"
import fs from "fs"
import { pickRandom } from "../lib/other-function.js"

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
await conn.sendContact(m.chat, [[`${nomorown}` + `@s.whatsapp.net`, wm]], m, {
 contextInfo: { 
 forwardingScore: 2023,
isForwarded: false, 
 externalAdReply: {  
 title: 'TʜᴇOᴡɴᴇʀ', 
 body: bottime, 
 sourceUrl: 'https://chat.whatsapp.com/DFrV9RF3Wfe9eygwG44gk0',
 thumbnail: await fs.readFileSync("./thumbnail.jpg"),
 thumbnailUrl: 'https://telegra.ph/file/a17a45689934767df0340.jpg', 
 mediaType: 1,
 showAdAttribution: true, 
 renderLargerThumbnail: true 
 }
   }
     },
       {
         quoted: m,
         ephemeralExpiration: ephemeral
           }
             );
             await conn.sendFile(m.chat, './mp3/ownerlu.mp3', '', null, m, true)
} 
handler.help = ['owner']
handler.tags = ['misc']

handler.command = /^(owner)$/i

export default handler