//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "darksten4@gmail.com";
global.location = "America,Port-au-Prince.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://sten_4ldx_user:9o1M5XMhT9FutGJ7gN1S90S39i9C0pQQ@dpg-cqr69ng8fa8c73foguig-a.oregon-postgres.render.com/sten_4ldx";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Dark-S-TEN/DRK_ST_V1/tree/main";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/101bf22f101df83c4adbf.jpg";
global.devs = "50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "50948748102";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/101bf22f101df83c4adbf.jpg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VlKzhxZTNSbVdXNWg5VlBYUDlVaVF6OGdYdVczQ28wOG5BamhyUXFHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaW95SStNKzQyMldOMzNuMUZCQjArZHpNOG42RWRLZXcwci9uUFBFK1FDVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSDRyK0xJbjIyWHRUaFVzV1MyVjBsV1BuNlR0Y2ZFUGpXQ0lKUmhCLzE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvRURybXZvNm1nS0VwYUtJcktERjFJN05YQ1ZCOGNzSFpUdHhlTzNuZzBrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9MVUZLb0VVRmhuazhvbWR2WnpGK2R3UFFySUtOZlpOdTJZZm9uKzVQMWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjV1aFdUNUdaYldtQmFZbkw0VkpkM2xoWjhpRElXVCtWbXBiUlhONXRhMDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUlyM2ZNSVhPVHYxN0Q4bk9VT1dtdng1OGpqZUttZW5iWjNXRmEwMkQyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTVhSXNDcTJWUzM3c2pxdFRyRWpJSE41NDZuZCt5ekc5MU1UVG1wYm8zOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5Ic2IvL3pqbHpIODZobzZkbjVJRUZVYmVla1V1ckhkemtGNldGODdaVmQ3QjhnVzVkdWJ4Z1BhVG9hNDlQSldUbDYxekVha0JVSXNYbkllN2dFV0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ2LCJhZHZTZWNyZXRLZXkiOiIvYVUyMlJnYm91UC9Fc2NrQ2Y0bFFVWGRxY0tibmFLVmZVZUh3Z1Z1SkNBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTQ0tZVmNuS1F6LTFWOWZ5QWtoajhRIiwicGhvbmVJZCI6ImY3MjU0NmFlLTEwMzAtNDYyYS04MmVmLWQ5MTA5ZGExYjJhZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3VGxzRFZqTVM3V0NDTFlZb3ZpbTNiQlZqQ009In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibm1uRlI0ZjdHR2pyVkNpV1JsVTBQcyt3K1NvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZRSFZaR0dHIiwibWUiOnsiaWQiOiI1MDk0ODc0ODEwMjo0MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2ZPMWZJSEVQT3dpYllHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibmFJdkljVU5QTEhYamwrbnF3VURYRE9hbWllb1VwOU9haHRkYlZXZ1BpND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVXc3dlJYQlFUUzFMUGF6QVhpNENSNDBqTGhBYVpOdlRrSWFNYkY4SW5kcU9hSGQrTFEzeUdWalo1KzZEekZSdjdyMVZhVlV2SlE5eERJL1lPS2EzQVE9PSIsImRldmljZVNpZ25hdHVyZSI6InpXWXhCNEVSaTBhK1IzR2ZzSldsYXVQakRZSG9QQS9CNGh3QUVVR2hZWnJNN2x3QXYxNm9sb3kvcUN1TVFYNW9Ba1dNNngvSGlTSnFGdlBvSm9oY0JRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDg3NDgxMDI6NDJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWjJpTHlIRkRUeXgxNDVmcDZzRkExd3ptcG9ucUZLZlRtb2JYVzFWb0Q0dSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDAxMjY3MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBY0YifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "null",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in DRK_ST_Tech| enjoy your time| this is DRK_ST_V1",
  author: process.env.PACK_AUTHER || "🌹⃟⃢👑 ĐÆ𝚪𝐊༒𝙎-𝙏𝞢𝞜🌹⃟⃢👑",
  packname: process.env.PACK_NAME || "🤫",
  botname: process.env.BOT_NAME || "DRK_ST_V1",
  ownername: process.env.OWNER_NAME || "𓄂⍣⃝𝐆𝚯𝐃𝄟✮͢≛ 𝐒𝚫𝐒𝐔𝐊𝚵⃝𝄟✮⃝👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
