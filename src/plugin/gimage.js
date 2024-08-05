import axios from 'axios';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const imageCommand = async (m, sock) => {
  const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const args = m.body.slice(prefix.length + cmd.length).trim();
  const query = args;

  const validCommands = ['image', 'img', 'gimage'];

  if (validCommands.includes(cmd)) {
    if (!query) {
      return sock.sendMessage(m.from, { text: `Usage: ${prefix + cmd} black cats` });
    }

    try {
      await m.React("📥");
      const response = await axios.get(`https://api.guruapi.tech/api/googleimage?text=${encodeURIComponent(query)}`);
      
      if (!response.data || !response.data.result) {
        return sock.sendMessage(m.from, { text: 'No images found for your search query.' });
      }

      const results = response.data.result.slice(0, 5); // Get the top 5 images

      if (results.length === 0) {
        return sock.sendMessage(m.from, { text: 'No images found for your search query.' });
      }

      for (const imageUrl of results) {
        await sleep(500);
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(imageResponse.data, 'binary');

        await sock.sendMessage(m.from, { image: imageBuffer, caption: '' }, { quoted: m });
        await m.React("✅");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      await sock.sendMessage(m.from, { text: 'Error fetching images.' });
    }
  }
};

export default imageCommand;
