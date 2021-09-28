

// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');
const socials = require('../../misc/configuration/socials.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('socials')
		.setDescription(`Displays ${socials.name}\'s social links.`),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor(bot.embed.defaultColour)
			.setTitle(`${socials.name}\'s Socials`)
			.setDescription(socials.bio)
			.setThumbnail(socials.picture)
			.addFields(
				{ name: ':clapper: YouTube', value: `https://${socials.links.youtube}` },
				{ name: ':purple_heart: Twitch', value: `https://twitch.tv/${socials.links.twitch}` },
				{ name: ':camera: Instagram', value: `https://${socials.links.instagram}` },
				{ name: ':video_camera: Clips Instagram', value: `https://${socials.links.instagram2}` },
			);

		interaction.reply({ embeds: [embed] });
	}
}