
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')
const config = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kill')
        .setDescription('Kills someone.')
        .addUserOption(option => option.setName('victim').setDescription('Enter a user to murder!').setRequired(true)),
    async execute(interaction) {
        // Define APIs.
        const APIs = ['https://waifu.pics/api/sfw/kill']
        // Define suffixes
        const suffixes = ['Brutal!', 'Oh my...', 'Uh..']
        const otherstuff = ['killed', 'murdered']
        // Pick an API.
        const API = APIs[Math.floor(Math.random() * APIs.length)]
        // Fetch from API.
        const { url } = await fetch(API).then(res => res.json());

        // #region Embeds
        const embed = new MessageEmbed()
            .setColor(config.embed.colour)
            .setAuthor(`${interaction.user.username} ${otherstuff[Math.floor(Math.random() * otherstuff.length)]} ${interaction.options.getUser('victim')?.username}! ${suffixes[Math.floor(Math.random() * suffixes.length)]}`, `${interaction.user.avatarURL()}`)
            .setImage(url)
            .setFooter(`Fetched from ${API}.`)

        const suicide = new MessageEmbed()
			.setColor('#f44336')
			.setTitle('We want you to know that you\'re not alone. ❤️')
			.setThumbnail('https://c.tenor.com/61VQgioK5q4AAAAC/happy-heart-love.gif')
			.setDescription(`If you are contemplating suicide, please reach out. You can find help at a National Suicide Prevention Lifeline.`)
			.addFields(
				{ name: '🇺🇸 U.S.A. Suicide Hotline:', value: '+1-800-273-8255', inline: true },
				{ name: '🇬🇧 U.K. Suicide Hotline:', value: '116-123', inline: true },
				{ name: '🇦🇺 Australian Suicide Lifeline:', value: '13 11 14', inline: true },
				{ name: '☎️ Other Hotlines:', value: `[International Suicide Hotlines](https://www.opencounseling.com/suicide-hotlines)\nThese hotlines are made available to those that do not reside in the US or UK. Look up the number on the list that belongs to your country and call it. It will connect you to your country\'s suicide hotline.`, inline: false },
			)
        // #endregion Embeds

        // Reply to interaction.
        if(interaction.options.getUser('victim') === interaction.user) {
            await interaction.reply({ embeds: [suicide], ephemeral: true })
        } else {
            await interaction.reply({ embeds: [embed] })
        }     
    }
}