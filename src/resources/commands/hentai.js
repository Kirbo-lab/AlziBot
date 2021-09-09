
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('../config.json');
const fetch = require('node-fetch')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hentai')
		.setDescription('Sends hentai. Only works on NSFW channels.'),
	async execute(interaction) {
	// Fetch Waifu image.
	if(interaction.channel.nsfw === true) {
		// Define APIs.
        const APIs = ['https://waifu.pics/api/nsfw/waifu', 'https://waifu.pics/api/nsfw/neko', 'https://waifu.pics/api/nsfw/trap', 'https://waifu.pics/api/nsfw/blowjob', 'https://nekos.life/api/v2/img/smallboobs', 'https://nekos.life/api/v2/img/lewdkemo', 'https://nekos.life/api/v2/img/gasm', 'https://nekos.life/api/v2/img/cum', 'https://nekos.life/api/v2/img/bj', 'https://nekos.life/api/v2/img/hololewd', 'https://nekos.life/api/v2/img/tits', 'https://nekos.life/api/v2/img/nsfw_neko_gif', 'https://nekos.life/api/v2/img/pussy', 'https://nekos.life/api/v2/img/Random_hentai_gif', 'https://nekos.life/api/v2/img/yuri', 'https://nekos.life/api/v2/img/hentai', 'https://nekos.life/api/v2/img/cum_jpg', 'https://nekos.life/api/v2/img/blowjob', 'https://nekos.life/api/v2/img/boobs', 'https://nekos.life/api/v2/img/trap', 'https://nekos.life/api/v2/img/lewd', 'https://nekos.life/api/v2/img/pussy_jpg', 'https://nekos.life/api/v2/img/anal', 'https://nekos.life/api/v2/img/lewdk']
		// Pick an API.
		const API = APIs[Math.floor(Math.random() * APIs.length)]
		// Fetch from API.
		const { url } = await fetch(API).then(res => res.json());
		
		// #region Embeds
		const embed = new MessageEmbed()
			.setColor(config.embed.colour)
			.setTitle('Here is your hentai!')
			.setURL(url)
			.setImage(url)
			.setFooter(`Fetched from ${API}.`);
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
		} else {
		// #region Embeds
		const notNSFWEmbed = new MessageEmbed()
			.setColor(config.embed.colour)
			.setTitle('You must be in a NSFW channel to run this command, silly!')
			.setURL(`https://media.discordapp.net/attachments/783500514868199454/884994133788332042/Unknown-36.jpeg`)
			.setImage(`https://media.discordapp.net/attachments/783500514868199454/884994133788332042/Unknown-36.jpeg`)
			.setFooter(`Fetched from media.discordapp.net.`);
		// #endregion Embeds
		// #region Buttons
		const notNSFWButton = new MessageActionRow()
			.addComponents(
			new MessageButton()
				.setStyle('LINK')
				.setLabel('Visit source here')
				.setURL(`https://media.discordapp.net/attachments/783500514868199454/884994133788332042/Unknown-36.jpeg`)
		);
	// #endregion Buttons

	// Reply to interaction.
	await interaction.reply({ embeds: [notNSFWEmbed], components: [notNSFWButton] });
		}
	},
};