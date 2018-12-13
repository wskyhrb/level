const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['286926707531841536'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`.تصادق مع الذئاب .. على أن يكون فأسك مستعداً.
`,'https://www.twitch.tv/MeeRcY')
  client.user.setStatus("idle")
}); 
client.login(process.env.BOT_TOKEN);
