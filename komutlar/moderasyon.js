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
  **» ${prefix}ban**  Kişiyi Sunucudan Yasaklar.		
  **» ${prefix}modlog**  Sunucuda Yaşanan Olayları Bir Kanala Loglar.
  **» ${prefix}mute** Kişiyi Sunucuda Susturur.
  **» ${prefix}otorol-ayarla**  Sunucuya Giren Üyeye Belirlenen Rolü Verir.
  **» ${prefix}otorol-kapat**  Otorolü Kapatır.
  **» ${prefix}prefix-ayarla ** Botun Prefixini Değiştir.
  **» ${prefix}prefix-sıfırla **  Ayarlanan Prefixi Sıfırlar.
  **» ${prefix}sunucupanel**  Sunucu Paneli Kurar.
  **» ${prefix}yavaşmod**  Yazı Kanallarındaki Yavaş Modu Açar.
  **» ${prefix}duyuru**  Duyuru Yapmanızı Sağlar.

`)
  .setImage(`https://cdn.discordapp.com/attachments/732281639148716033/773913354292166686/standard_13.gif`)
  .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['moderasyon'],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon',
  description: '-moderasyon',
  usage: 'moderasyon'
};