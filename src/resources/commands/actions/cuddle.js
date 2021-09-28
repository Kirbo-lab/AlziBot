// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cuddle')
        .setDescription('Cuddles with someone.')
        .addUserOption(option => option.setName('target').setDescription('Enter a user to cuddle!').setRequired(true)),
    async execute(interaction) {
        const suffixes = ['Cute!', 'Adorable!', 'Kyaaaa!!'];
        const otherstuff = ['cuddles with', 'cuddles', 'snuggles with', 'snuggles'];
        const API = bot.api.cuddle[Math.floor(Math.random() * bot.api.cuddle.length)];
        const { url } = await fetch(API).then(res => res.json());

        if (interaction.options.getUser('target') === interaction.user) {
            const embed = new MessageEmbed()
                .setColor(bot.embed.defaultColour)
                .setAuthor(`${bot.application.profile.name} ${otherstuff[Math.floor(Math.random() * otherstuff.length)]} ${interaction.user.username}!~ ${suffixes[Math.floor(Math.random() * suffixes.length)]}`, `${interaction.user.avatarURL()}`)
                .setImage(url)
                .setFooter(`Fetched from ${API}.`);

            await interaction.reply({ embeds: [embed] });
        } else {
            const embed = new MessageEmbed()
                .setColor(bot.embed.defaultColour)
                .setAuthor(`${interaction.user.username} ${otherstuff[Math.floor(Math.random() * otherstuff.length)]} ${interaction.options.getMember('user')?.displayName}!~ ${suffixes[Math.floor(Math.random() * suffixes.length)]}`, `${interaction.user.avatarURL()}`)
                .setImage(url)
                .setFooter(`Fetched from ${API}.`);

            await interaction.reply({ embeds: [embed] });
        }
    }
}