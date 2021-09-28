// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kill')
        .setDescription('Kills someone.')
        .addUserOption(option => option.setName('victim').setDescription('Enter a user to murder!').setRequired(true)),
    async execute(interaction) {
        const suffixes = ['Brutal!', 'Oh my...', 'Uh..'];
        const otherstuff = ['killed', 'murdered'];
        const { url } = await fetch(bot.api.kill).then(res => res.json());

        const embed = new MessageEmbed()
            .setColor(bot.embed.defaultColour)
            .setAuthor(`${interaction.user.username} ${otherstuff[Math.floor(Math.random() * otherstuff.length)]} ${interaction.options.getMember('victim')?.displayName}! ${suffixes[Math.floor(Math.random() * suffixes.length)]}`, `${interaction.user.avatarURL()}`)
            .setImage(url)
            .setFooter(`Fetched from ${bot.api.kill}.`);

        const suicide = new MessageEmbed()
            .setColor('#f44336')
            .setTitle('We want you to know that you\'re not alone. ❤️')
            .setThumbnail(bot.misc.suicide)
            .setDescription(`If you are contemplating suicide, please reach out. You can find help at a National Suicide Prevention Lifeline.`)
            .addFields(
                { name: '🇺🇸 U.S.A. Suicide Hotline:', value: '+1-800-273-8255', inline: true },
                { name: '🇬🇧 U.K. Suicide Hotline:', value: '116-123', inline: true },
                { name: '🇦🇺 Australian Suicide Lifeline:', value: '13 11 14', inline: true },
                { name: '☎️ Other Hotlines:', value: `[International Suicide Hotlines](https://www.opencounseling.com/suicide-hotlines)\nThese hotlines are made available to those that do not reside in the US or UK. Look up the number on the list that belongs to your country and call it. It will connect you to your country\'s suicide hotline.`, inline: false },
            );

        if (interaction.options.getUser('victim') === interaction.user) {
            await interaction.reply({ embeds: [suicide], ephemeral: true });
        } else {
            await interaction.reply({ embeds: [embed] });
        }
    }
}