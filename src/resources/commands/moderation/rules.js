

// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');
const guild = require('../../misc/configuration/guild.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setDescription('Sends a rule.')
		.addNumberOption(option => option.setName('number').setDescription('Enter a rule number from 1 to 8!').setRequired(true)),
	async execute(interaction) {
		const num = interaction.options.getNumber('number');

		const button = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setStyle('LINK')
					.setLabel('Jump to rules channel')
					.setURL('https://discord.com/channels/747412985936478358/747663571902791711/859440703834161162')
			);

		if (num === 1) {
			const ruleOneEmbed = new MessageEmbed()
				.setColor(bot.embed.defaultColour)
				.setTitle('Rule One')
				.setThumbnail(guild.rule.emojis.emojiOne)
				.setDescription(guild.rule.rules.ruleOne)

			interaction.reply({ embeds: [ruleOneEmbed], components: [button] })
		} else if (num === 2) {
			const ruleTwoEmbed = new MessageEmbed()
				.setColor(bot.embed.defaultColour)
				.setTitle('Rule Two')
				.setThumbnail(guild.rule.emojis.emojiTwo)
				.setDescription(guild.rule.rules.ruleTwo)

			interaction.reply({ embeds: [ruleTwoEmbed], components: [button] })
		} else if (num === 3) {
			const ruleThreeEmbed = new MessageEmbed()
				.setColor(bot.embed.defaultColour)
				.setTitle('Rule Three')
				.setThumbnail(guild.rule.emojis.emojiThree)
				.setDescription(guild.rule.rules.ruleThree)

			interaction.reply({ embeds: [ruleThreeEmbed], components: [button] })
		} else if (num === 4) {
			const ruleFourEmbed = new MessageEmbed()
				.setColor(bot.embed.defaultColour)
				.setTitle('Rule Four')
				.setThumbnail(guild.rule.emojis.emojiFour)
				.setDescription(guild.rule.rules.ruleFour)

			interaction.reply({ embeds: [ruleFourEmbed], components: [button] })
		} else if (num === 5) {
			const ruleFiveEmbed = new MessageEmbed()
				.setColor(bot.embed.defaultColour)
				.setTitle('Rule Five')
				.setThumbnail(guild.rule.emojis.emojiFive)
				.setDescription(guild.rule.rules.ruleFive)

			interaction.reply({ embeds: [ruleFiveEmbed], components: [button] })
		} else if (num === 6) {
			const ruleSixEmbed = new MessageEmbed()
				.setColor(bot.embed.defaultColour)
				.setTitle('Rule Six')
				.setThumbnail(guild.rule.emojis.emojiSix)
				.setDescription(guild.rule.rules.ruleSix)

			interaction.reply({ embeds: [ruleSixEmbed], components: [button] })
		} else if (num === 7) {
			const ruleSevenEmbed = new MessageEmbed()
				.setColor(bot.embed.defaultColour)
				.setTitle('Rule Seven')
				.setThumbnail(guild.rule.emojis.emojiSeven)
				.setDescription(guild.rule.rules.ruleSeven)

			interaction.reply({ embeds: [ruleSevenEmbed], components: [button] })
		} else if (num === 8) {
			const ruleEightEmbed = new MessageEmbed()
				.setColor(bot.embed.defaultColour)
				.setTitle('Rule Eight')
				.setThumbnail(guild.rule.emojis.emojiEight)
				.setDescription(guild.rule.rules.ruleEight)

			interaction.reply({ embeds: [ruleEightEmbed], components: [button] })
		} else {
			interaction.reply({ content: 'You must enter a number from 1 to 8!', ephemeral: true })
		}
	}
}