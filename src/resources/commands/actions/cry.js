// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cry')
        .setDescription('Makes you cry.'),
    async execute(interaction) {
        const suffixes = [':c', ':\'c', ':\'(', ':(', ':C'];
        const otherstuff = ['cries'];
        const { url } = await fetch(bot.api.cry).then(res => res.json());

        const embed = new MessageEmbed()
            .setColor(bot.embed.defaultColour)
            .setAuthor(`${interaction.member.displayName} ${otherstuff[Math.floor(Math.random() * otherstuff.length)]}~ ${suffixes[Math.floor(Math.random() * suffixes.length)]}`, `${interaction.user.avatarURL()}`)
            .setImage(url)
            .setFooter(`Fetched from ${bot.api.cry}.`);

        await interaction.reply({ embeds: [embed] });
    }
}