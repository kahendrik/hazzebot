const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Запустился бот ' + bot.user.tag);
})

bot.on('message', message => {
    if(message.content == '!ping') message.channel.send('Pong!');
    if(message.content == '!ку') message.channel.send('Привет!');
})

bot.login('OTYyNDM3NTk4NjE2Mzc1MzI2.YlHh3A.GMrs0PrFEtWk1CgfsOLUmJKqgOs');