
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('../config.json');
const rules = require('../json/server.json');

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

		if(num === 1) {
			const ruleOneEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Rule One')
				.setThumbnail(server.rules.emoji.emojiOne)
				.setDescription(server.rules.rules.ruleOne)

			interaction.reply({ embeds: [ruleOneEmbed], components: [button] })
		} else if(num === 2) {
			const ruleTwoEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Rule Two')
				.setThumbnail(server.rules.emoji.emojiTwo)
				.setDescription(server.rules.rules.ruleTwo)

			interaction.reply({ embeds: [ruleTwoEmbed], components: [button] })
		} else if(num === 3) {
			const ruleThreeEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Rule Three')
				.setThumbnail(server.rules.emoji.emojiThree)
				.setDescription(server.rules.rules.ruleThree)

			interaction.reply({ embeds: [ruleThreeEmbed], components: [button] })
		} else if(num === 4) {
			const ruleFourEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Rule Four')
				.setThumbnail(server.rules.emoji.emojiFour)
				.setDescription(server.rules.rules.ruleFour)

			interaction.reply({ embeds: [ruleFourEmbed], components: [button] })
		} else if(num === 5) {
			const ruleFiveEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Rule Five')
				.setThumbnail(server.rules.emoji.emojiFive)
				.setDescription(server.rules.rules.ruleFive)

			interaction.reply({ embeds: [ruleFiveEmbed], components: [button] })
		} else if(num === 6) {
			const ruleSixEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Rule Six')
				.setThumbnail(server.rules.emoji.emojiSix)
				.setDescription(server.rules.rules.ruleSix)

			interaction.reply({ embeds: [ruleSixEmbed], components: [button] })
		} else if(num === 7) {
			const ruleSevenEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Rule Seven')
				.setThumbnail(server.rules.emoji.emojiSeven)
				.setDescription(server.rules.rules.ruleSeven)

			interaction.reply({ embeds: [ruleSevenEmbed], components: [button] })
		} else if(num === 8) {
			const ruleEightEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Rule Eight')
				.setThumbnail(server.rules.emoji.emojiEight)
				.setDescription(server.rules.rules.ruleEight)

			interaction.reply({ embeds: [ruleEightEmbed], components: [button] })
		} else {
			interaction.reply({ content: 'You must enter a number from 1 to 8!', ephemeral: true})
		}
	}
}