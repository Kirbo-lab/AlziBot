// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kiss')
        .setDescription('Kisses someone. o-o')
        .addUserOption(option => option.setName('target').setDescription('Enter a user to kiss!').setRequired(true)),
    async execute(interaction) {
        const suffixes = [':flushed:', ':smirk:', ':eyes:', 'How cute!', 'Adorable!'];
        const otherstuff = ['kisses'];
        const API = bot.api.kiss[Math.floor(Math.random() * bot.api.kiss.length)];
        const { url } = await fetch(API).then(res => res.json());

        if (interaction.options.getUser('target') === interaction.user) {
            await interaction.reply({ content: 'You can\'t kiss yourself, silly!' });
        } else if (interaction.options.getUser('target')?.id === bot.client) {
            interaction.reply({ content: `I am underaged!` });
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