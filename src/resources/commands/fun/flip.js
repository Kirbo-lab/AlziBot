// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
const flip = require('flip-text');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('flip')
		.setDescription(`Flips your message upside down.`)
		.addStringOption(option => option.setName('message')
			.setDescription('Enter a message to flip!')
			.setRequired(true)),
	async execute(interaction) {
		const webhook = await interaction.channel.createWebhook(`${interaction.member.displayName}`, { avatar: `${interaction.user.avatarURL()}` });

		await fetch(webhook.url, {
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
			body: JSON.stringify({ content: flip(interaction.options.getString('message')) })
		});

		await webhook.delete();

		await interaction.reply({ content: 'Webhook sent!', ephemeral: true });
	}
}