// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pat')
        .setDescription('Pats someone.')
        .addUserOption(option => option.setName('target').setDescription('Enter a user to pat!').setRequired(true)),
    async execute(interaction) {
        const suffixes = ['There there...', 'How cute!'];
        const otherstuff = ['pats'];
        const { url } = await fetch(bot.api.pat).then(res => res.json());

        if (interaction.options.getUser('target') === interaction.user) {
            const embed = new MessageEmbed()
                .setColor(bot.embed.defaultColour)
                .setAuthor(`${bot.application.profile.name} ${otherstuff[Math.floor(Math.random() * otherstuff.length)]} ${interaction.user.username}!~ ${suffixes[Math.floor(Math.random() * suffixes.length)]}`, `${interaction.user.avatarURL()}`)
                .setImage(url)
                .setFooter(`Fetched from ${bot.api.pat}.`);

            await interaction.reply({ embeds: [embed] });
        } else {
            const embed = new MessageEmbed()
                .setColor(bot.embed.defaultColour)
                .setAuthor(`${interaction.user.username} ${otherstuff[Math.floor(Math.random() * otherstuff.length)]} ${interaction.options.getMember('user')?.displayName}!~ ${suffixes[Math.floor(Math.random() * suffixes.length)]}`, `${interaction.user.avatarURL()}`)
                .setImage(url)
                .setFooter(`Fetched from ${bot.api.pat}.`);

            await interaction.reply({ embeds: [embed] });
        }
    }
}