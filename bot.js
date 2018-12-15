const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['286926707531841536'];




client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('!w')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`${argresult} \` `)
} else 
if (message.content.startsWith('!l')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(` ${argresult} \` `)
} else 
if (message.content.startsWith('!s')) {
  client.user.setGame(argresult, "https://www.twitch.tv/meercy");
   message.channel.send(`${argresult} \` ` )
}
});

client.login(process.env.BOT_TOKEN);
