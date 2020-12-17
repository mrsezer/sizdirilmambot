const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('773797913502547968') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(` **Sızdırılmam Bot Yardım Menüsüne Hoşgeldiniz** `)
        .setDescription(`
  **» ${prefix}moderasyon** Moderasyon Komutlarını Gösterir.
  **» ${prefix}kullanıcı**  Kullanıcı Komutlarıni Gösterir.
  **» ${prefix}eğlence ** Eğlence Komutlarını Gösterir.

`)
  .setImage(`https://cdn.discordapp.com/attachments/732281639148716033/773913354292166686/standard_13.gif`)
  .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '-yardım',
  usage: 'yardım'
};