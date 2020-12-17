
const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {
    return message.channel.send("**Yak Yak Yak**").then(async msg => {
                        setTimeout(() => {
                            msg.edit('🚬');
                        }, 500);
                        setTimeout(() => {
                            msg.edit('🚬 ☁ ');
                        }, 700);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁ ');
                        }, 900);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁ ');
                        }, 1100);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁');
                        }, 1300);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁');
                        }, 1500);
                        setTimeout(() => {
                            msg.edit('🚬 ☁');
                        }, 1700);
                        setTimeout(() => {
                            message.delete(10000);(`**Sigara Bitti **`);
                        }, 6000);
                    });
                };

                exports.conf = {
                  enabled: true,
                  guildOnly: false,
                  aliases: ["sigara", "üzüldüm"],
                  permLevel: "0"
                };

                exports.help = {
                  name: "sigarayak",
                  description: "sigara içersiniz",
                  usage: "sigara",
                  kategori: "eğlence"
                };