
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { inspect } = require('util');
const config = require('../../config.json');
const owner = require('../../misc/json/owner.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('botphyte')
		.setDescription('Displays information about Botphyte.')
		.addSubcommand(subcommand =>
			subcommand.setName('about')
				.setDescription('Displays information about the heart and soul of Botphyte.'))
		.addSubcommand(subcommand =>
			subcommand.setName('ping')
				.setDescription('Displays latency between Botphyte and the API.'))
		.addSubcommand(subcommand =>
			subcommand.setName('execute')
				.setDescription('Executes the given code.')
				.addStringOption(option => option.setName('code')
					.setDescription('Enter code to execute!')
					.setRequired(true)))
		.addSubcommand(subcommand =>
			subcommand.setName('kill')
				.setDescription('Kills the bot process.')),
	async execute(interaction) {

		if (interaction.options.getSubcommand() === 'about') {
			// #region Embeds
			const botphyteEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Hey there! 👋🏼')
				.setDescription('My name is **Botphyte**, a bot for <@257732224709820426>\'s server, and I\'m a multi-purpose bot, which aims to supercharge your Discord server.')
				.setThumbnail('https://cdn.discordapp.com/attachments/877589565186113548/882586661454749696/Untitled-1.png')
				.addFields(
					{ name: ':smile: Maintainers', value: 'I\'m built and maintained by <@783272839435255818>, with a little bit of help from the Discord.js server. A big thank you to <@540898474288480256> and <@455422126149599265> for extensively testing the bot.' },
					{ name: ':bug: Reporting bugs and inquiries', value: 'If you are encountering issues or having trouble with this bot, feel free to let me know by filing a bug report over the GitHub. Before making a new bug report however, please search for existing bug reports.' },
					{ name: ':blossom: Contributing to Botphyte', value: 'If you know how to write code in JavaScript with Discord.js 13, you can contribute to Botphyte by improving the code, simply create a pull request and propose your changes!' },
				)
				.setFooter(config.embed.footerText, config.embed.footerImage)
			// #endregion Embeds

			// #region Buttons
			const botphyteButtonOne = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setStyle('LINK')
						.setLabel('Read the documentation!')
						.setURL(owner.github.wiki)
				)
				.addComponents(
					new MessageButton()
						.setStyle('LINK')
						.setLabel('Join the support Discord server!')
						.setURL(owner.support)
				)

			const botphyteButtonTwo = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setStyle('LINK')
						.setLabel('Report bugs on GitHub!')
						.setURL(owner.github.issues)
				)
				.addComponents(
					new MessageButton()
						.setStyle('LINK')
						.setLabel('Star me on GitHub!')
						.setURL(owner.github.main)
				)
				.addComponents(
					new MessageButton()
						.setStyle('LINK')
						.setLabel('Support me on Patreon!')
						.setURL(owner.donate)
				);
			// #endregion Buttons

			// Reply to interaction.
			await interaction.reply({ embeds: [botphyteEmbed], components: [botphyteButtonOne, botphyteButtonTwo] });
			const message = await interaction.fetchReply();
			message.react('🖤')
		} else if (interaction.options.getSubcommand() === 'ping') {
			// Fetch bot latency.
			const ms = Date.now() - interaction.createdTimestamp

			const latencyEmbed = new MessageEmbed()
				.setTitle('Pong! 🏓')
				.setDescription(`This took **${ms} ms**.`)
				.setFooter(config.embed.footerText, config.embed.footerImage)

			// If the ping is a higher than certain number, use a different colour.
			if (ms < 250) {
				latencyEmbed.setColor(config.embed.colour);
			} else if (ms < 500) {
				latencyEmbed.setColor('#00FF51');
			} else if (ms < 750) {
				latencyEmbed.setColor('#FFFF00');
			} else if (ms < 1000) {
				latencyEmbed.setColor('#FF7B00');
			} else {
				latencyEmbed.setColor('#FF2600');
			}

			// Reply to interaction.
			interaction.reply({ embeds: [latencyEmbed] });
		} else if (interaction.options.getSubcommand() === 'execute') {
			await interaction.deferReply({ ephemeral: true });

			if (interaction.user.id === owner.botOwner) {
				let res;
				try {
					res = eval(interaction.options.getString('code', true));
					res = inspect(res, { depth: 0 });
				} catch (error) {
					res = inspect(error, { depth: 0 });
				}
	
				const embed = new MessageEmbed()
					.setAuthor(interaction.user.username + '#' + interaction.user.discriminator, interaction.user.avatarURL())
					.setColor(config.embed.colour)
					.setTitle('Executor')
					.addField('Code Ran', `\`\`\`js\n${interaction.options.getString('code', true)}\`\`\``)
					.addField('NodeJS Results', `\`\`\`js\n${res}\`\`\``)
					.setTimestamp()
	
				await interaction.editReply({ embeds: [embed] });
			} else {
				interaction.editReply({ content: `You must be \`${owner.botOwnerTag}\` to run this command!`, ephemeral: true })
			}

		} else if (interaction.options.getSubcommand() === 'kill') {
			if (interaction.user.id === owner.botOwner) {
				interaction.reply({ content: 'Killing the bot process.', ephemeral: true })
				function task(i) {
					setTimeout(function () {
						process.exit()
					}, 5000 * i);
				}
			} else {
				interaction.reply({ content: `You must be \`${owner.botOwnerTag}\` to run this command!`, ephemeral: true })
			}
		}
	}
}
