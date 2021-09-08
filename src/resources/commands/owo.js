
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('owo')
		.setDescription('OwO-ifys your message.')
		.addStringOption(option => option.setName('message')
										 .setDescription('Enter a message to OwO-ify!')
										 .setRequired(true)),
	async execute(interaction) {
		// #region Variables for text processing.
		const prefixes = ['OwO', 'hehe', '`*nuzzles*`', '`*blushes*`', '`*giggles*`', '`*waises paw*`', '`*notices bulge*`', '`*unbuttons shirt*`'];
		const suffixes = ['(・`ω´・)', ';;w;;', 'owo', 'UwU', '>w<', '^w^', 'OwO', ':3', '>~<', '•~•', '•v•', '•^^•', '>:3', 'xox', '>3<', 'hehe', 'ɾ⚈▿⚈ɹ', '(・ω・)', '(ᗒᗨᗕ)', 'murr~', '(*≧▽≦)', '( ﾟ∀ ﾟ)', '( ・ ̫・)', '(▰˘v˘▰)', '*gwomps*', '(ﾉ´ з `)ノ', '✾(〜 ☌ω☌)〜✾', '(´,,•ω•,,)♡', '( •́ .̫ •̀ )', '( ´ ▽ ` ).｡ｏ♡'];

		function owoIfy(str) {
			return str
			  .replace(/dog/g, 'doggo')
			  .replace(/cat/g, 'kitteh')
			  .replace(/DOG/g, 'DOGGO')
			  .replace(/CAT/g, 'KITTEH')
			  .replace(/kitten/g, 'kitteh')
			  .replace(/KITTEN/g, 'KITTEH')
			  .replace(/hell/g, 'heck')
			  .replace(/HELL/g, 'HECK')
			  .replace(/fuck/g, 'fwick')
			  .replace(/FUCK/g, 'FWICK')
			  .replace(/fuk/g, 'fwick')
			  .replace(/FUK/g, 'FWICK')
			  .replace(/fck/g, 'fwick')
			  .replace(/FCK/g, 'FWICK')
			  .replace(/fk/g, 'fwick')
			  .replace(/FK/g, 'FWICK')
			  .replace(/FUC/g, 'FWICK')
			  .replace(/fuc/g, 'fwick')
			  .replace(/shit/g, 'shoot')
			  .replace(/SHIT/g, 'SHOOT')
			  .replace(/sht/g, 'shoot')
			  .replace(/SHT/g, 'SHOOT')
			  .replace(/friend/g, 'fwend')
			  .replace(/FRIEND/g, 'fwend')
			  .replace(/fren/g, 'fwen')
			  .replace(/FREN/g, 'FWEN')
			  .replace(/stop/g, 'stawp')
			  .replace(/STOP/g, 'STAWP')
			  .replace(/god/g, 'gosh')
			  .replace(/GOD/g, 'GOSH')
			  .replace(/(?:penis|dick)/g, 'peepee')
			  .replace(/(?:PENIS|DICK)/g, 'PEEPEE')
			  .replace(/damn/g, 'darn')
			  .replace(/DAMN/g, 'DARN')
			  .replace(/(?:r|l)/g, 'w')
			  .replace(/(?:R|L)/g, 'W')
			  .replace(/n([aeiou])/g, 'ny$1')
			  .replace(/N([aeiou])/g, 'Ny$1')
			  .replace(/N([AEIOU])/g, 'Ny$1')
			  .replace(/PH/g, 'FW')
			  .replace(/ph/g, 'fw')
			  .replace(/pH/g, 'fw')
			  .replace(/Ph/g, 'Fw')
			  .replace(/ove/g, 'uv')
			  .replace(/OVE/g, 'UV')
			  .replace(/Ove/g, 'Uv')
			  .replace(/OvE/g, 'Uv')
			  .replace(/oVe/g, 'uV');
		}
		// #endregion Variables for text processing.

		// #region Webhook processing.
		// Create a new webhook.
	    await interaction.channel.createWebhook(`${interaction.user.username}`, { avatar: `${interaction.user.avatarURL()}` }).then(webhook => webhook.send(prefixes[Math.floor(Math.random() * prefixes.length)] + ' ' + owoIfy(interaction.options.getString('message')) + ' ' + suffixes[Math.floor(Math.random() * suffixes.length)]).then(interaction => webhook).then(webhook => webhook.delete()).catch(console.error));

		// Reply to interaction.
		await interaction.reply({ content: 'Webhook sent!', ephemeral: true });
	},
};