// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');
const fetch = require('node-fetch');
const date = new Date();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('neko')
		.setDescription('Sends an image of a neko/catgirl. If channel is NSFW, I will send a lewd image.'),
	async execute(interaction) {
		let img;
		switch (interaction.channel.nsfw) {
			case true:
				img = bot.api.neko.lewd;
			default:
				img = bot.api.neko.sfw;
		};
		const { url } = await fetch(img).then(res => res.json());

		const embed = new MessageEmbed()
			.setColor(bot.embed.defaultColour)
			.setTitle('Here is your neko!')
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

		await interaction.reply({ embeds: [embed], components: [button] });
	}
}