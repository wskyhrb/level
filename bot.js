const Discord = require("discord.js");
const client = new Discord.Client();









 client.on('message', message => {
    var prefix = "b-"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});
 
 
 
 
 client.login(process.env.BOT_TOKEN);
حط هاذا
