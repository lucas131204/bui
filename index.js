//Discord
const Discord = require('discord.js');
const config = require("./config.json")
const client = new Discord.Client();

client.on('message', message => {
    let args = message.content.split(/ +/g);
    let cmd  = args.shift().toLowerCase();
    if(cmd === `${prefix}repeat`){
        message.channel.send(args.join(" "));
        message.delete({ timeout: 3000}).then(message => console.log("le message :" + message.content));
    }
    
});

client.on('ready', () => {
    console.log('je suis trop baux');
});

client.login(process.env.TOKEN)
