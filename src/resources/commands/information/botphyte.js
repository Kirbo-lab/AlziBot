// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { inspect } = require('util');
const bot = require('../../misc/configuration/bot.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName(bot.application.profile.nameLC)
		.setDescription(`Displays information about ${bot.application.profile.name}.`)
		.addSubcommand(subcommand =>
			subcommand.setName('about')
				.setDescription(`Displays information about the heart and soul of ${bot.application.profile.name}.`))
		.addSubcommand(subcommand =>
			subcommand.setName('ping')
				.setDescription(`Displays latency between ${bot.application.profile.name} and the bot.api.`))
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

			const botphyteEmbed = new MessageEmbed()
				.setColor(bot.embed.defaultColour)
				.setTitle('Hey there! 👋🏼')
				.setDescription(`My name is **${bot.application.profile.name}**, a bot for <@257732224709820426>\'s server, and I\'m a multi-purpose bot, which aims to supercharge your Discord bot.server.`)
				.setThumbnail('')
				.addFields(
					{ name: ':smile: Maintainers', value: 'I\'m built and maintained by <@783272839435255818>, with a little bit of help from the Discord.js bot.server. A big thank you to <@540898474288480256> and <@455422126149599265> for extensively testing the bot.' },
					{ name: ':bug: Reporting bugs and inquiries', value: 'If you are encountering issues or having trouble with this bot, feel free to let me know by filing a bug report over the GitHub. Before making a new bug report however, please search for existing bug reports.' },
					{ name: `:blossom: Contributing to ${bot.application.profile.name}', value: 'If you know how to write code in JavaScript with Discord.js 13, you can contribute to ${bot.application.profile.name} by improving the code, simply create a pull request and propose your changes!` },
				)
				.setFooter(embed.footerText, embed.footerImage)



			const botphyteButtonOne = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setStyle('LINK')
						.setLabel('Read the documentation!')
						.setURL(bot.application.github.wiki)
				)
				.addComponents(
					new MessageButton()
						.setStyle('LINK')
						.setLabel('Join the support Discord server!')
						.setURL(bot.owner.support)
				)

			const botphyteButtonTwo = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setStyle('LINK')
						.setLabel('Report bugs on GitHub!')
						.setURL(bot.application.github.issues)
				)
				.addComponents(
					new MessageButton()
						.setStyle('LINK')
						.setLabel('Star me on GitHub!')
						.setURL(bot.application.github.main)
				)
				.addComponents(
					new MessageButton()
						.setStyle('LINK')
						.setLabel('Support me on Patreon!')
						.setURL(bot.owner.donate)
				);



			await interaction.reply({ embeds: [botphyteEmbed], components: [botphyteButtonOne, botphyteButtonTwo] });
			const message = await interaction.fetchReply();
			message.react('🖤')
		} else if (interaction.options.getSubcommand() === 'ping') {

			const ms = Date.now() - interaction.createdTimestamp

			const latencyEmbed = new MessageEmbed()
				.setTitle('Pong! 🏓')
				.setDescription(`This took **${ms} ms**.`)
				.setFooter(embed.footerText, embed.footerImage)


			if (ms < 250) {
				latencyEmbed.setColor(bot.embed.defaultColour);
			} else if (ms < 500) {
				latencyEmbed.setColor('#00FF51');
			} else if (ms < 750) {
				latencyEmbed.setColor('#FFFF00');
			} else if (ms < 1000) {
				latencyEmbed.setColor('#FF7B00');
			} else {
				latencyEmbed.setColor('#FF2600');
			}


			interaction.reply({ embeds: [latencyEmbed] });
		} else if (interaction.options.getSubcommand() === 'execute') {
			await interaction.deferReply({ ephemeral: true });

			if (interaction.user.id === bot.owner.id) {
				let res;
				try {
					res = eval(interaction.options.getString('code', true));
					res = inspect(res, { depth: 0 });
				} catch (error) {
					res = inspect(error, { depth: 0 });
				}

				const embed = new MessageEmbed()
					.setAuthor(interaction.user.username + '#' + interaction.user.discriminator, interaction.user.avatarURL())
					.setColor(bot.embed.defaultColour)
					.setTitle('Executor')
					.addField('Code Ran', `\`\`\`js\n${interaction.options.getString('code', true)}\`\`\``)
					.addField('NodeJS Results', `\`\`\`js\n${res}\`\`\``)
					.setTimestamp()

				await interaction.editReply({ embeds: [embed] });
			} else {
				interaction.editReply({ content: `You must be \`${bot.owner.tag}\` to run this command!`, ephemeral: true })
			}

		} else if (interaction.options.getSubcommand() === 'kill') {
			if (interaction.user.id === bot.owner.id) {
				interaction.reply({ content: 'Killing the bot process.', ephemeral: true })
				function task(i) {
					setTimeout(function () {
						process.exit()
					}, 5000 * i);
				}
			} else {
				interaction.reply({ content: `You must be \`${bot.owner.tag}\` to run this command!`, ephemeral: true })
			}
		}
	}
}
