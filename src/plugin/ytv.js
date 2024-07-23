import ytdl from '@distube/ytdl-core';
import yts from 'yt-search';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

const videoMap = new Map();
let videoIndex = 1;

const song = async (m, Matrix) => {
  let selectedListId;
  const selectedButtonId = m?.message?.templateButtonReplyMessage?.selectedId;
  const interactiveResponseMessage = m?.message?.interactiveResponseMessage;

  if (interactiveResponseMessage) {
    const paramsJson = interactiveResponseMessage.nativeFlowResponseMessage?.paramsJson;
    if (paramsJson) {
      const params = JSON.parse(paramsJson);
      selectedListId = params.id;
    }
  }

  const selectedId = selectedListId || selectedButtonId;

  const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  const validCommands = ['ytv'];

  if (validCommands.includes(cmd)) {
    if (!text || !ytdl.validateURL(text)) {
      return m.reply('Please provide a valid YouTube URL.');
    }

    try {
      await m.React("🕘");

      const info = await ytdl.getInfo(text);

      const videoDetails = {
        title: info.videoDetails.title,
        author: info.videoDetails.author.name,
        views: info.videoDetails.viewCount,
        likes: info.videoDetails.likes,
        uploadDate: formatDate(info.videoDetails.uploadDate),
        duration: formatDuration(info.videoDetails.lengthSeconds),
        thumbnailUrl: info.videoDetails.thumbnails[0].url,
        videoUrl: info.videoDetails.video_url
      };

      const videoInfo = await yts({ videoId: ytdl.getURLVideoID(videoDetails.videoUrl) });

      // Filter formats to only include those with both audio and video
      const formats = info.formats.filter(format => format.hasAudio && format.hasVideo);

      // Map of quality labels to the respective format itags
      const desiredQualities = {
        '144p': formats.find(f => f.qualityLabel === '144p')?.itag,
        '240p': formats.find(f => f.qualityLabel === '240p')?.itag,
        '360p': formats.find(f => f.qualityLabel === '360p')?.itag,
        '480p': formats.find(f => f.qualityLabel === '480p')?.itag,
        '720p': formats.find(f => f.qualityLabel === '720p')?.itag,
        '1080p': formats.find(f => f.qualityLabel === '1080p')?.itag,
      };

      const qualityButtons = Object.entries(desiredQualities).map(([quality, itag], index) => {
        if (itag) {
          const uniqueId = videoIndex + index;
          videoMap.set(uniqueId, { itag, videoId: info.videoDetails.videoId, ...videoDetails, quality });
          return {
            "header": "",
            "title": `${quality}`,
            "description": `Select ${quality} quality`,
            "id": `quality_${uniqueId}`
          };
        }
      }).filter(Boolean);

      const msg = generateWAMessageFromContent(m.from, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              body: proto.Message.InteractiveMessage.Body.create({
                text: `> *HANSAMAL-MD VIDEO DOWNLOADER*\n> *TITLE:* ${videoDetails.title}\n> *AUTHOR:* ${videoDetails.author}\n> *VIEWS:* ${videoDetails.views}\n> *LIKES:* ${videoDetails.likes}\n> *UPLOAD DATE:* ${videoDetails.uploadDate}\n> *DURATION:* ${videoDetails.duration}\n`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: "© Powered By IMALKA-HANSAMAL"
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image: { url: videoInfo.thumbnail } }, { upload: Matrix.waUploadToServer })),
                title: "",
                gifPlayback: true,
                subtitle: "",
                hasMediaAttachment: false
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                      title: "🎬 Select a video quality",
                      sections: [
                        {
                          title: "📥 Available Qualities",
                          highlight_label: "💡 Choose Quality",
                          rows: qualityButtons
                        },
                      ]
                    })
                  },
                ],
              }),
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
            }),
          },
        },
      }, {});

      await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
      });
      await m.React("✅");

      videoIndex += qualityButtons.length;
    } catch (error) {
      console.error("Error processing your request:", error);
      m.reply('Error processing your request.');
      await m.React("❌");
    }
  } else if (selectedId) {
    const key = parseInt(selectedId.replace('quality_', ''));
    const selectedQuality = videoMap.get(key);

    if (selectedQuality) {
      try {
        const videoUrl = `https://www.youtube.com/watch?v=${selectedQuality.videoId}`;

        const videoStream = ytdl(videoUrl, { quality: selectedQuality.itag });

        const finalVideoBuffer = await streamToBuffer(videoStream);

        const content = {
          document: finalVideoBuffer,
          mimetype: 'video/mp4',
          fileName: `${selectedQuality.title}.mp4`,
          caption: `*DOWNLOADED BY HANSAMAL-𝞛𝘿*`,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: selectedQuality.title,
              body: 'IMALKA-MD',
              thumbnailUrl: selectedQuality.thumbnailUrl,
              sourceUrl: selectedQuality.videoUrl,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        };

        await Matrix.sendMessage(m.from, content, { quoted: m });
      } catch (error) {
        console.error("Error fetching video details:", error);
        m.reply(`Error fetching video details: ${error.message}`);
      }
    }
  }
};

const formatDuration = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h}h ${m}m ${s}s`;
};

const formatDate = (date) => {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
};

const streamToBuffer = async (stream) => {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', chunk => chunks.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
    stream.on('error', reject);
  });
};

export default song;
