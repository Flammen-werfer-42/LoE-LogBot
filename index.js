const Discord = require('discord.js');
const bot = new Discord.Client();
 const token = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
var fs = require('fs');
let request = require('request');

// STARTUP MESSAGE AND SET THE PLAYING MESSAGE
bot.on('ready', () =>{
    console.log("BOT IS OPERATIONAL");
    bot.user.setActivity("LogBot knows what you did");
    bot.user.setAvatar("< use a url here to change the bot's pfp >")
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
            if(test.includes('<@') && !test.includes('<#'))  //@ USED NOT #
            {
                    try {
             var picmsg1 = `\n-Channel: ${msg.channel.name} Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content} --Pic: ${msg.attachments.first().url} --User Mentioned: ${msg.mentions.members.first().displayName}`;
                    }
                    catch(err) 
                   {var picmsg1 = `\n-Channel: ${msg.channel.name} --Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content}`;}
             //WRITE TO FILE
             fs.appendFile('loeLogs.txt', picmsg1, function (err) 
             {
                if (err) throw err;
             });
    
                console.log("@ USED NOT #");
            
            } 
            else if(test.includes('<#') && !test.includes('<@'))    // # USED NOT @
            {
                    try {
                var picmsg2 = `\n-Channel: ${msg.channel.name} Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content} --Pic: ${msg.attachments.first().url} --Channel Mentioned: ${msg.mentions.channels.first().name}`;
                       }
                     catch(err) 
                     {var picmsg2 = `\n-Channel: ${msg.channel.name} --Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content}`;}
                //WRITE TO FILE
                fs.appendFile('loeLogs.txt', picmsg2, function (err) 
                {
                   if (err) throw err;
                });
       
                   console.log("# USED");
               
            }
            else if (test.includes('<#') && test.includes('<@'))   // # AND @ USED
            {
                    try {
                var picmsg3 = `\n-Channel: ${msg.channel.name} Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content} --Pic: ${msg.attachments.first().url} --User Mentioned: ${msg.mentions.members.first().displayName} --Channel Mentioned: ${msg.mentions.channels.first().name}`;
                        }
                       catch(err) 
                      {var picmsg3 = `\n-Channel: ${msg.channel.name} --Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content}`;}
                //WRITE TO FILE
                fs.appendFile('loeLogs.txt', picmsg3, function (err) 
                {
                   if (err) throw err;
                });
       
                   console.log("# USED @ USED");
               
            }
            else    // NO @ NO #
            {
                try {
                    var picmsg4 = `\n-Channel: ${msg.channel.name} Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content} --Pic: ${msg.attachments.first().url}`;
                           }
                         catch(err) 
                         {var picmsg4 = `\n-Channel: ${msg.channel.name} --Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content}`;}
                fs.appendFile('loeLogs.txt', picmsg4, function (err) 
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

        if (test.includes('<@&'))
        {
            if (test.includes('<@&3414'))
            {
                try {
                var logmsg1 = `\n-Channel: ${msg.channel.name} --Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content} --Role Mentioned: Moderation`;
                   }
                   catch(err) 
                   {var logmsg1 = `\n-Channel: ${msg.channel.name} --Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content}`;}
                fs.appendFile('loeLogs.txt', logmsg1, function (err) 
                {
                   if (err) throw err;
                });  
                   
                   console.log("MODERATION PINGED");
            }
            
        }

        else if(test.includes('<@') && !test.includes('<#'))       // @ USED NOT #
        { 
              try {
         var logmsg2 = `\n-Channel: ${msg.channel.name} --Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content} --User Mentioned: ${msg.mentions.members.first().displayName}`;
            }
            catch(err) 
            {var logmsg2 = `\n-Channel: ${msg.channel.name} --Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content}`;}
         fs.appendFile('loeLogs.txt', logmsg2, function (err) 
         {
            if (err) throw err;
         });  
            
            console.log("@ USED NOT #");
        
        } 
        else if(test.includes('<#') && !test.includes('<@')) // # USED NOT @
        {
                try {
            var logmsg3 = `\n-Channel: ${msg.channel.name} Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content} --Channel Mentioned: ${msg.mentions.channels.first().name}`;
                }
                catch(err) 
                {var logmsg3 = `\n-Channel: ${msg.channel.name} --Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content}`;}
                //WRITE TO FILE
            fs.appendFile('loeLogs.txt', logmsg3, function (err) 
            {
               if (err) throw err;
            });
       
               console.log("# USED NOT @");
               
        }
        else if (test.includes('<#') && test.includes('<@'))   // # AND @ USED
        {
                try {
            var logmsg4 = `\n-Channel: ${msg.channel.name} Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content} --User Mentioned: ${msg.mentions.members.first().displayName} --Channel Mentioned: ${msg.mentions.channels.first().name}`;
                }
                catch(err) 
                {
                    var logmsg4 = `\n-Channel: ${msg.channel.name} --Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content}`;
                }
            //WRITE TO FILE
            fs.appendFile('loeLogs.txt', logmsg4, function (err) 
            {
               if (err) throw err;
             });
    
                console.log("# USED @ USED");
               
        }
        else    // NO @ NO #
        {
            try {
                var logmsg5 = `\n-Channel: ${msg.channel.name} Time: ${msg.createdAt} \n----Author: ${msg.author.tag} --Message: ${msg.content}`;
                    }
                    catch(err) 
                    {
                        var logmsg5 = `\n-AN ERROR OCCURED IN LOGGING THE MESSAGE`;
                    }
            fs.appendFile('loeLogs.txt', logmsg5, function (err) 
            {
                if (err) throw err;
            });
            console.log("NO @ NO #");
        }
        console.log("NO PIC");
    }
}); 
bot.login(token);