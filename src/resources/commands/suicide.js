
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suicide')
        .setDescription(`Displays information about suicide and self-harm prevention.`),
    async execute(interaction) {
		// #region Embeds
		const embed = new MessageEmbed()
			.setColor('#f44336')
			.setTitle('We want you to know that you\'re not alone. ❤️')
			.setThumbnail('https://c.tenor.com/61VQgioK5q4AAAAC/happy-heart-love.gif')
			.setDescription(`If you are contemplating suicide, please reach out. You can find help at a National Suicide Prevention Lifeline.`)
			.addFields(
				{ name: '🇺🇸 U.S.A. Suicide Hotline:', value: '+1-800-273-8255', inline: true },
				{ name: '🇬🇧 U.K. Suicide Hotline:', value: '116-123', inline: true },
				{ name: '🏳️‍⚧️ Transgender Lifeline:', value: '(877) 565-8860', inline: true },
				{ name: '☎️ Other Hotlines:', value: `[International Suicide Hotlines](https://www.opencounseling.com/suicide-hotlines)\nThese hotlines are made available to those that do not reside in the US or UK. Look up the number on the list that belongs to your country and call it. It will connect you to your country\'s suicide hotline.`, inline: false },
			)
		// #endregion Embeds

		// Reply to interaction.
		interaction.reply({ embeds: [embed], ephemeral: true })
    }
}