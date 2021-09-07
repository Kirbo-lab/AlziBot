
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cuddle')
        .setDescription('Cuddles with someone.')
        .addUserOption(option => option.setName('target').setDescription('Enter a user to cuddle!').setRequired(true)),
    async execute(interaction) {
        // Define APIs.
        const APIs = ['https://waifu.pics/api/sfw/cuddles', 'https://nekos.life/api/v2/img/cuddle']
        // Define suffixes
        const suffixes = ['Cute!', 'Adorable!', 'Kyaaaa!!']
        const otherstuff = ['cuddles with', 'cuddles', 'snuggles with', 'snuggles']
        // Pick an API.
        const API = APIs[Math.floor(Math.random() * APIs.length)]
        // Fetch from API.
        const { url } = await fetch(API).then(res => res.json());

        // #region EmbedsS
        const embed = new MessageEmbed()
            .setColor(config.embed.colour)
            .setAuthor(`${interaction.user.username} ${otherstuff[Math.floor(Math.random() * otherstuff.length)]} ${interaction.options.getUser('target')?.username}!~ ${suffixes[Math.floor(Math.random() * suffixes.length)]}`, `${interaction.user.avatarURL()}`)
            .setImage(url)
            .setFooter(`Fetched from ${API}.`)
        // #endregion Embeds

        // Reply to interaction.
        await interaction.reply({ embeds: [embed] })
    }
}