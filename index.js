const Discord = require('discord.js');
const bot = new Discord.Client();
 const token = 'XXX';
var fs = require('fs');
let request = require('request');

// STARTUP MESSAGE AND SET THE PLAYING MESSAGE
bot.on('ready', () =>{
    console.log("Locked, cocked, and ready to rock.");
    bot.user.setActivity("LogBot knows what you did");
    bot.user.setAvatar("https://i.imgur.com/D5GBvNZ.png")
});
 
//MAKE THE BOT RESOND TO A SPECIFIC PHRASE
bot.on('message', message => {
    if(message.content === "wake up LogBot" || message.content === "wake up logbot" || message.content === "Wake up logbot" || message.content === "Wake up LogBot")
    {
        message.reply("I'M AWAKE");
    }
});

//var logStream = fs.createWriteStream("loeLogs.txt");
//CONSOLE LOGS
bot.on('message', msg => {
    console.log("CHANNEL: " + msg.channel.name 
    + "\n" + "USER: " + msg.author.tag + " " + "MESSAGE: " + msg.content);

    /********************************* PICTURE IS UPLOADED ****************************************************/
    if(msg.content == "" || msg.content != "" && msg.attachments.size > 0)  //IF PIC UPLOADED
    {       
            var test = msg.content;
            if(test.includes('@') && !test.includes('#'))  //@ USED NOT #
            {
             var logmsg = `\n-Channel: ${msg.channel.name} Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content} --Pic: ${msg.attachments.first().url} --User Mentioned: ${msg.mentions.members.first().displayName}`;
            
             //WRITE TO FILE
             fs.appendFile('loeLogs.txt', logmsg, function (err) 
             {
                if (err) throw err;
             });
    
                console.log("@ USED NOT #");
            
            } 
            else if(test.includes('#') && !test.includes('@'))    // # USED NOT @
            {
                var logmsg = `\n-Channel: ${msg.channel.name} Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content} --Pic: ${msg.attachments.first().url} --Channel Mentioned: ${msg.mentions.channels.first().name}`;
            
                //WRITE TO FILE
                fs.appendFile('loeLogs.txt', logmsg, function (err) 
                {
                   if (err) throw err;
                });
       
                   console.log("# USED");
               
            }
            else if (test.includes('#') && test.includes('@'))   // # AND @ USED
            {
                var logmsg = `\n-Channel: ${msg.channel.name} Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content} --Pic: ${msg.attachments.first().url} --User Mentioned: ${msg.mentions.members.first().displayName} --Channel Mentioned: ${msg.mentions.channels.first().name}`;
            
                //WRITE TO FILE
                fs.appendFile('loeLogs.txt', logmsg, function (err) 
                {
                   if (err) throw err;
                });
       
                   console.log("# USED @ USED");
               
            }
            else    // NO @ NO #
            {
                var logMsg = `\n-Channel: ${msg.channel.name} --Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content} --Pic: ${msg.attachments.first().url}`;
            
                fs.appendFile('loeLogs.txt', logMsg, function (err) 
                {
                    if (err) throw err;
                });
                console.log("NO @ or #");
            }
            console.log("PIC");
    }
    /************************************************************************************* */     
    /******************************** PICTURE NOT UPLOADED ************************************************ */
    else if(msg.content == "" || msg.content != "" && msg.attachments.size == 0)    
    {
        var test = msg.content;
        if(test.includes('@') && !test.includes('#'))       // @ USED NOT #
        {
         var logmsg = `\n-Channel: ${msg.channel.name} --Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content} --User Mentioned: ${msg.mentions.members.first().displayName}`;
        
         fs.appendFile('loeLogs.txt', logmsg, function (err) 
         {
            if (err) throw err;
         });

            console.log("@ USED NOT #");
        
        } 
        else if(test.includes('#') && !test.includes('@')) // # USED NOT @
        {
            var logmsg = `\n-Channel: ${msg.channel.name} Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content} --Channel Mentioned: ${msg.mentions.channels.first().name}`;
            
                //WRITE TO FILE
            fs.appendFile('loeLogs.txt', logmsg, function (err) 
            {
               if (err) throw err;
            });
       
               console.log("# USED NOT @");
               
        }
        else if (test.includes('#') && test.includes('@'))   // # AND @ USED
        {
            var logmsg = `\n-Channel: ${msg.channel.name} Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content} --User Mentioned: ${msg.mentions.members.first().displayName} --Channel Mentioned: ${msg.mentions.channels.first().name}`;
            
            //WRITE TO FILE
            fs.appendFile('loeLogs.txt', logmsg, function (err) 
            {
               if (err) throw err;
             });
    
                console.log("# USED @ USED");
               
        }
        else    // NO @ NO #
        {
            var logmsg = `\n-Channel: ${msg.channel.name} --Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content}`;
        
            fs.appendFile('loeLogs.txt', logmsg, function (err) 
            {
                if (err) throw err;
            });
            console.log("NO @ NO #");
        }
        console.log("NO PIC");
    }
}); 
bot.login(token);