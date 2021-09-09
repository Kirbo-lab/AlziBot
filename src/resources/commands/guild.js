
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
				{ name: 'Owner', value: `<@${interaction.guild.ownerId}>`},
				{ name: 'Creation Date', value: `${interaction.guild.createdAt}`},
				{ name: 'Guild ID', value: `${interaction.guild.id}`},
				{ name: 'User Count', value: `${interaction.guild.members.cache.filter(m => !m.user.bot).size} members | ${interaction.guild.members.cache.filter(m => m.user.bot).size} bots`, inline: true},
				{ name: 'Boosters', value: `${interaction.guild.premiumSubscriptionCount || 0} boosts`, inline: true},
				{ name: 'Channels', value: `${interaction.guild.channels.cache.filter(c => c.type === "GUILD_CATEGORY").size} categories | ${interaction.guild.channels.cache.filter(c => c.type === "GUILD_TEXT").size} text | ${interaction.guild.channels.cache.filter(c => c.type === "GUILD_VOICE").size} voice`, inline: true}
			)
		// #endregion Embeds

		// Reply to interaction.
		await interaction.reply({ embeds: [embed] })
	}
}