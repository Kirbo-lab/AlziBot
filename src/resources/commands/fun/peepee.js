// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('peepee')
        .setDescription('Shows a users true pp length, 101% length accuracy.')
        .addUserOption(option => option.setName('user').setDescription('Enter a user to measure!').setRequired(true)),
    async execute(interaction) {
        if (interaction.options.getMember('user')?.id === interaction.user.id) {
            await interaction.guild.members.fetch().catch(() => { });
            const size = '='.repeat(Memer.randomNumber(1, 10) * ~~!bot.options.developers.includes(target.id));
            const wet = ['💦', ''];

            if (interaction.options.getMember('user')?.id === '809278213519048705') {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('pp length calculator')
                    .addField('your pp size', 'you have vagina dumbass');
                await interaction.reply({ embeds: [embed] });
            } else {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('pp length calculator')
                    .addField('your pp size', `8${size}D ${wet[Math.floor(Math.random() * wet.length)]}`);
                await interaction.reply({ embeds: [embed] });
            }
        } else {
            await interaction.guild.members.fetch().catch(() => { });
            const nickname = interaction.options.getMember('user')?.displayName;
            const size = '='.repeat(Math.floor(Math.random() * 12));
            const wet = ['💦', ''];

            if (interaction.options.getMember('user')?.id === '809278213519048705') {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('pp length calculator')
                    .addField(`${nickname}'s penis`, 'coco has vagina dumbass')
                await interaction.reply({ embeds: [embed] });
            } else {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('pp length calculator')
                    .addField(`${nickname}'s penis`, `8${size}D ${wet[Math.floor(Math.random() * wet.length)]}`)
                await interaction.reply({ embeds: [embed] });
            }
        }
    }
}
