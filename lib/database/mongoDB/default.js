const Config = require('../../../config');

const welcome = `*@$user* joined this group today as $membersth member.\n
*👤 USER :* @$user
*🪩 STATUS :* $status
*🧩 GROUP :* $group
\n_$prefixdisable welcome to disable this message._`;

const left = `Ex-member *@$user* is no longer available in this group chat.\n
*🎀 USER :* @$user
*🪅 STATUS :* $status
*🧿 GROUP :* $group
\n_$prefix goodbye off to disable this message._`;

const alive = `\`\`\`
❖ ── ✦ ──『✙ Alive ✙』── ✦ ── ❖

📅 Dᴀᴛᴇ Tᴏᴅᴀʏ : $date
⌚ Tɪᴍᴇ Nᴏᴡ : $time

✦» 𝚄𝚜𝚎𝚛 : $username
✦» 𝙼𝚎𝚖 : $ram\`\`\`

☎️ *Cᴏɴᴛᴀᴄᴛ :* https://wa.me/${Config.ownernumber}?text=HI LuciZR
💻 *Sᴏᴜʀᴄᴇ Cᴏᴅᴇ :* https://github.com/LuciZR/ZR-BOT-MD
🔮 *Public Group :* https://chat.whatsapp.com/HuQXSSgC80hERPfi4D4D2i

*R𝚎𝚙𝚕𝚢 A N𝚞𝚖𝚋𝚎𝚛 T𝚘 G𝚎𝚝:*
   𝟭 𝗔𝗹𝗹𝗺𝗲𝗻𝘂
   𝟮 𝗟𝗶𝘀𝘁𝗺𝗲𝗻𝘂
`;
module.exports = {
   aliveMsg: alive,
   welcomeMsg: welcome,
   leftMsg: left
};
