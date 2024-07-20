const events = require("../lib/event");
const { pnix, isPrivate, tiny, serif_B, clockString } = require("../lib");
const { OWNER_NAME, BOT_NAME } = require("../config");
const { hostname } = require("os");
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
let botStartTime = new Date();

pnix(
  {
    pattern: "menu",
    fromMe: isPrivate,
    type: "main",
    desc: "Show All commands",
  },
  async (message, match, m) => {
  message.client.sendMessage(message.jid, { react: { text: "📃", key: m.key } });
    if (match) {
      for (let i of events.commands) {
        if (i.pattern.test(message.prefix + match))
          message.reply(
            `\`\`\`Command : ${message.prefix}${match.trim()}
Description : ${i.desc}\`\`\``
          );
      }
    } else {
      let { prefix } = message;
      let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        .split(",");
      let currentTime = new Date();
      let runtime = clockString(currentTime - botStartTime);

              text: `╭─────────────━┈⊷
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *𝙷𝙰𝙽𝚂𝙰𝙼𝙰𝙻-𝙼𝙳*
│📍 ᴠᴇʀꜱɪᴏɴ: 3.0.1
│👨‍💻 ᴏᴡɴᴇʀ : *𝙸𝙼𝙰𝙻𝙺𝙰_HANSAMAL*      
│👤 ɴᴜᴍʙᴇʀ: 94711262551
│📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│🛡 ᴍᴏᴅᴇ: *${mode}*
│💫 ᴘʀᴇғɪx: *[Multi-Prefix]*
╰─────────────━┈⊷ `
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "© Powered By IMALKA-HANSAMAL"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./src/HANSAMAL.jpg')}, { upload: Matrix.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: "",
                  hasMediaAttachment: false  
                }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  "name": "single_select",
                  "buttonParamsJson": `{"title":"🔖𝚻𝚫𝚸 𝐅𝚯𝚪 𝚯𝚸𝚵𝚴 𝚳𝚵𝚴𝐔",
                 "sections":
                   [{
                    "title":"😎 𝙃𝘼𝙉𝙎𝘼𝙈𝘼𝙇-𝛭𝐷 𝛥𝐿𝐿𝛭𝛯𝛮𝑈",
                    "highlight_label":"🤩 𝛥𝐿𝐿𝛭𝛯𝛮𝑈",
                    "rows":[
                      {
                       "header":"",
                       "title":"🔰 ᴀʟʟ ᴍᴇɴᴜ",
                       "description":"𝙃𝘼𝙉𝙎𝘼𝙈𝘼𝙇-𝛭𝐷 𝛥𝐿𝐿𝛭𝛯𝛮𝑈",
                       "id":"View All Menu"
                      },
                      {
                        "header":"",
                        "title":"⬇️ ᴅᴏᴡɴʟᴀᴏᴅᴇʀ ᴍᴇɴᴜ",
                        "description":"𝐒𝚮𝚯𝐖 𝚫𝐋𝐋 𝐃𝚯𝐖𝚴𝐋𝚯𝚫𝐃 𝐅𝚵𝚫𝚻𝐔𝚪𝚵𝐒",
                        "id":"Downloader Menu"
                      },
                      {
                        "header":"",
                        "title":"👨‍👨‍👧‍👧ɢʀᴏᴜᴘ ᴍᴇɴᴜ",
                        "description":"𝐅𝚵𝚫𝚻𝐔𝚪𝚵 𝚻𝚮𝚫𝚻 𝚫𝚪𝚵 𝚯𝚴𝐋𝐘 𝚫𝛁𝚰𝐋𝚫𝚩𝐋𝚵 𝐅𝚯𝚪 𝐆𝚪𝚯𝐔𝚸",
                        "id":"Group Menu"
                      },
                      {
                        "header":"",
                        "title":"👨‍🔧 ᴛᴏᴏʟ ᴍᴇɴᴜ",
                        "description":"🛠 𝐒𝚮𝚯𝐖 𝚳𝚵 𝚻𝚯𝚯𝐋 𝚳𝚵𝚴𝐔",
                        "id":"Tool Menu"
                      },
                      {
                        "header":"",
                        "title":"🗿 ᴍᴀɪɴ ᴍᴇɴᴜ",
                        "description":"𝚩𝚯𝚻 𝚳𝚫𝚰𝚴 𝐂𝚯𝚳𝚳𝚫𝚴𝐃𝐒",
                        "id":"Main Menu"
                      },
                     {
                        "header":"",
                        "title":"👨‍💻 ᴏᴡɴᴇʀ ᴍᴇɴᴜ",
                        "description":"𝐅𝚵𝚫𝚻𝐔𝚪𝚵 𝚻𝚮𝚫𝚻 𝚫𝚪𝚵 𝚯𝚴𝐋𝐘 𝐅𝚯𝚪 𝚳𝐘 𝚮𝚫𝚴𝐃𝐒𝚯𝚳𝚵 𝚯𝐖𝚴𝚵𝚪",
                        "id":"Owner Menu"
                      },
                      {
                        "header":"",
                        "title":"✨ ᴀɪ ᴍᴇɴᴜ",
                        "description":"𝐒𝚮𝚯𝐖 𝚳𝚵 𝚫𝚰 𝚳𝚵𝚴𝐔",
                        "id":"Ai Menu"
                      },
                      {
                        "header":"",
                        "title":"🔍sᴇᴀʀᴄʜ ᴍᴇɴᴜ",
                        "description":"♂️ 𝐒𝚮𝚯𝐖 𝚳𝚵 𝐒𝚵𝚫𝚪𝐂𝚮 𝚳𝚵𝚴𝐔",
                        "id":"Search Menu"
                      },
                      {
                        "header":"",
                        "title":"🧚‍♂️ sᴛᴀʟᴋ ᴍᴇɴᴜ",
                        "description":"𝐒𝚮𝚯𝐖 𝚳𝚵 𝐒𝚻𝚫𝐋𝐊 𝚳𝚵𝚴𝐔🪆",
                        "id":"Stalk Menu"
                      },
                      {
                        "header":"",
                        "title":"🥏 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚛 𝚖𝚎𝚗𝚞",
                        "description":"𝐒𝚮𝚯𝐖 𝚳𝚵 𝐂𝚯𝚴𝛁𝚵𝚪𝚻𝚵𝚪 𝚳𝚵𝚴𝐔",
                        "id":"Converter Menu"
                      }
                    ]}
                  ]}`
                },
              ],
            }),
            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "HANSAMAL-MD",
                  serverMessageId: 143
                }
              }
          }),
        },
      },
    }, {});

    await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id
    });
  }
      if (selectedId == "View All Menu") {
        const mode = process.env.MODE;
        const str = `hey ${m.pushName} ${pushwish}
╭─────────────━┈⊷
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *𝙃𝘼𝙉𝙎𝘼𝙈𝘼𝙇-M𝘿*
│📍 ᴠᴇʀꜱɪᴏɴ: 3.0.1
│👨‍💻 ᴏᴡɴᴇʀ : *𝙸𝙼𝙰𝙻𝙺𝙰_HANSAMAL*      
│👤 ɴᴜᴍʙᴇʀ: 94711262551

│💻 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│🛡 ᴍᴏᴅᴇ: *${mode}*
│💫 ᴘʀᴇғɪx: *[Multi-Prefix]*
╰─────────────━┈⊷ 
╭━❮ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 ❯━╮
┃✰ ${prefix}𝙰𝚃𝚃𝙿
┃✰ ${prefix}𝙰𝚃𝚃𝙿2
┃✰ ${prefix}𝙰𝚃𝚃𝙿3
┃✰ ${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┃✰ ${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┃✰ ${prefix}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
┃✰ ${prefix}𝙼𝙿3
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙰𝙸 ❯━╮
┃✰ ${prefix}𝙰𝚒
┃✰ ${prefix}𝙱𝚞𝚐
┃✰ ${prefix}𝚁𝚎𝚙𝚘𝚛𝚝
┃✰ ${prefix}𝙶𝚙𝚝
┃✰ ${prefix}𝙳𝚊𝚕𝚕𝚎
┃✰ ${prefix}𝚁𝚎𝚖𝚒𝚗𝚒
┃✰ ${prefix}𝙶𝚎𝚖𝚒𝚗𝚒
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝚃𝙾𝙾𝙻 ❯━╮
┃✰ ${prefix}𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚝𝚘𝚛
┃✰ ${prefix}𝚃𝚎𝚖𝚙𝚖𝚊𝚒𝚕
┃✰ ${prefix}𝙲𝚑𝚎𝚌𝚔𝚖𝚊𝚒𝚕
┃✰ ${prefix}𝚃𝚛𝚝
┃✰ ${prefix}𝚃𝚝𝚜
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙶𝚁𝙾𝚄𝙿 ❯━╮
┃✰ ${prefix}𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┃✰ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┃✰ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┃✰ ${prefix}𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┃✰ ${prefix}𝙶𝚛𝚘𝚞𝚙
┃✰ ${prefix}𝙶𝚌𝚜𝚎𝚝𝚝𝚒𝚗𝚐
┃✰ ${prefix}𝚆𝚎𝚕𝚌𝚘𝚖𝚎
┃✰ ${prefix}𝙰𝚍𝚍
┃✰ ${prefix}𝙺𝚒𝚌𝚔
┃✰ ${prefix}𝙷𝚒𝚍𝚎𝚃𝚊𝚐
┃✰ ${prefix}𝚃𝚊𝚐𝚊𝚕𝚕
┃✰ ${prefix}𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔
┃✰ ${prefix}𝙰𝚗𝚝𝚒𝚃𝚘𝚡𝚒𝚌
┃✰ ${prefix}𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┃✰ ${prefix}𝙳𝚎𝚖𝚘𝚝𝚎
┃✰ ${prefix}𝙶𝚎𝚝𝚋𝚒𝚘
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ❯━╮
┃✰ ${prefix}𝙰𝚙𝚔
┃✰ ${prefix}𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃✰ ${prefix}𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┃✰ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕
┃✰ ${prefix}𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎
┃✰ ${prefix}𝙶𝚍𝚛𝚒𝚟𝚎
┃✰ ${prefix}𝙸𝚗𝚜𝚝𝚊
┃✰ ${prefix}𝚈𝚝𝚖𝚙3
┃✰ ${prefix}𝚈𝚝𝚖𝚙4
┃✰ ${prefix}𝙿𝚕𝚊𝚢
┃✰ ${prefix}𝚂𝚘𝚗𝚐
┃✰ ${prefix}𝚅𝚒𝚍𝚎𝚘
┃✰ ${prefix}𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┃✰ ${prefix}𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┃✰ ${prefix}𝚃𝚒𝚔𝚝𝚘𝚔
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝚂𝙴𝙰𝚁𝙲𝙷 ❯━╮
┃✰ ${prefix}𝙿𝚕𝚊𝚢
┃✰ ${prefix}𝚈𝚝𝚜
┃✰ ${prefix}𝙸𝚖𝚍𝚋
┃✰ ${prefix}𝙶𝚘𝚘𝚐𝚕𝚎
┃✰ ${prefix}𝙶𝚒𝚖𝚊𝚐𝚎
┃✰ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┃✰ ${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛
┃✰ ${prefix}𝚆𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊
┃✰ ${prefix}𝚈𝚝𝚜𝚎𝚊𝚛𝚌𝚑
┃✰ ${prefix}𝚁𝚒𝚗𝚐𝚝𝚘𝚗𝚎
┃✰ ${prefix}𝙻𝚢𝚛𝚒𝚌𝚜
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙼𝙰𝙸𝙽 ❯━╮
┃✰ ${prefix}𝙿𝚒𝚗𝚐
┃✰ ${prefix}𝙰𝚕𝚒𝚟𝚎
┃✰ ${prefix}𝙾𝚠𝚗𝚎𝚛
┃✰ ${prefix}𝙼𝚎𝚗𝚞
┃✰ ${prefix}𝙸𝚗𝚏𝚘𝚋𝚘𝚝
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙾𝚆𝙽𝙴𝚁 ❯━╮
┃✰ ${prefix}𝙹𝚘𝚒𝚗
┃✰ ${prefix}𝙻𝚎𝚊𝚟𝚎
┃✰ ${prefix}𝙱𝚕𝚘𝚌𝚔
┃✰ ${prefix}𝚄𝚗𝚋𝚕𝚘𝚌𝚔
┃✰ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝
┃✰ ${prefix}𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┃✰ ${prefix}𝚂𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜
┃✰ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎𝚋𝚘𝚝
┃✰ ${prefix}𝙰𝚞𝚝𝚘𝚃𝚢𝚙𝚒𝚗𝚐
┃✰ ${prefix}𝙰𝚕𝚠𝚊𝚢𝚜𝙾𝚗𝚕𝚒𝚗𝚎
┃✰ ${prefix}𝙰𝚞𝚝𝚘𝚁𝚎𝚊𝚍
┃✰ ${prefix}𝚊𝚞𝚝𝚘𝚜𝚟𝚒𝚎𝚠
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝚂𝚃𝙰𝙻𝙺 ❯━╮
┃✰ ${prefix}𝚃𝚛𝚞𝚎𝚌𝚊𝚕𝚕𝚎𝚛
┃✰ ${prefix}𝙸𝚗𝚜𝚝𝚊𝚂𝚝𝚊𝚕𝚔
┃✰ ${prefix}𝙶𝚒𝚝𝚑𝚞𝚋𝚂𝚝𝚊𝚕𝚔
╰━━━━━━━━━━━━━━━⪼
   `;
        let fgg = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: `HANSAMAL-MD`,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'HANSAMAL-MD'\nitem1.TEL;waid=${
                        m.sender.split("@")[0]
                    }:${
                        m.sender.split("@")[0]
                    }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
            }
        };
       let { key } = await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/HANSAMAL.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "HANSAMAL-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: fgg
});
}
   if ( selectedId == "Downloader Menu") {
     const str = `╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ❯━╮
┃✰ ${prefix}𝙰𝚙𝚔
┃✰ ${prefix}𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃✰ ${prefix}𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┃✰ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕
┃✰ ${prefix}𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎
┃✰ ${prefix}𝙶𝚍𝚛𝚒𝚟𝚎
┃✰ ${prefix}𝙸𝚗𝚜𝚝𝚊
┃✰ ${prefix}𝚈𝚝𝚖𝚙3
┃✰ ${prefix}𝚈𝚝𝚖𝚙4
┃✰ ${prefix}𝙿𝚕𝚊𝚢
┃✰ ${prefix}𝚂𝚘𝚗𝚐
┃✰ ${prefix}𝚅𝚒𝚍𝚎𝚘
┃✰ ${prefix}𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┃✰ ${prefix}𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┃✰ ${prefix}𝚃𝚒𝚔𝚝𝚘𝚔
╰━━━━━━━━━━━━━━━⪼`
 await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/HANSAMAL.jpg'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: true,
  }
}, {
  quoted: m
});
}
   
   if ( selectedId == "Group Menu") {
     const str = `╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝙶𝚁𝙾𝚄𝙿 ❯━╮
┃✰ ${prefix}𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┃✰ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┃✰ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┃✰ ${prefix}𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┃✰ ${prefix}𝙶𝚛𝚘𝚞𝚙
┃✰ ${prefix}𝚆𝚎𝚕𝚌𝚘𝚖𝚎
┃✰ ${prefix}𝙰𝚍𝚍
┃✰ ${prefix}𝙺𝚒𝚌𝚔
┃✰ ${prefix}𝙷𝚒𝚍𝚎𝚃𝚊𝚐
┃✰ ${prefix}𝚃𝚊𝚐𝚊𝚕𝚕
┃✰ ${prefix}𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔
┃✰ ${prefix}𝙰𝚗𝚝𝚒𝚃𝚘𝚡𝚒𝚌
┃✰ ${prefix}𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┃✰ ${prefix}𝙳𝚎𝚖𝚘𝚝𝚎
┃✰ ${prefix}𝙶𝚎𝚝𝚋𝚒𝚘
╰━━━━━━━━━━━━━━━⪼
     `
     await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/HANSAMAL.jpg'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: true,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "Main Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝙼𝙰𝙸𝙽 ❯━╮
┃✰ ${prefix}𝙿𝚒𝚗𝚐
┃✰ ${prefix}𝙰𝚕𝚒𝚟𝚎
┃✰ ${prefix}𝙾𝚠𝚗𝚎𝚛
┃✰ ${prefix}𝙼𝚎𝚗𝚞
┃✰ ${prefix}𝙸𝚗𝚏𝚘𝚋𝚘𝚝
╰━━━━━━━━━━━━━━━⪼`
 await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/HANSAMAL.jpg'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: true,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "Owner Menu") {
     const str = `╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝙾𝚆𝙽𝙴𝚁 ❯━╮
┃✰ ${prefix}𝙹𝚘𝚒𝚗
┃✰ ${prefix}𝙻𝚎𝚊𝚟𝚎
┃✰ ${prefix}𝙱𝚕𝚘𝚌𝚔
┃✰ ${prefix}𝚄𝚗𝚋𝚕𝚘𝚌𝚔
┃✰ ${prefix}𝙱𝚌𝚐𝚛𝚘𝚞𝚙
┃✰ ${prefix}𝙱𝚌𝚊𝚕𝚕
┃✰ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝
┃✰ ${prefix}𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┃✰ ${prefix}𝚂𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜
┃✰ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎𝚋𝚘𝚝
┃✰ ${prefix}𝙰𝚞𝚝𝚘𝚃𝚢𝚙𝚒𝚗𝚐
┃✰ ${prefix}𝙰𝚕𝚠𝚊𝚢𝚜𝙾𝚗𝚕𝚒𝚗𝚎
┃✰ ${prefix}𝙰𝚞𝚝𝚘𝚁𝚎𝚊𝚍
┃✰ ${prefix}𝚊𝚞𝚝𝚘𝚜𝚟𝚒𝚎𝚠
╰━━━━━━━━━━━━━━━⪼`
 await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/HANSAMAL.jpg'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: true,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "Search Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝚂𝙴𝙰𝚁𝙲𝙷 ❯━╮
┃✰ ${prefix}𝙿𝚕𝚊𝚢
┃✰ ${prefix}𝚈𝚝𝚜
┃✰ ${prefix}𝙸𝚖𝚍𝚋
┃✰ ${prefix}𝙶𝚘𝚘𝚐𝚕𝚎
┃✰ ${prefix}𝙶𝚒𝚖𝚊𝚐𝚎
┃✰ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┃✰ ${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛
┃✰ ${prefix}𝚆𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊
┃✰ ${prefix}𝚈𝚝𝚜𝚎𝚊𝚛𝚌𝚑
┃✰ ${prefix}𝚁𝚒𝚗𝚐𝚝𝚘𝚗𝚎
┃✰ ${prefix}𝙻𝚢𝚛𝚒𝚌𝚜
╰━━━━━━━━━━━━━━━⪼`
 await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/HANSAMAL.jpg'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: true,
  }
}, {
  quoted: m
});
}
   if (selectedId == "Stalk Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝚂𝚃𝙰𝙻𝙺 ❯━╮
┃✰ ${prefix}𝙽𝚘𝚠𝚊
┃✰ ${prefix}𝚃𝚛𝚞𝚎𝚌𝚊𝚕𝚕𝚎𝚛
┃✰ ${prefix}𝙸𝚗𝚜𝚝𝚊𝚂𝚝𝚊𝚕𝚔
┃✰ ${prefix}𝙶𝚒𝚝𝚑𝚞𝚋𝚂𝚝𝚊𝚕𝚔
╰━━━━━━━━━━━━━━━⪼`
 await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/HANSAMAL.jpg'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: true,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "Tool Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝚃𝙾𝙾𝙻 ❯━╮
┃✰ ${prefix}𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚝𝚘𝚛
┃✰ ${prefix}𝚃𝚎𝚖𝚙𝚖𝚊𝚒𝚕
┃✰ ${prefix}𝙲𝚑𝚎𝚌𝚔𝚖𝚊𝚒𝚕
┃✰ ${prefix}𝙸𝚗𝚏𝚘
┃✰ ${prefix}𝚃𝚛𝚝
┃✰ ${prefix}𝚃𝚝𝚜
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/HANSAMAL.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363249960769123@newsletter',
                  newsletterName: "IMALKA-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Ai Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝙰𝙸 ❯━╮
┃✰ ${prefix}𝙰𝚒
┃✰ ${prefix}𝙱𝚞𝚐
┃✰ ${prefix}𝚁𝚎𝚙𝚘𝚛𝚝
┃✰ ${prefix}𝙶𝚙𝚝
┃✰ ${prefix}𝙳𝚊𝚕𝚕𝚎
┃✰ ${prefix}𝚁𝚎𝚖𝚒𝚗𝚒
┃✰ ${prefix}𝙶𝚎𝚖𝚒𝚗𝚒
╰━━━━━━━━━━━━━━━⪼`
 await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/HANSAMAL.jpg'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: true,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "Converter Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰━━━━━━━━━━━━━━━➥
╭━❮ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 ❯━╮
┃✰ ${prefix}𝙰𝚃𝚃𝙿
┃✰ ${prefix}𝙰𝚃𝚃𝙿2
┃✰ ${prefix}𝙰𝚃𝚃𝙿3
┃✰ ${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┃✰ ${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┃✰ ${prefix}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
┃✰ ${prefix}𝙼𝙿3
╰━━━━━━━━━━━━━━━⪼
     `
    await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/HANSAMAL.jpg'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: true,
  }
}, {
  quoted: m
});
}
};

export default test;
