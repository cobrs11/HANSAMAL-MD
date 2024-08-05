import ytdl from '@distube/ytdl-core';
import yts from 'yt-search';

const video = async (m, Matrix) => {
  const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  const validCommands = ['video', 'ytmp4', 'vid', 'ytmp4doc'];

  if (validCommands.includes(cmd)) {
    if (!text) return m.reply('Give a YouTube URL or search query.');

    try {
      await m.React("🕘");

      const isUrl = ytdl.validateURL(text);
      await m.React("⬇️");

      const sendVideoMessage = async (videoInfo, finalVideoBuffer) => {
        if (cmd === 'ytmp4doc') {
          const docMessage = {
            document: finalVideoBuffer,
            mimetype: 'video/mp4',
            fileName: `${videoInfo.title}.mp4`,
            caption: `> ${videoInfo.title}\n> © Powered by 𝗛𝗔𝗡𝗦𝗔𝗠𝗔𝗟-𝞛𝘿`,
          };
          await Matrix.sendMessage(m.from, docMessage, { quoted: m });
        } else {
          const videoMessage = {
            video: finalVideoBuffer,
            mimetype: 'video/mp4',
            caption: `> ${videoInfo.title}\n> © POWERED BY 𝗛𝗔𝗡𝗦𝗔𝗠𝗔𝗟-𝞛𝘿`,
          };
          await Matrix.sendMessage(m.from, videoMessage, { quoted: m });
        }
        await m.React("✅");
      };

      if (isUrl) {
        const videoStream = ytdl(text, { filter: 'audioandvideo', quality: 'highest' });
        const videoBuffer = [];

        videoStream.on('data', (chunk) => {
          videoBuffer.push(chunk);
        });

        videoStream.on('end', async () => {
          try {
            const finalVideoBuffer = Buffer.concat(videoBuffer);
            const videoInfo = await yts({ videoId: ytdl.getURLVideoID(text) });
            await sendVideoMessage(videoInfo, finalVideoBuffer);
          } catch (err) {
            console.error('Error sending video:', err);
            m.reply('Error sending video.');
            await m.React("❌");
          }
        });
      } else {
        const searchResult = await yts(text);
        const firstVideo = searchResult.videos[0];
        await m.React("⬇️");

        if (!firstVideo) {
          m.reply('Video not found.');
          await m.React("❌");
          return;
        }

        const videoStream = ytdl(firstVideo.url, { filter: 'audioandvideo', quality: 'highest' });
        const videoBuffer = [];

        videoStream.on('data', (chunk) => {
          videoBuffer.push(chunk);
        });

        videoStream.on('end', async () => {
          try {
            const finalVideoBuffer = Buffer.concat(videoBuffer);
            await sendVideoMessage(firstVideo, finalVideoBuffer);
          } catch (err) {
            console.error('Error sending video:', err);
            m.reply('Error sending video.');
            await m.React("❌");
          }
        });
      }
    } catch (error) {
      console.error("Error generating response:", error);
      m.reply('An error occurred while processing your request.');
      await m.React("❌");
    }
  }
};

export default video;
