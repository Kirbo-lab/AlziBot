
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('../config.json');
const fetch = require('node-fetch')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('waifu')
		.setDescription('Sends an image of a Waifu. If channel is NSFW, I will send a lewd image.'),
	async execute(interaction) {
		// Fetch Waifu image.
		const nsfw = interaction.channel.nsfw ? 'nsfw' : 'sfw';
		const { url } = await fetch(`https://waifu.pics/api/${nsfw}/waifu`).then(res => res.json());
		
		// #region Embeds
		const embed = new MessageEmbed()
			.setColor(config.embed.colour)
			.setTitle('Here is your Waifu!')
			.setDescription('Be careful, it\'s **No Simp September**.')
			.setURL(url)
			.setImage(url)
			.setFooter(`Fetched from https://waifu.pics/api/${nsfw}/waifu.`);
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