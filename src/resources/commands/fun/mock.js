
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('../../config.json');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mock')
		.setDescription('Sends a message as another user.')
		.addUserOption(option => option.setName('user').setDescription('Enter a user to mock!').setRequired(true))
		.addStringOption(option => option.setName('message')
										 .setDescription('Enter a message to send!')
										 .setRequired(true)),
	async execute(interaction) {
		if(interaction.options.getUser('user') === interaction.user) {
			// Reply to interaction.
			await interaction.reply({ content: 'You can\'t mock yourself!', ephemeral: true })
		} else if(interaction.options.getUser('user')?.bot === true) {
			await interaction.reply({ content: 'You can\'t mock bots!', ephemeral: true })
		} else {
			const webhook = await interaction.channel.createWebhook(`${interaction.options.getUser('user')?.username}`, { avatar: `${interaction.options.getUser('user')?.avatarURL()}` })

			const webhookURL = webhook.url;
			
			// Send a webhook message.
			await fetch(webhookURL, {
				headers: { 'Content-Type': 'application/json' },
				method: 'POST',
				body: JSON.stringify({ content: (interaction.options.getString('message')) })
			});

			// Delete the webhook.
			await webhook.delete()
			// #endregion Webhook processing.

			// Reply to interaction.
			await interaction.reply({ content: 'Webhook sent!', ephemeral: true })
		}
	}
}