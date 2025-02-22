const TelegramBot = require('node-telegram-bot-api');
const { text } = require('stream/consumers');
const token = '7788093047:AAE5Ho012DoGRdBgMEYK50PiYVmCc37_XLI';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const options = {
        reply_markup: {
            keyboard: [
                [{ text: "سریال باب اسفنجی، دوبله فارسی و بدون سانسور"}],
            ],
            one_time_keybord: true;
        }
    };
    bot.sendMessage(chatId, "درود", options);
});

bot.onText(/قسمت ها/ , (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'کلیک کنید: (https://baanmmt.github.io/MmtSpongeBob/)')
});