
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('botphyte')
        .setDescription('Displays information about Botphyte.')
        .addSubcommand(subcommand => 
			subcommand.setName('about')
					  .setDescription('Displays information about the heart and soul of Botphyte.'))
		.addSubcommand(subcommand => 
			subcommand.setName('ping')
					  .setDescription('Displays latency between Botphyte and the API.')),
    async execute(interaction) {

        if(interaction.options.getSubcommand() === 'about') {
			// #region Embeds
			const botphyteEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Hey there! 👋🏼')
				.setDescription('My name is **Botphyte**, a bot for <@257732224709820426>\'s server, and I\'m a multi-purpose bot, which aims to supercharge your Discord server.')
				.setThumbnail('https://cdn.discordapp.com/attachments/877589565186113548/882586661454749696/Untitled-1.png')
				.addFields(
					{ name: ':smile: Maintainers', value: 'I\'m built and maintained by <@783272839435255818>, with a little bit of help from the Discord.js server. Credits to <@540898474288480256>, <@455422126149599265>, <@371291057348018177>, and <@366252037694029834> for helping me test Botphyte.'},
					{ name: ':bug: Reporting bugs and inquiries', value: 'If you are encountering issues or having trouble with this bot, feel free to let me know by filing a bug report over the GitHub. Before making a new bug report however, please search for existing bug reports.'},
					{ name: ':blossom: Contributing to Botphyte', value: 'If you know how to write code in JavaScript with Discord.js 13, you can contribute to Botphyte by improving the code, simply create a pull request and propose your changes!'},
				)
			.setFooter(config.embed.footerText, config.embed.footerImage)
			// #endregion Embeds
			
			// #region Buttons
				const botphyteButton = new MessageActionRow()
					.addComponents(
						new MessageButton()
							.setStyle('LINK')
							.setLabel('Star me on GitHub!')
							.setURL(config.links.github.main)
					)
					.addComponents(
						new MessageButton()
							.setStyle('LINK')
							.setLabel('Support me on Patreon!')
							.setURL(config.links.donate)
					)
					.addComponents(
						new MessageButton()
							.setStyle('LINK')
							.setLabel('Report bugs on GitHub!')
							.setURL(config.links.github.issues)
					);
			// #endregion Buttons

			// Reply to interaction.
            await interaction.reply({ embeds: [botphyteEmbed], components: [botphyteButton] });
		} else if(interaction.options.getSubcommand() === 'ping') {
				// Fetch bot latency.
				const ms = Date.now() - interaction.createdTimestamp

				const latencyEmbed = new MessageEmbed()
					.setTitle('Pong! 🏓')
					.setDescription(`This took **${ms} ms**.`)

				// If the ping is a higher than certain number, use a different colour.
				if(ms > 250) {
					latencyEmbed.setColor('#00FF51');
				} else if(ms > 500) {
					latencyEmbed.setColor('#FFFF00');
				} else if(ms > 750) {
					latencyEmbed.setColor('#FF7B00');
				} else if(ms > 1000) {
					latencyEmbed.setColor('#FF2600');
				} else {
					latencyEmbed.setColor(config.embed.colour);
				}

				// Reply to interaction.
				interaction.reply({ embeds: [latencyEmbed] });
    	}
    }
}
