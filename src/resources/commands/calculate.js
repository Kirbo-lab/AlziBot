
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const math = require('mathjs');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('calculate')
        .setDescription(`Calculates a simple equation.`)
		.addStringOption(option => option.setName('equation')
										 .setDescription('Enter an equation')
										 .setRequired(true)),
    async execute(interaction) {

		// Calculate equation.
		const eq = interaction.options.getString('equation')
		let ans = 0;
		try {
			ans = math.evaluate(eq);
		} catch {
			await interaction.reply({ content: 'This equation is invalid.', ephemeral: true})
		}

		// #region Embeds
		const embed = new MessageEmbed()
			.setColor(config.embed.colour)
			.setTitle(`Calculator`)
			.addField('Equation', `${eq}`)
		// #endregion Embeds

		// If the answer is a certain number, use a different emoji.
		if(ans === 69) {
			embed.addField('Answer', `${ans} 😏`)
		} else if(ans === 420) {
			embed.addField('Answer', `${ans} 😎`)
		} else {
			embed.addField('Answer', `${ans}`)
		}

		// Reply to interaction.
		interaction.reply({ embeds: [embed] })
    }
}