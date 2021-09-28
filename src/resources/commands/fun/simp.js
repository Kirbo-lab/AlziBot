// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('simp')
        .setDescription('Shows a users true simp score, 101% official simp score.')
        .addUserOption(option => option.setName('user').setDescription('Enter a user to assess!').setRequired(true)),
    async execute(interaction) {
        if (interaction.options.getUser('user')?.id === interaction.user.id) {
            let rating = Math.floor(Math.random() * 100)

            if (rating < 50) {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('simp r8 machine')
                    .setDescription(`You are **${rating}%** simp. :slight_smile:`);
                await interaction.reply({ embeds: [embed] });
            } else if (rating < 90) {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('simp r8 machine')
                    .setDescription(`You are **${rating}%** simp. :flushed:`);
                await interaction.reply({ embeds: [embed] });
            } else {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('simp r8 machine')
                    .setDescription(`You are **${rating}%** simp. <:flooshed:887865024952025159>`);
                await interaction.reply({ embeds: [embed] });
            }
        } else {
            let rating = Math.floor(Math.random() * 100);

            if (rating < 50) {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('simp r8 machine')
                    .setDescription(`${interaction.options.getMember('user')?.displayName} is **${rating}%** simp. :slight_smile:`);
                await interaction.reply({ embeds: [embed] });
            } else if (rating < 90) {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('simp r8 machine')
                    .setDescription(`${interaction.options.getMember('user')?.displayName} is **${rating}%** simp. :flushed:`);
                await interaction.reply({ embeds: [embed] });
            } else {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('simp r8 machine')
                    .setDescription(`${interaction.options.getMember('user')?.displayName} is **${rating}%** simp. <:flooshed:887865024952025159>`);
                await interaction.reply({ embeds: [embed] });
            }
        }
    }
}
