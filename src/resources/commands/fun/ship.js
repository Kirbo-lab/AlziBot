// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ship')
        .setDescription('Ships a user with another user.')
        .addUserOption(option => option.setName('user1')
            .setDescription('Select a user to ship with!')
            .setRequired(true))
        .addUserOption(option => option.setName('user2')
            .setDescription('Select another user to ship with!')
            .setRequired(true)),
    async execute(interaction) {
        const user1 = interaction.options.getUser('user1')?.username;
        const user2 = interaction.options.getUser('user2')?.username;
        const user1slice = user1.slice(0, user1.length / 2);
        const user2slice = user2.slice(user2.length / 2);
        const percent = Math.floor(Math.random() * 100) + 1;

        const baseEmbed = new MessageEmbed()
            .setTitle(`${user1} + ${user2} = ${user1slice + user2slice}`)
            .setColor('#FF2600')
            .setThumbnail(bot.misc.ship.emojis.base)
            .setDescription(`**${percent}%** | This isn't going to work out... 😬`);

        const thirtyEmbed = new MessageEmbed()
            .setTitle(`${user1} + ${user2} = ${user1slice + user2slice}`)
            .setColor('#FF7B00')
            .setThumbnail(bot.misc.ship.emojis.thirty)
            .setDescription(`**${percent}%** | Cute couple. 😅`);

        const fiftyEmbed = new MessageEmbed()
            .setTitle(`${user1} + ${user2} = ${user1slice + user2slice}`)
            .setColor('#FFFF00')
            .setThumbnail(bot.misc.ship.emojis.fifty)
            .setDescription(`**${percent}%** | Adorable couple!! 😊`);

        const eightyEmbed = new MessageEmbed()
            .setTitle(`${user1} + ${user2} = ${user1slice + user2slice}`)
            .setColor(bot.embed.defaultColour)
            .setThumbnail(bot.misc.ship.emojis.eighty)
            .setDescription(`**${percent}%** | AHH CUTE!!~ 😍`);

        const topEmbed = new MessageEmbed()
            .setTitle(`${user1} + ${user2} = ${user1slice + user2slice}`)
            .setColor('#ec407a')
            .setThumbnail(bot.misc.ship.emojis.top)
            .setDescription(`**${percent}%** | damn we all jealous now. 😔`);

        if (percent < 30) {
            interaction.reply({ embeds: [baseEmbed] });
        } else if (percent < 50) {
            interaction.reply({ embeds: [thirtyEmbed] });
        } else if (percent < 80) {
            interaction.reply({ embeds: [fiftyEmbed] });
        } else if (percent < 95) {
            interaction.reply({ embeds: [eightyEmbed] });
        } else if (percent > 98) {
            interaction.reply({ embeds: [topEmbed] });
        } else {
            interaction.reply({ embeds: [fiftyEmbed] });
        }
    }
}
// funny 69 hahhaahahahaha
