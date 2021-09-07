
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bully')
        .setDescription('Bullies someone. >:3')
        .addUserOption(option => option.setName('victim').setDescription('Enter a user to bully!').setRequired(true)),
    async execute(interaction) {
        // Define APIs.
        const APIs = ['https://waifu.pics/api/sfw/bully', 'https://waifu.pics/api/sfw/bonk', 'https://waifu.pics/api/sfw/yeet']
        // Define suffixes
        const suffixes = ['Hahaha!', '>:3', 'Deserves it.']
        const otherstuff = ['bullies', 'beats', 'bonks', 'yeets']
        // Pick an API.
        const API = APIs[Math.floor(Math.random() * APIs.length)]
        // Fetch from API.
        const { url } = await fetch(API).then(res => res.json());

        // #region EmbedsS
        const embed = new MessageEmbed()
            .setColor(config.embed.colour)
            .setAuthor(`${interaction.user.username} ${otherstuff[Math.floor(Math.random() * otherstuff.length)]} ${interaction.options.getUser('victim')?.username}! ${suffixes[Math.floor(Math.random() * suffixes.length)]}`, `${interaction.user.avatarURL()}`)
            .setImage(url)
            .setFooter(`Fetched from ${API}.`)
        // #endregion Embeds

        // Reply to interaction.
        await interaction.reply({ embeds: [embed] })
    }
}