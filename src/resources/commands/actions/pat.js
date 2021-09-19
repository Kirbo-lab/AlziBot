
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')
const config = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pat')
        .setDescription('Pats someone.')
        .addUserOption(option => option.setName('target').setDescription('Enter a user to pat!').setRequired(true)),
    async execute(interaction) {
        // Define APIs.
        const APIs = ['https://waifu.pics/api/sfw/pat']
        // Define suffixes
        const suffixes = ['There there...', 'How cute!']
        const otherstuff = ['pats']
        // Pick an API.
        const API = APIs[Math.floor(Math.random() * APIs.length)]
        // Fetch from API.
        const { url } = await fetch(API).then(res => res.json());

        if(interaction.options.getUser('target') === interaction.user) {
            const embed = new MessageEmbed()
                .setColor(config.embed.colour)
                .setAuthor(`Botphyte ${otherstuff[Math.floor(Math.random() * otherstuff.length)]} ${interaction.user.username}!~ ${suffixes[Math.floor(Math.random() * suffixes.length)]}`, `${interaction.user.avatarURL()}`)
                .setImage(url)
                .setFooter(`Fetched from ${API}.`)
            // #endregion Embeds

            // Reply to interaction.
            await interaction.reply({ embeds: [embed] })
        } else {
            // #region Embeds
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
}