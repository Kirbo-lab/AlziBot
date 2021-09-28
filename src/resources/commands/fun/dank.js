// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dank')
        .setDescription('Shows a users true dank rating, 101% official dank score.')
        .addUserOption(option => option.setName('user').setDescription('Enter a user to rate!').setRequired(true)),
    async execute(interaction) {
        if (interaction.options.getUser('user')?.id === interaction.user.id) {
            let rating = Math.floor(Math.random() * 100);

            if (rating < 75) {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('dank r8 machine')
                    .setDescription(`You are ${rating}% dank. :slight_smile:`);
                await interaction.reply({ embeds: [embed] });
            } else {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('dank r8 machine')
                    .setDescription(`You are ${rating}% dank. :sunglasses:`);
                await interaction.reply({ embeds: [embed] });
            }
        } else {
            let rating = Math.floor(Math.random() * 100);

            if (rating < 75) {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('dank r8 machine')
                    .setDescription(`${interaction.options.getMember('user')?.displayName} is ${rating}% dank. :slight_smile:`)
                await interaction.reply({ embeds: [embed] });
            } else {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('dank r8 machine')
                    .setDescription(`${interaction.options.getMember('user')?.displayName} is ${rating}% dank. :sunglasses:`);
                await interaction.reply({ embeds: [embed] });
            }
        }
    }
}
