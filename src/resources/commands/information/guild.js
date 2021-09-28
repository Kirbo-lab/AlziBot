// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');
const guild = require('../../misc/configuration/guild.js');
const { DateTime } = require('luxon');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('guild')
		.setDescription('Displays information about this guild.'),
	async execute(interaction) {
		await interaction.guild.members.fetch();
		await interaction.guild.bans.fetch();

		const embed = new MessageEmbed()
			.setColor(bot.embed.defaultColour)
			.setTitle(interaction.guild.name)
			.setURL(guild.invite)
			.setThumbnail(interaction.guild.iconURL({ dynamic: true }))
			.addFields(
				{ name: 'Owner', value: `<@${interaction.guild.ownerId}>` },
				{ name: 'Guild ID', value: `${interaction.guild.id}` },
				{ name: 'Creation Time', value: DateTime.fromMillis(interaction.guild.createdTimestamp).setZone('Australia/Sydney').toLocaleString(DateTime.DATE_FULL) + ' at ' + DateTime.fromMillis(interaction.guild.createdTimestamp).setZone('Australia/Sydney').toLocaleString(DateTime.TIME_24_WITH_LONG_OFFSET) },
				{ name: 'User Count', value: `${interaction.guild.members.cache.filter(m => !m.user.bot).size} members | ${interaction.guild.members.cache.filter(m => m.user.bot).size} bots`, inline: true },
				{ name: 'Booster Count', value: `${interaction.guild.premiumSubscriptionCount || 0} boosts`, inline: true },
				{ name: 'Ban Count', value: `${interaction.guild.bans.cache.size} users`, inline: true },
				{ name: 'Categories', value: `${interaction.guild.channels.cache.filter(c => c.type === "GUILD_CATEGORY").size} categories`, inline: true },
				{ name: 'Text Channels', value: `${interaction.guild.channels.cache.filter(c => c.type === "GUILD_TEXT").size} channels voice`, inline: true },
				{ name: 'Voice Channels', value: `${interaction.guild.channels.cache.filter(c => c.type === "GUILD_VOICE").size} channels`, inline: true },
				{ name: 'Emoji Count', value: `${interaction.guild.emojis.cache.size} emojis`, inline: true },
			);

		await interaction.reply({ embeds: [embed] });
	}
}