// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('coin')
        .setDescription('Flips a coin.'),
    async execute(interaction) {
        const side = ['heads', 'tails'];
        const chosen = side[Math.floor(Math.random() * side.length)];
        const coin = { heads: bot.misc.coins.heads, tails: bot.misc.coins.tails };

        const embed = new MessageEmbed()
            .setColor(bot.embed.defaultColour)
            .setTitle('Coin Flip')
            .setThumbnail(coin[chosen])
            .setDescription(`It landed on **${chosen}**.`);

        await interaction.reply({ embeds: [embed] });
    }
}