// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('smile')
        .setDescription('Makes you smile.'),
    async execute(interaction) {
        const otherstuff = ['smiles', 'blushes'];
        const API = bot.api.smile[Math.floor(Math.random() * bot.api.smile.length)];
        const { url } = await fetch(API).then(res => res.json());

        const embed = new MessageEmbed()
            .setColor(bot.embed.defaultColour)
            .setAuthor(`${interaction.user.username} ${otherstuff[Math.floor(Math.random() * otherstuff.length)]}~`, `${interaction.user.avatarURL()}`)
            .setImage(url)
            .setFooter(`Fetched from ${API}.`);

        await interaction.reply({ embeds: [embed] });
    }
}