let handler = async (m) => {
    const sentMsg = await conn.sendContactArray(m.chat, [
        [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 Developer Bot `, `DOTA2 PLAYER`, `faishall.id`, `🇮🇩 Indonesia`, `📍 https://faishall.id`, `👤 Owner GO-BOT`],
        [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 Whatsapp Bot`, `📵 Dont Spam`, `admin@faishall.id`, `🇮🇩 Indonesia`, `📍 https://github.com/gospel99/go-bot`, `Hanya bot biasa yang kadang error ☺`]
    ], fkontak)
    await m.reply(`Hello @${m.sender.split(`@`)[0]} Thats my owner, dont spam or i will block u`)
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i
export default handler