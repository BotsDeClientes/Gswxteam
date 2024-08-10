const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `𝐇𝐨𝐥𝐚 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 👋, 𝐓𝐞 𝐢𝐧𝐯𝐢𝐭𝐨 𝐚 𝐮𝐧𝐢𝐫𝐭𝐞 𝐚 𝐥𝐨𝐬 𝐠𝐫𝐮𝐩𝐨𝐬 𝐎𝐅𝐂 𝐝𝐞 𝘍𝘭𝘢𝘴𝘩 𝘉𝘰𝘵 ⚡︎ :D

➤ 𝐆𝐫𝐮𝐩𝐨𝐬 𝐨𝐟𝐢𝐜𝐢𝐚𝐥𝐞𝐬 𝐝𝐞𝐥 𝘍𝘭𝘢𝘴𝘩:

🌹 𝗚𝗿𝘂𝗽𝗼 𝙁𝙇𝘼𝙎𝙃 𝘽𝙊𝙏
 
༄ ${gp1} ༆

🌹 𝗖𝗮𝗻𝗮𝗹 𝙁𝙇𝘼𝙎𝙃 𝘽𝙊𝙏
༄ ${gp2} ༄

`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com`},
    'mimetype': `application/${document}`,
    'fileName': `「 ᴡʜᴀᴛsᴘᴘ-ʙᴏᴛ 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': global.md,
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'global.md'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
