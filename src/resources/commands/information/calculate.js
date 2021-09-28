// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const math = require('mathjs');
const bot = require('../../misc/configuration/bot.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('calculate')
		.setDescription(`Calculates a simple equation.`)
		.addStringOption(option => option.setName('equation')
			.setDescription('Enter an equation to calulate!')
			.setRequired(true)),
	async execute(interaction) {
		const eq = interaction.options.getString('equation');
		let ans = 0;
		try {
			math.round(math.e, 3);
			math.atan2(3, -3) / math.pi;
			math.log(10000, 10);
			math.sqrt(-4);
			math.derivative('x^2 + x', 'x');
			math.pow([[-1, 2], [3, 1]], 2);

			ans = math.evaluate(eq);

			math.chain(3)
				.add(4)
				.multiply(2)
				.done();

			const embed = new MessageEmbed()
				.setColor(bot.embed.defaultColour)
				.setTitle(`Calculator`)
				.addField('Equation', `${eq}`);

			switch (ans) {
				case 69:
					embed.addField('Answer', `${ans} 😏`);
				case 420:
					embed.addField('Answer', `${ans} 😎`);
				default:
					embed.addField('Answer', ans);
			};

			interaction.reply({ embeds: [embed] });
		} catch {
			interaction.reply({ content: 'This equation is invalid.', ephemeral: true });
		}
	}
}