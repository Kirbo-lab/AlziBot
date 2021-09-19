
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')
const config = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kiss')
        .setDescription('Kisses someone. o-o')
        .addUserOption(option => option.setName('target').setDescription('Enter a user to kiss!').setRequired(true)),
    async execute(interaction) {
        // Define APIs.
        const APIs = ['https://waifu.pics/api/sfw/kiss', 'https://nekos.life/api/v2/img/kiss']
        // Define suffixes
        const suffixes = [':flushed:', ':smirk:', ':eyes:', 'How cute!', 'Adorable!']
        const otherstuff = ['kisses']
        // Pick an API.
        const API = APIs[Math.floor(Math.random() * APIs.length)]
        // Fetch from API.
        const { url } = await fetch(API).then(res => res.json());

        if(interaction.options.getUser('target') === interaction.user) {
            // Reply to interaction.
            await interaction.reply({ content: 'You can\'t kiss yourself, silly!' })
        } else if(interaction.options.getUser('target')?.id === config.bot.clientID) {
            interaction.reply({ content: `<@${interaction.user.id}>, I am underaged!`, ephemeral: true })
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