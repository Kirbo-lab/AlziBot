// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const bot = require('../../misc/configuration/bot.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bully')
        .setDescription('Bullies someone.')
        .addUserOption(option => option.setName('victim').setDescription('Enter a user to bully!').setRequired(true)),
    async execute(interaction) {
        const suffixes = ['Hahaha!', '>:3', 'Deserves it.'];
        const otherstuff = ['bullies', 'beats', 'bonks', 'yeets'];
        const API = bot.api.bully[Math.floor(Math.random() * bot.api.bully.length)];
        const { url } = await fetch(API).then(res => res.json());

        if (interaction.options.getUser('victim') === interaction.user) {
            await interaction.reply({ content: 'You can\'t bully yourself!', ephemeral: true });
        } else {
            const embed = new MessageEmbed()
                .setColor(bot.embed.defaultColour)
                .setAuthor(`${interaction.user.username} ${otherstuff[Math.floor(Math.random() * otherstuff.length)]} ${interaction.options.getMember('victim')?.displayName}!~ ${suffixes[Math.floor(Math.random() * suffixes.length)]}`, `${interaction.user.avatarURL()}`)
                .setImage(url)
                .setFooter(`Fetched from ${API}.`);

            await interaction.reply({ embeds: [embed] });
        }
    }
}