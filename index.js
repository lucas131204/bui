//Discord
const Discord = require('discord.js');
const config = require("./config.json")
const client = new Discord.Client();

client.on('ready', () => {
    console.log('je suis trop baux');
});

client.login(process.env.TOKEN)
