
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setDescription('Sends a rule.')
		.addNumberOption(option => option.setName('number').setDescription('Enter a rule number from 1 to 8!').setRequired(true)),
	async execute(interaction) {
		const ruleNum = interaction.options.getNumber('number');

		const button = new MessageActionRow()
			.addComponents(
			new MessageButton()
				.setStyle('LINK')
				.setLabel('Jump to rules channel')
				.setURL('https://discord.com/channels/747412985936478358/747663571902791711/859440703834161162')
		);

		if(ruleNum === 1) {
			const ruleOneEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Rule One')
				.setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/speaking-head_1f5e3-fe0f.png')
				.setDescription(config.server.rules.ruleOne)

			interaction.reply({ embeds: [ruleOneEmbed], components: [button] })
		} else if(ruleNum === 2) {
			const ruleTwoEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Rule Two')
				.setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/face-with-symbols-on-mouth_1f92c.png')
				.setDescription(config.server.rules.ruleTwo)

			interaction.reply({ embeds: [ruleTwoEmbed], components: [button] })
		} else if(ruleNum === 3) {
			const ruleThreeEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Rule Three')
				.setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/face-with-hand-over-mouth_1f92d.png')
				.setDescription(config.server.rules.ruleThree)

			interaction.reply({ embeds: [ruleThreeEmbed], components: [button] })
		} else if(ruleNum === 4) {
			const ruleFourEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Rule Four')
				.setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/anger-symbol_1f4a2.png')
				.setDescription(config.server.rules.ruleFour)

			interaction.reply({ embeds: [ruleFourEmbed], components: [button] })
		} else if(ruleNum === 5) {
			const ruleFiveEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Rule Five')
				.setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/right-anger-bubble_1f5ef-fe0f.png')
				.setDescription(config.server.rules.ruleFive)

			interaction.reply({ embeds: [ruleFiveEmbed], components: [button] })
		} else if(ruleNum === 6) {
			const ruleSixEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Rule Six')
				.setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/loudspeaker_1f4e2.png')
				.setDescription(config.server.rules.ruleSix)

			interaction.reply({ embeds: [ruleSixEmbed], components: [button] })
		} else if(ruleNum === 7) {
			const ruleSevenEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Rule Seven')
				.setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/man-tipping-hand-medium-light-skin-tone_1f481-1f3fc-200d-2642-fe0f.png')
				.setDescription(config.server.rules.ruleSeven)

			interaction.reply({ embeds: [ruleSevenEmbed], components: [button] })
		} else if(ruleNum === 8) {
			const ruleEightEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Rule Eight')
				.setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/film-frames_1f39e-fe0f.png')
				.setDescription(config.server.rules.ruleEight)

			interaction.reply({ embeds: [ruleEightEmbed], components: [button] })
		} else {
			interaction.reply({ content: 'You must pick a number from 1 to 8!', ephemeral: true})
		}
	}
}