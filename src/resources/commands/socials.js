
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('socials')
        .setDescription(`Displays ${config.socials.name}\'s social links.`),
    async execute(interaction) {
		// #region Embeds
        const embed = new MessageEmbed()
	        .setColor(config.embed.colour)
			.setTitle(`${config.socials.name}\'s Socials`)
			.setDescription(config.socials.bio)
			.setThumbnail(config.socials.picture)
			.addFields(
				{ name: ':e_mail: Email', value: config.socials.links.email},
				{ name: ':clapper: YouTube', value: `https://${config.socials.links.youtube}`},
				{ name: ':purple_heart: Twitch', value: `https://${config.socials.links.twitch}`},
				{ name: ':camera: Instagram', value: `https://${config.socials.links.instagram}`},
				{ name: ':video_camera: Clips Instagram', value: `https://${config.socials.links.instagram2}`},
			)
		// #endregion Embeds

		// Reply to interaction.
		interaction.reply({ embeds: [embed] });
    }
}