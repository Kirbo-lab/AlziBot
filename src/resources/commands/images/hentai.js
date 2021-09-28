// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');
const fetch = require('node-fetch');
const date = new Date();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hentai')
		.setDescription('Sends hentai. (Only works on NSFW channels)'),
	async execute(interaction) {
		if (interaction.channel.nsfw === true) {
			const API = bot.api.hentai[Math.floor(Math.random() * bot.api.hentai.length)];
			const { url } = await fetch(API).then(res => res.json());

			const embed = new MessageEmbed()
				.setColor(bot.embed.defaultColour)
				.setTitle('Here is your hentai!')
				.setURL(url)
				.setImage(url)
				.setFooter(`Fetched from ${img}`);

			const button = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setStyle('LINK')
						.setLabel('Visit source here')
						.setURL(url)
				);

			switch (date.getMonth()) {
				case 8:
					embed.setDescription('Be careful, it\'s **No Simp September**!');
					break;
				case 11:
					embed.setDescription('Be careful, it\'s **No Nut November**!');
					break;
				default:
					break;
			}
		} else {
			await interaction.reply({ content: 'You must be in a NSFW channel to run this command!', ephemeral: true });
		}
	}
}