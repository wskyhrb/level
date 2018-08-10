
const Discord = require("discord.js");
const client = new Discord.Client();









 client.on('message', message => {
    var prefix = "+"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});
 
 
 const misaka = new Set();
var prefix = '*';
    client.on('message', async msg => {
  if(msg.content.startsWith("+رابط")) {
  if (misaka.has(msg.author.id)) {
    let misakaemb = new Discord.RichEmbed()
    .setDescription(`يجب عليك الانتظار 24 ساعه!`)
    .setColor(`RED`)
    return msg.channel.send(misakaemb).then(message => {
     message.delete(10000) 
    })
    
    }
    misaka.add(msg.author.id);

  
   msg.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400,
  }).then(invite =>
   msg.author.sendMessage(`
         <@${msg.author.id}> 
         **maxUses: 5 **
         ${invite.url}`)
  )
    msg.channel.send(`**تم إرسال رسالة عالخاص  -$**`)
  }
    setTimeout(() => {
    },86400000);
    })
   client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+cc')){
 if (message.author.id !== '286926707531841536') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '286926707531841536') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

 client.login(process.env.BOT_TOKEN);
