
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('../config.json');
const fetch = require('node-fetch')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('neko')
		.setDescription('Sends an image of a Neko / cat girl. If channel is NSFW, I will send a lewd image.'),
	async execute(interaction) {
		// Fetch Neko image.
		const nsfw = interaction.channel.nsfw ? 'nsfw' : 'sfw';
		const { url } = await fetch(`https://waifu.pics/api/${nsfw}/neko`).then(res => res.json());
		
		// #region Embeds
		const embed = new MessageEmbed()
			.setColor(config.embed.colour)
			.setTitle('Here is your Neko!')
			.setURL(url)
			.setImage(url)
			.setFooter(`Fetched from https://waifu.pics/api/${nsfw}/neko.`);
		// #endregion Embeds

		// #region Buttons
		const button = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setStyle('LINK')
				.setLabel('Visit source here')
				.setURL(url)
		);
		// #endregion Buttons
		
		// Reply to interaction.
		await interaction.reply({ embeds: [embed], components: [button] });
	},
};