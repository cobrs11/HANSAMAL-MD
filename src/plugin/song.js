import ytdl from '@distube/ytdl-core';
import yts from 'yt-search';

const song = async (m, Matrix) => {
  const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  const validCommands = ['song', 'ytmp3', 'music', 'ytmp3doc'];

  if (validCommands.includes(cmd)) {
    if (!text) return m.reply('Please provide a YT URL or search query.');

    try {
      await m.React("🕘");

      const isUrl = ytdl.validateURL(text);

      const sendAudioMessage = async (videoInfo, finalAudioBuffer) => {

        if (cmd === 'ytmp3doc') {
          const docMessage = {
            document: finalAudioBuffer,
            mimetype: 'audio/mpeg',
            fileName: `${videoInfo.title}.mp3`,
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: "↺ |◁   II   ▷|   ♡",
                body: `Now playing: ${videoInfo.title}`,
                thumbnailUrl: videoInfo.thumbnail,
                sourceUrl: videoInfo.url,
                mediaType: 1,
                renderLargerThumbnail: false,
              },
            },
          };
          await Matrix.sendMessage(m.from, docMessage, { quoted: m });
        } else {
          const audioMessage = {
            audio: finalAudioBuffer,
            mimetype: 'audio/mpeg',
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: "↺ |◁   II   ▷|   ♡",
                body: `Now playing: ${videoInfo.title}`,
                thumbnailUrl: videoInfo.thumbnail,
                sourceUrl: videoInfo.url,
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          };
          await Matrix.sendMessage(m.from, audioMessage, { quoted: m });
        }

        await m.React("✅");
      };

      if (isUrl) {
        const audioStream = ytdl(text, { filter: 'audioonly', quality: 'highestaudio' });
        const audioBuffer = [];

        audioStream.on('data', (chunk) => {
          audioBuffer.push(chunk);
        });

        audioStream.on('end', async () => {
          const finalAudioBuffer = Buffer.concat(audioBuffer);
          const videoInfo = await yts({ videoId: ytdl.getURLVideoID(text) });
          await sendAudioMessage(videoInfo, finalAudioBuffer);
        });
      } else {
        const searchResult = await yts(text);
        const firstVideo = searchResult.videos[0];

        if (!firstVideo) {
          m.reply('Audio not found.');
          await m.React("❌");
          return;
        }

        const audioStream = ytdl(firstVideo.url, { filter: 'audioonly', quality: 'highestaudio' });
        const audioBuffer = [];

        audioStream.on('data', (chunk) => {
          audioBuffer.push(chunk);
        });

        audioStream.on('end', async () => {
          const finalAudioBuffer = Buffer.concat(audioBuffer);
          await sendAudioMessage(firstVideo, finalAudioBuffer);
        });
      }
    } catch (error) {
      console.error("Error generating response:", error);
      m.reply('Error processing your request.');
      await m.React("❌");
    }
  }
};

