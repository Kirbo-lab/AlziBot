// Made with <3 by Pix3l_.

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
		const webhook = await interaction.channel.createWebhook(`${interaction.user.username}`, { avatar: `${interaction.user.avatarURL()}` });
		const webhookURL = webhook.url;

		await fetch(webhookURL, {
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
			body: JSON.stringify({ content: pirate.translate(interaction.options.getString('message')) })
		});

		await webhook.delete();

		await interaction.reply({ content: 'Webhook sent!', ephemeral: true });
	},
};