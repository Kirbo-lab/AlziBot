
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('voting')
		.setDescription('Starts a voting poll.')
		.addStringOption(option => option.setName('title')
			.setDescription('Enter a title.')
			.setRequired(true))
		.addStringOption(option => option.setName('topic')
										 .setDescription('Enter a topic.')
										 .setRequired(true))
		.addStringOption(option => option.setName('colour')
										 .setDescription('Enter a hex code or a colour, such as \'RED\' or \'RANDOM\'.')
										 .setRequired(true)),
	async execute(interaction) {
		const colour = interaction.options.getString('colour')
		// #region Embeds
		const embed = new MessageEmbed()
			.setAuthor(`${interaction.user.tag}`, `${interaction.user.avatarURL()}`)
			.setThumbnail(interaction.user.avatarURL())
			.setColor(`${colour.toUpperCase()}`)
			.setTitle(interaction.options.getString('title'))
			.setDescription(interaction.options.getString('topic'));
		// #endregion Embeds

		// Start the poll.
		interaction.channel.send({ embeds: [embed] }).then(async message => {
			await message.react('👍');
			await message.react('👎');
		});

		// Reply to interaction.
		interaction.reply({ content: 'Voting started!', ephemeral: true });
	},
};