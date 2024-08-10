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
