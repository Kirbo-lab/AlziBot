
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('../config.json');
const owner = require('../misc/json/owner.json');

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
			subcommand.setName('license')
					  .setDescription('Displays the Botphyte license.'))
	  .addSubcommand(subcommand => 
			subcommand.setName('kill')
					  .setDescription('Kills the bot process.')),
    async execute(interaction) {

        if(interaction.options.getSubcommand() === 'about') {
			// #region Embeds
			const botphyteEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('Hey there! 👋🏼')
				.setDescription('My name is **Botphyte**, a bot for <@257732224709820426>\'s server, and I\'m a multi-purpose bot, which aims to supercharge your Discord server.')
				.setThumbnail('https://cdn.discordapp.com/attachments/877589565186113548/882586661454749696/Untitled-1.png')
				.addFields(
					{ name: ':smile: Maintainers', value: 'I\'m built and maintained by <@783272839435255818>, with a little bit of help from the Discord.js server. A big thank you to <@540898474288480256> and <@455422126149599265> for extensively testing the bot.'},
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
							.setLabel('Join the support Discord server!')
							.setURL(owner.support)
					)
					.addComponents(
						new MessageButton()
							.setStyle('LINK')
							.setLabel('See the documentation!')
							.setURL(owner.github.wiki)
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
					)
					.addComponents(
						new MessageButton()
							.setStyle('LINK')
							.setLabel('Report bugs on GitHub!')
							.setURL(owner.github.issues)
					);
			// #endregion Buttons

			// Reply to interaction.
            await interaction.reply({ embeds: [botphyteEmbed], components: [botphyteButton] });
			const message = await interaction.fetchReply();
			message.react('🖤')
		} else if(interaction.options.getSubcommand() === 'ping') {
				// Fetch bot latency.
				const ms = Date.now() - interaction.createdTimestamp

				const latencyEmbed = new MessageEmbed()
					.setTitle('Pong! 🏓')
					.setDescription(`This took **${ms} ms**.`)
					.setFooter(config.embed.footerText, config.embed.footerImage)

				// If the ping is a higher than certain number, use a different colour.
				       if(ms < 250) {
					latencyEmbed.setColor(config.embed.colour);
				} else if(ms < 500) {
					latencyEmbed.setColor('#00FF51');
				} else if(ms < 750) {
					latencyEmbed.setColor('#FFFF00');
				} else if(ms < 1000) {
					latencyEmbed.setColor('#FF7B00');
				} else {
					latencyEmbed.setColor('#FF2600');
				}

				// Reply to interaction.
				interaction.reply({ embeds: [latencyEmbed] });
    	} else if(interaction.options.getSubcommand() === 'license') {
			const licenseEmbed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('GLWTS(Good Luck With That Shit) Public License')
				.setDescription('Copyright © Every-fucking-one, except the Author\n\nEveryone is permitted to copy, distribute, modify, merge, sell, publish, sublicense or whatever the fuck they want with this software but at their OWN RISK.\n\n**Preamble**\nThe author has absolutely no fucking clue what the code in this project does. It might just fucking work or not, there is no third option.\n\n\n**GOOD LUCK WITH THAT SHIT PUBLIC LICENSE**\nTERMS AND CONDITIONS FOR COPYING, DISTRIBUTION, AND MODIFICATION\n\nYou just DO WHATEVER THE FUCK YOU WANT TO as long as you NEVER LEAVE A FUCKING TRACE TO TRACK THE AUTHOR of the original product to blame for or held responsible.\n\nIN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.')
				.setFooter('Good luck and Godspeed.');

			const licenseButton = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setStyle('LINK')
						.setLabel('See the file on the repository!')
						.setURL('https://github.com/WhosPix3l/Botphyte/blob/main/LICENSE')
				)
				.addComponents(
					new MessageButton()
						.setStyle('LINK')
						.setLabel('See the license on SPDX!')
						.setURL('https://spdx.org/licenses/GLWTPL.html')
				)

			// Reply to interaction.
			interaction.reply({ embeds: [licenseEmbed], components: [licenseButton] });

		} else if(interaction.options.getSubcommand() === 'kill') {
			if(interaction.user.id === owner.botOwner) {
				interaction.reply({ content: 'Killing the bot process.', ephemeral: true })
				function task(i) {
					setTimeout(function() {
						process.exit()
					}, 5000 * i);
				  }
			} else {
				interaction.reply({ content: `You must be \`${owner.botOwnerTag}\` to run this command!`, ephemeral: true })
			}
		}
    }
}
