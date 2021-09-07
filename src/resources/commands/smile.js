
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('smile')
        .setDescription('Makes you smile. c:'),
    async execute(interaction) {
        // Define APIs.
        const APIs = ['https://waifu.pics/api/sfw/smile', 'https://waifu.pics/api/sfw/blush', 'https://waifu.pics/api/sfw/happy']
        // Define suffixes
        const otherstuff = ['smiles', 'blushes']
        // Pick an API.
        const API = APIs[Math.floor(Math.random() * APIs.length)]
        // Fetch from API.
        const { url } = await fetch(API).then(res => res.json());

        // #region Embeds
        const embed = new MessageEmbed()
            .setColor(config.embed.colour)
            .setAuthor(`${interaction.user.username} ${otherstuff[Math.floor(Math.random() * otherstuff.length)]} ${interaction.options.getUser('victim')?.username}~`, `${interaction.user.avatarURL()}`)
            .setImage(url)
            .setFooter(`Fetched from ${API}.`)
        // #endregion Embeds

        // Reply to interaction.
        await interaction.reply({ embeds: [embed] })
    }
}