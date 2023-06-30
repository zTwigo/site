const telegrambot = require("node-telegram-bot-api");
const axios = require("axios");

const token = '5847490705:AAFowxGVjiO1tEcvAa8iqJLquipx9IL8hz8';

const bot = new telegrambot(token,{ polling: true});

bot.on("message",async(msg)=> {
    console.log("hi"+msg);
})