
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
const pirate = require('pirate-speak');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pirate')
		.setDescription('Piratifies your message.')
		.addStringOption(option => option.setName('message')
										 .setDescription('Enter a message to translate to Pirate Speak!')
										 .setRequired(true)),
	async execute(interaction) {
		// #region Webhook processing.
		// Create a new webhook.
		const webhook = await interaction.channel.createWebhook(`${interaction.user.username}`, { avatar: `${interaction.user.avatarURL()}` })

		const webhookURL = webhook.url;
		
		// Send a webhook message.
		await fetch(webhookURL, {
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
			body: JSON.stringify({ content: pirate.translate(interaction.options.getString('message')) })
		});

		// Delete the webhook.
		await webhook.delete()
		// #endregion Webhook processing.

		// Reply to interaction.
		await interaction.reply({ content: 'Webhook sent!', ephemeral: true })
	},
};