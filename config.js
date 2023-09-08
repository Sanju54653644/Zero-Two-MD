const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'youre session id',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'ZEROTWO=MmNwEToJ#SrkMcPXzB18wXyeRaDBCzHXtm-rVOKKSl6YxEPRxjmk',
LANG: process.env.BOT_LANG || 'EN' ,
ANTI_BAD: process.env.ANTI_BAD || 'false',
MAX_SIZE: process.env.MAX_SIZE || 500,
ONLY_GROUP: process.env.ONLY_GROUP || 'false',
ANTI_LINK: process.env.ANTI_LINK || 'false' ,
ANTI_BOT: process.env.ANTI_BOT || 'false',
ALIVE: process.env.ALIVE || `default`,
FOOTER: process.env.FOOTER ||  '𝑃𝑜𝑤𝑒𝑟 𝐵𝑦 𝑅𝑎𝑚 𝐶ℎ𝑎𝑟𝑎𝑛',
LOGO: process.env.LOGO || `https://github.com/vihangayt0/ZeroTwo-Uploads/blob/main/ZERO-TWO.png?raw=true` 
};
