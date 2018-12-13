const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['286926707531841536'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`.تصادق مع الذئاب .. على أن يكون فأسك مستعداً.
`,'https://www.twitch.tv/MeeRcY')
  client.user.setStatus("idle")
}); 





const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'إدخل') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});


client.login(process.env.BOT_TOKEN);
