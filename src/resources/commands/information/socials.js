
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../../config.json');
const socials = require('../../misc/json/socials.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('socials')
        .setDescription(`Displays ${socials.name}\'s social links.`),
    async execute(interaction) {
		// #region Embeds
        const embed = new MessageEmbed()
	        .setColor(config.embed.colour)
			.setTitle(`${socials.name}\'s Socials`)
			.setDescription(socials.bio)
			.setThumbnail(socials.picture)
			.addFields(
				{ name: ':clapper: YouTube', value: `https://${socials.links.youtube}`},
				{ name: ':purple_heart: Twitch', value: `https://twitch.tv/${socials.links.twitch}`},
				{ name: ':camera: Instagram', value: `https://${socials.links.instagram}`},
				{ name: ':video_camera: Clips Instagram', value: `https://${socials.links.instagram2}`},
			)
		// #endregion Embeds

		// Reply to interaction.
		interaction.reply({ embeds: [embed] });
    }
}