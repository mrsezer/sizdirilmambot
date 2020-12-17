const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (!mesaj) return message.reply('Neyi Duyurayım Onu Da Yazmalısın');
    message.delete();
    const embed = new Discord.MessageEmbed()
    .setColor(0xD97634)
    .setDescription(`**${mesaj}**`)
    return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyur'],
  permLevel: 1
};

exports.help = {
  name: 'duyuru',
  description: '',
  usage: 'yaz [mesaj]'
};