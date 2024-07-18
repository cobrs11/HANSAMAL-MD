import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';

import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}
// Bot Process Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

// Uptime
const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
const runMessage = `*☀️ ${day} Day*\n*🕐 ${hours} Hour*\n*⏰ ${minutes} Minutes*\n*⏱️ ${seconds} Seconds*\n`;

const xtime = moment.tz("Asia/Colombo").format("HH:mm:ss");
const xdate = moment.tz("Asia/Colombo").format("DD/MM/YYYY");
const time2 = moment().tz("Asia/Colombo").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

const test = async (m, Matrix) => {
  let selectedListId;
  const selectedButtonId = m?.message?.templateButtonReplyMessage?.selectedId;
  const interactiveResponseMessage = m?.message?.interactiveResponseMessage;
  if (interactiveResponseMessage) {
    const paramsJson = interactiveResponseMessage.nativeFlowResponseMessage?.paramsJson;
    if (paramsJson) {
      const params = JSON.parse(paramsJson);
      selectedListId = params.id;
     // console.log(selectedListId);
    }
  }
  const selectedId = selectedListId || selectedButtonId;
  
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '.';
        const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
        let ethix = {
    public: true // or false
};

let mode = hansamal.public ? 'public' : 'private';

        const validCommands = ['list', 'help', 'menu'];

  if (validCommands.includes(cmd)) {
    let msg = generateWAMessageFromContent(m.from, {
      viewOnceMessage: {
        message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `╭─────────────━┈⊷
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *HANSAMAL-MD*
│📍 ᴠᴇʀꜱɪᴏɴ: 3.0.1
│👨‍💻 ᴏᴡɴᴇʀ : *🌐IMALKA-HANSAMAL*      
│👤 ɴᴜᴍʙᴇʀ: 94711262551
│📡 ᴘʟᴀᴛғᴏʀᴍ: *SAFARI*
│🛡 ᴍᴏᴅᴇ: *${mode}*
│💫 ᴘʀᴇғɪx: *[Multi-Prefix]*
╰─────────────━┈⊷ `
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "© Powered By 🌐IMALKA-HANSAMAL"
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
                  "buttonParamsJson": `{"title":"🔥TAP🌐IMALKA-HANSAMAL MENU",
                 "sections":
                   [{
                    "title":"😎 HANSAMAL ALL MENU",
                    "highlight_label":" ALL MENU",
                    "rows":[
                      {
                       "header":"",
                       "title":"🔰 ALL MENU",
                       "description":"🌐HANSAMAL ALL MENU",
                       "id":"View All Menu"
                      },
                      {
                        "header":"",
                        "title":"⬇️ DOWNLOADER MENU",
                        "description":"SHOW ALL DOWNLOAD",
                        "id":"Downloader Menu"
                      },
                      {
                        "header":"",
                        "title":"👨‍👨‍👧‍👧GROUP MENU",
                        "description":"GROUP MENU",
                        "id":"Group Menu"
                      },
                      {
                        "header":"",
                        "title":"🛠 TOOL MENU",
                        "description":" SHOW TOOL MENU",
                        "id":"Tool Menu"
                      },
                      {
                        "header":"",
                        "title":"📪 MAIN MENU",
                        "description":" BOT MAIN COMMANDS",
                        "id":"Main Menu"
                      },
                     {
                        "header":"",
                        "title":"👨‍💻 OWNER MENU",
                        "description":"MY OWNER DETAIS",
                        "id":"Owner Menu"
                      },
                      {
                        "header":"",
                        "title":"✨ AI MENU",
                        "description":"AI MENU",
                        "id":"Ai Menu"
                      },
                      {
                        "header":"",
                        "title":"🔎SEARCH MENU",
                        "description":"SEARCH MENU",
                        "id":"Search Menu"
                      },
                      {
                        "header":"",
                        "title":"🧚‍♂️ STALK MENU",
                        "description":"STALK MENU",
                        "id":"Stalk Menu"
                      },
                      {
                        "header":"",
                        "title":"🥏 CONVERTER MENU",
                        "description":"CONVERTER MENU",
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
│🤖 ʙᴏᴛ ɴᴀᴍᴇ: *HANSAMAL-MD*
│📍 ᴠᴇʀꜱɪᴏɴ: 3.0.1
│👨‍💻 ᴏᴡɴᴇʀ : *🌐IMALKA-HANSAMAL*      
│👤 ɴᴜᴍʙᴇʀ: 94711262551
│💻 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│🛡 ᴍᴏᴅᴇ: *${mode}*
│💫 ᴘʀᴇғɪx: *[Multi-Prefix]*
╰─────────────━┈⊷ 
╭━❮ CONVERTER ❯━╮
┃✰ ${prefix}ATTP
┃✰ ${prefix}ATTP2
┃✰ ${prefix}ATTP3
┃✰ ${prefix}EBINARY
┃✰ ${prefix}DBINARY
┃✰ ${prefix}EMOJIMIX
┃✰ ${prefix}MP3
╰━━━━━━━━━━━━━━━⪼
╭━❮ AI ❯━╮
┃✰ ${prefix}AI
┃✰ ${prefix}BUG
┃✰ ${prefix}REPORT
┃✰ ${prefix}GPT
┃✰ ${prefix}DALLE
┃✰ ${prefix}REMINI
┃✰ ${prefix}GEMINI
╰━━━━━━━━━━━━━━━⪼
╭━❮ TOOL ❯━╮
┃✰ ${prefix}CALCULATOR
┃✰ ${prefix}TEMPMAIL
┃✰ ${prefix}CHECKMAIL
╰━━━━━━━━━━━━━━━⪼
╭━❮ GROUP ❯━╮
┃✰ ${prefix}LINKGROUP
┃✰ ${prefix}SETNAME
┃✰ ${prefix}GROUP
┃✰ ${prefix}WELCOME
┃✰ ${prefix}ADD
┃✰ ${prefix}KICK
╰━━━━━━━━━━━━━━━⪼
╭━❮ DOWNLOAD ❯━╮
┃✰ ${prefix}APK
┃✰ ${prefix}FACEBOOK
┃✰ ${prefix}MEDIAFIRE
┃✰ ${prefix}PINTERESTDL
┃✰ ${prefix}GITCLONE
┃✰ ${prefix}GDRIVE
┃✰ ${prefix}INSTA
┃✰ ${prefix}YTMP3
┃✰ ${prefix}YTMP4
┃✰ ${prefix}PLAY
┃✰ ${prefix}SONG
┃✰ ${prefix}VIDEO
┃✰ ${prefix}YTMP3DOC
┃✰ ${prefix}YTMP4DOC
┃✰ ${prefix}TIKTOK
╰━━━━━━━━━━━━━━━⪼
╭━❮ SEARCH ❯━╮
┃✰ ${prefix}PLAY
┃✰ ${prefix}YTS
┃✰ ${prefix}IMDB
┃✰ ${prefix}GOOGLE
┃✰ ${prefix}GIMAGE
┃✰ ${prefix}PINTEREST
┃✰ ${prefix}WALLPAPER
┃✰ ${prefix}WIKIMEDIA
┃✰ ${prefix}YTSEARCH
┃✰ ${prefix}RINGTONE
┃✰ ${prefix}LYRICS
╰━━━━━━━━━━━━━━━⪼
╭━❮ MAIN ❯━╮
┃✰ ${prefix}PING
┃✰ ${prefix}ALIVE
┃✰ ${prefix}OWNER
┃✰ ${prefix}MENU
┃✰ ${prefix}INFORBOT
╰━━━━━━━━━━━━━━━⪼
╭━❮ OWNER ❯━╮
┃✰ ${prefix}JOIN
┃✰ ${prefix}LEAVE
┃✰ ${prefix}BLOCK
┃✰ ${prefix}UNBLOCK
┃✰ ${prefix}BCGROUP
┃✰ ${prefix}SETNAMEBOT
┃✰ ${prefix}AUTOTYPING
┃✰ ${prefix}ALWAYSONLINE
┃✰ ${prefix}AUTOREAD
╰━━━━━━━━━━━━━━━⪼
╭━❮ STALK ❯━╮
┃✰ ${prefix}NOWA
┃✰ ${prefix}TRUECALLER
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
╭━❮ DOWNLOAD ❯━╮
┃✰ ${prefix}APK
┃✰ ${prefix}FACEBOOK
┃✰ ${prefix}MEDIAFIRE
┃✰ ${prefix}PINTERESTDL
┃✰ ${prefix}GITCLONE
┃✰ ${prefix}GDRIVE
┃✰ ${prefix}INSTA
┃✰ ${prefix}YTMP3
┃✰ ${prefix}YTMP4
┃✰ ${prefix}PLAY
┃✰ ${prefix}SONG
┃✰ ${prefix}VIDEO
┃✰ ${prefix}YTMP3DOC
┃✰ ${prefix}YTMP4DOC
┃✰ ${prefix}TIKTOK
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
                  newsletterName: "HANSAMAL-MD",
                  serverMessageId: 143
                }
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
╭━❮ GROUP ❯━╮
┃✰ ${prefix}LINKGROUP
┃✰ ${prefix}SETNAME
┃✰ ${prefix}GROUP
┃✰ ${prefix}WELCOME
┃✰ ${prefix}ADD
┃✰ ${prefix}KICK
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
╭━❮ MAIN ❯━╮
┃✰ ${prefix}PING
┃✰ ${prefix}ALIVE
┃✰ ${prefix}OWNER
┃✰ ${prefix}MENU
┃✰ ${prefix}INFORBOT
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
                  newsletterName: "HANSAMAL-MD",
                  serverMessageId: 143
                }
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
╭━❮ OWNER ❯━╮
┃✰ ${prefix}JOIN
┃✰ ${prefix}LEAVE
┃✰ ${prefix}BLOCK
┃✰ ${prefix}UNBLOCK
┃✰ ${prefix}BCGROUP
┃✰ ${prefix}SETNAMEBOT
┃✰ ${prefix}AUTOTYPING
┃✰ ${prefix}ALWAYSONLINE
┃✰ ${prefix}AUTOREAD
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
                  newsletterName: "HANSAMAL-MD",
                  serverMessageId: 143
                }
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
╭━❮ SEARCH ❯━╮
┃✰ ${prefix}PLAY
┃✰ ${prefix}YTS
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
                  newsletterName: "HANSAMAL-MD",
                  serverMessageId: 143
                }
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
╭━❮ STALK ❯━╮
┃✰ ${prefix}NOWA
┃✰ ${prefix}TRUECALLER
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
                  newsletterName: "HANSAMAL-MD",
                  serverMessageId: 143
                }
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
╭━❮ TOOL ❯━╮
┃✰ ${prefix}CALCULATOR
┃✰ ${prefix}TEMPMAIL
┃✰ ${prefix}CHECKMAIL
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
                  newsletterName: "HANSAMAL-MD",
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
╭━❮ AI ❯━╮
┃✰ ${prefix}AI
┃✰ ${prefix}BUG
┃✰ ${prefix}REPORT
┃✰ ${prefix}GPT
┃✰ ${prefix}DALLE
┃✰ ${prefix}REMINI
┃✰ ${prefix}GEMINI
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
                  newsletterName: "HANSAMAL-MD",
                  serverMessageId: 143
                }
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
╭━❮ CONVERTER ❯━╮
┃✰ ${prefix}ATTP
┃✰ ${prefix}ATTP2
┃✰ ${prefix}ATTP3
┃✰ ${prefix}EBINARY
┃✰ ${prefix}DBINARY
┃✰ ${prefix}EMOJIMIX
┃✰ ${prefix}MP3
╰━━━━━━━━━━━━━━━⪼
     `
     await Matrix.sendMessage(m.from, {
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
  quoted: m
});
}
};

export default test;
