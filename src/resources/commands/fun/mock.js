// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
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
		if (interaction.options.getUser('user') === interaction.user) {
			await interaction.reply({ content: 'You can\'t mock yourself!', ephemeral: true });
		} else if (interaction.options.getUser('user')?.bot === true) {
			await interaction.reply({ content: 'You can\'t mock bots!', ephemeral: true });
		} else {
			await interaction.guild.members.fetch().catch(() => { });
			const webhook = await interaction.channel.createWebhook(`${interaction.options.getMember('user')?.displayName}`, { avatar: `${interaction.options.getUser('user')?.avatarURL()}` });

			await fetch(webhook.url, {
				headers: { 'Content-Type': 'application/json' },
				method: 'POST',
				body: JSON.stringify({ content: (interaction.options.getString('message')) })
			});

			await webhook.delete();

			await interaction.reply({ content: 'Webhook sent!', ephemeral: true });
		}
	}
}