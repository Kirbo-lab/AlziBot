
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('upsidedown')
        .setDescription(`Flips your message upside down.`)
		.addStringOption(option => option.setName('message')
										 .setDescription('Enter a message to flip!')
										 .setRequired(true)),
    async execute(interaction) {
		// #region Functions for text processing.
		function flip (str) {
			return str
			  .replace(/a/g, 'ɐ')
			  .replace(/b/g, 'q')
			  .replace(/c/g, 'ɔ')
			  .replace(/d/g, 'p')
			  .replace(/e/g, 'ǝ')
			  .replace(/f/g, 'ɟ')
			  .replace(/g/g, 'ƃ')
			  .replace(/h/g, 'ɥ')
			  .replace(/i/g, 'ᴉ')
			  .replace(/j/g, 'ɾ')
			  .replace(/k/g, 'ʞ')
			  .replace(/l/g, 'l')
			  .replace(/m/g, 'ɯ')
			  .replace(/n/g, 'u')
			  .replace(/p/g, 'd')
			  .replace(/q/g, 'b')
			  .replace(/r/g, 'ɹ')
			  .replace(/t/g, 'ʇ')
			  .replace(/u/g, 'n')
			  .replace(/v/g, 'ʌ')
			  .replace(/w/g, 'ʍ')
			  .replace(/y/g, 'ʎ')

			  .replace(/A/g, '∀')
			  .replace(/B/g, 'q')
			  .replace(/C/g, 'Ɔ')
			  .replace(/D/g, 'p')
			  .replace(/E/g, 'Ǝ')
			  .replace(/F/g, 'Ⅎ')
			  .replace(/G/g, 'פ')
			  .replace(/J/g, 'ſ')
			  .replace(/K/g, 'ʞ')
			  .replace(/L/g, '˥')
			  .replace(/M/g, 'W')
			  .replace(/N/g, 'N')
			  .replace(/P/g, 'Ԁ')
			  .replace(/R/g, 'ɹ')
			  .replace(/T/g, '┴')
			  .replace(/U/g, '∩')
			  .replace(/V/g, 'Λ')
			  .replace(/W/g, 'M')
			  .replace(/Y/g, '⅄')

			  .replace(/1/g, 'Ɩ')
			  .replace(/2/g, 'ᄅ')
			  .replace(/3/g, 'Ɛ')
			  .replace(/4/g, 'ㄣ')
			  .replace(/5/g, 'ϛ')
			  .replace(/6/g, '9')
			  .replace(/7/g, 'ㄥ')
			  .replace(/9/g, '6')

			  .replace(/`/g, ',')
			  .replace(/!/g, '¡')
			  .replace(/\^/g, 'v')
			  .replace(/&/g, '⅋')
			  .replace(/_/g, '‾')
			  .replace(/"/g, ',,')
			  .replace(/'/g, ',')
			  .replace(/\?/g, '¿')
			  .replace(/,/g, '\'')
			  .replace(/\./g, '˙')

			  .replace(/ɐ/g, 'a')
              .replace(/q/g, 'b')
              .replace(/ɔ/g, 'c')
              .replace(/p/g, 'd')
              .replace(/ǝ/g, 'e')
              .replace(/ɟ/g, 'f')
              .replace(/ƃ/g, 'g')
              .replace(/ɥ/g, 'h')
              .replace(/ᴉ/g, 'i')
              .replace(/ɾ/g, 'j')
              .replace(/ʞ/g, 'k')
              .replace(/l/g, 'l')
              .replace(/ɯ/g, 'm')
              .replace(/u/g, 'n')
              .replace(/d/g, 'p')
              .replace(/b/g, 'q')
              .replace(/ɹ/g, 'r')
              .replace(/ʇ/g, 't')
              .replace(/n/g, 'u')
              .replace(/ʌ/g, 'v')
              .replace(/ʍ/g, 'w')
              .replace(/ʎ/g, 'y')

              .replace(/∀/g, 'A')
              .replace(/q/g, 'B')
              .replace(/Ɔ/g, 'C')
              .replace(/p/g, 'D')
              .replace(/Ǝ/g, 'E')
              .replace(/Ⅎ/g, 'F')
              .replace(/פ/g, 'G')
              .replace(/ſ/g, 'J')
              .replace(/ʞ/g, 'K')
              .replace(/˥/g, 'L')
              .replace(/W/g, 'M')
              .replace(/N/g, 'N')
              .replace(/Ԁ/g, 'P')
              .replace(/ɹ/g, 'R')
              .replace(/┴/g, 'T')
              .replace(/∩/g, 'U')
              .replace(/Λ/g, 'V')
              .replace(/M/g, 'W')
              .replace(/⅄/g, 'Y')

              .replace(/Ɩ/g, '1')
              .replace(/ᄅ/g, '2')
              .replace(/Ɛ/g, '3')
              .replace(/ㄣ/g, '4')
              .replace(/ϛ/g, '5')
              .replace(/9/g, '6')
              .replace(/ㄥ/g, '7')
              .replace(/6/g, '9')

              .replace(/,/g, '`')
              .replace(/¡/g, '!')
              .replace(/v/g, '\^')
              .replace(/⅋/g, '&')
              .replace(/‾/g, '_')
              .replace(/,,/g, '\"')
              .replace(/,/g, '\'')
              .replace(/¿/g, '\?')
              .replace(/\'/g, ',')
              .replace(/˙/g, '\.')
		}

		function reverse(str) {
			var splitString = str.split(""); 
			var reverseArray = splitString.reverse();
			var joinArray = reverseArray.join("");
			return joinArray;
		}
		// #endregion Functions for text processing.

		// #region Webhook processing.
		// Create a new webhook.
		const webhook = await interaction.channel.createWebhook(`${interaction.user.username}`, { avatar: `${interaction.user.avatarURL()}` })

		const webhookURL = webhook.url;
		
		// Send a webhook message.
		await fetch(webhookURL, {
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
			body: JSON.stringify({ content: reverse(flip(interaction.options.getString('message'))) })
		});

		// Delete the webhook.
		await webhook.delete()
		// #endregion Webhook processing.

		// Reply to interaction.
		await interaction.reply({ content: 'Webhook sent!', ephemeral: true })
    }
}