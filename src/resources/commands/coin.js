
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('coin')
        .setDescription('Flips a coin.'),
    async execute(interaction) {
        // Define sides.
        const side = ['heads', 'tails']
        // Choose a side.
        const chosen = side[Math.floor(Math.random() * side.length)]
        // Define images.
        const coin = { heads: config.misc.coins.heads, tails: config.misc.coins.tails }

        // #region Embeds
        const embed = new MessageEmbed()
            .setColor(config.embed.colour)
            .setTitle('Coin Flip')
            .setThumbnail(coin[chosen])
            .setDescription(`It landed on **${chosen}**.`)
        // #endregion Embeds

        // Reply to interaction.
        await interaction.reply({ embeds: [embed] })
    }
}