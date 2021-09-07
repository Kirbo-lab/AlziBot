
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('guild')
        .setDescription('Displays information about this guild.'),
    async execute(interaction) {
		// Get member amount.
		await interaction.guild.members.fetch();

		// #region Embeds
		const embed = new MessageEmbed()
	        .setColor(config.embed.colour)
			.setTitle(interaction.guild.name)
			.setURL(config.server.invite)
			.setThumbnail(interaction.guild.iconURL({ dynamic: true }))
			.addFields(
				{ name: ':crown: Owner', value: `<@${interaction.guild.ownerId}>`},
				{ name: ':calendar_spiral: Creation Date', value: `${interaction.guild.createdAt}`},
				{ name: ':clipboard: Guild ID', value: `${interaction.guild.id}`},
				{ name: ':busts_in_silhouette: User Count', value: `${interaction.guild.members.cache.filter(m => !m.user.bot).size} members | ${interaction.guild.members.cache.filter(m => m.user.bot).size} bots`, inline: true},
				{ name: ':gem: Boosters', value: `${interaction.guild.premiumSubscriptionCount || 0} boosts`, inline: true},
				{ name: ':speech_left: Channels', value: `${interaction.guild.channels.cache.filter(c => c.type === "GUILD_CATEGORY").size} categories | ${interaction.guild.channels.cache.filter(c => c.type === "GUILD_TEXT").size} text | ${interaction.guild.channels.cache.filter(c => c.type === "GUILD_VOICE").size} voice`, inline: true}
			)
		// #endregion Embeds

		// Reply to interaction.
		await interaction.reply({ embeds: [embed] })
	}
}