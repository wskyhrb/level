const Discord = require("discord.js");
const client = new Discord.Client();









client.on('message', message => {
    if (message.content.startsWith("دعواتي")) {

    message.guild.fetchInvites()
    .then(invites => message.channel.send(`**:busts_in_silhouette:  اتيت ب     [${invites.find(invite => invite.inviter.id === message.author.id)}]    :calling:   عضو لهذا السيرفر    `))
         
    }
});
 
 
 
 client.login(process.env.BOT_TOKEN);