export default song;
              messageId: _0x1ef339.bot.messageId(),
            }
          );
        }
      }
    );
  } catch (_0x48606a) {
    await _0x1ef339.error(_0x48606a + "\n\ncmdName : " + _0x567a0f + "\n");
    return console.log("./lib/asta.js/audioEditor()\n", _0x48606a);
  }
}
smd(
  {
    cmdname: "bass",
    info: "adds bass in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x5d6ad1, _0x53c461, { smd: _0xf17388 }) => {
    try {
      return await audioEditor(_0x5d6ad1, _0xf17388, _0x5d6ad1);
    } catch (_0x429687) {
      return await _0x5d6ad1.error(
        _0x429687 + " \n\nCommand: " + _0xf17388,
        _0x429687
      );
    }
  }
);
smd(
  {
    cmdname: "blown",
    info: "adds blown in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x483202, _0x13c66b, { smd: _0x4afb5c }) => {
    try {
      return await audioEditor(_0x483202, _0x4afb5c, _0x483202);
    } catch (_0x370dd7) {
      return await _0x483202.error(
        _0x370dd7 + " \n\nCommand: " + _0x4afb5c,
        _0x370dd7
      );
    }
  }
);
smd(
  {
    cmdname: "deep",
    info: "adds deep in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x4f23d9, _0x3cf305, { smd: _0x7e1b7 }) => {
    try {
      return await audioEditor(_0x4f23d9, _0x7e1b7, _0x4f23d9);
    } catch (_0x212449) {
      return await _0x4f23d9.error(
        _0x212449 + " \n\nCommand: " + _0x7e1b7,
        _0x212449
      );
    }
  }
);
smd(
  {
    cmdname: "earrape",
    info: "adds earrape in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x17a00c, _0x54b87c, { smd: _0x22851d }) => {
    try {
      return await audioEditor(_0x17a00c, _0x22851d, _0x17a00c);
    } catch (_0x1069a9) {
      return await _0x17a00c.error(
        _0x1069a9 + " \n\nCommand: " + _0x22851d,
        _0x1069a9
      );
    }
  }
);
smd(
  {
    cmdname: "fast",
    info: "adds fast in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x329304, _0x290150, { smd: _0x555cf0 }) => {
    try {
      return await audioEditor(_0x329304, _0x555cf0, _0x329304);
    } catch (_0x2e5829) {
      return await _0x329304.error(
        _0x2e5829 + " \n\nCommand: " + _0x555cf0,
        _0x2e5829
      );
    }
  }
);
smd(
  {
    cmdname: "fat",
    info: "adds fat in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x4e50f6, _0x5469bf, { smd: _0x210909 }) => {
    try {
      return await audioEditor(_0x4e50f6, _0x210909, _0x4e50f6);
    } catch (_0x2d03a6) {
      return await _0x4e50f6.error(
        _0x2d03a6 + " \n\nCommand: " + _0x210909,
        _0x2d03a6
      );
    }
  }
);
smd(
  {
    cmdname: "nightcore",
    info: "adds nightcore in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x562f14, _0x4de080, { smd: _0x3887ce }) => {
    try {
      return await audioEditor(_0x562f14, _0x3887ce, _0x562f14);
    } catch (_0x1c2061) {
      return await _0x562f14.error(
        _0x1c2061 + " \n\nCommand: " + _0x3887ce,
        _0x1c2061
      );
    }
  }
);
smd(
  {
    cmdname: "reverse",
    info: "adds reverse in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x362707, _0xcb10cd, { smd: _0x5223dd }) => {
    try {
      return await audioEditor(_0x362707, _0x5223dd, _0x362707);
    } catch (_0x5ee99a) {
      return await _0x362707.error(
        _0x5ee99a + " \n\nCommand: " + _0x5223dd,
        _0x5ee99a
      );
    }
  }
);
smd(
  {
    cmdname: "robot",
    info: "adds robot in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x310526, _0x4716ec, { smd: _0xa9fd5 }) => {
    try {
      return await audioEditor(_0x310526, _0xa9fd5, _0x310526);
    } catch (_0x552466) {
      return await _0x310526.error(
        _0x552466 + " \n\nCommand: " + _0xa9fd5,
        _0x552466
      );
    }
  }
);
smd(
  {
    cmdname: "slow",
    info: "adds slow in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x4a8426, _0x4b49bd, { smd: _0x181538 }) => {
    try {
      return await audioEditor(_0x4a8426, _0x181538, _0x4a8426);
    } catch (_0x489533) {
      return await _0x4a8426.error(
        _0x489533 + " \n\nCommand: " + _0x181538,
        _0x489533
      );
    }
  }
);
smd(
  {
    cmdname: "smooth",
    info: "adds smooth in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x40e425, _0x2b44c9, { smd: _0x4894c8 }) => {
    try {
      return await audioEditor(_0x40e425, _0x4894c8, _0x40e425);
    } catch (_0x346685) {
      return await _0x40e425.error(
        _0x346685 + " \n\nCommand: " + _0x4894c8,
        _0x346685
      );
    }
  }
);
smd(
  {
    cmdname: "tupai",
    info: "adds tupai in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x206b7, _0x3d2b22, { smd: _0x1f70bd }) => {
    try {
      return await audioEditor(_0x206b7, _0x1f70bd, _0x206b7);
    } catch (_0x2f0862) {
      return await _0x206b7.error(
        _0x2f0862 + " \n\nCommand: " + _0x1f70bd,
        _0x2f0862
      );
    }
  }
);
