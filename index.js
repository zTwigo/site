const telegrambot = require("node-telegram-bot-api");
const axios = require("axios");

const token = '5847490705:AAFowxGVjiO1tEcvAa8iqJLquipx9IL8hz8';

const bot = new telegrambot(token,{ polling: true});

bot.on("message",async(msg)=> {
    console.log(JSON.stringify(msg));
})
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Welcome");    
});
bot.onText(/\/verify/, (msg) => {
    let inline_keyboard = [
        [
            {
                text : 'hello'
            }
        ]
    ]
    bot.sendMessage(msg.chat.id, "Welcome");
    bot.sendMessage(msg.chat.id, "Verifica qui!", {
        reply_markup:{
            inline_keyboard
        }
    })    
});