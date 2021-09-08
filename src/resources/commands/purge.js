
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Permissions } = require('discord.js');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription('Clears an amount of messages.')
        .addNumberOption(option => option.setName('amount').setDescription('Enter the amount of messages you would like to remove!').setRequired(true)),
    async execute(interaction) {
        if (interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            const amount = interaction.options.getNumber('amount');

            if(amount > 2000) {
                return interaction.reply({ content: `You can only purge up to 2000 messages!`, ephemeral: true})
            } else if(amount < 1) {
                return interaction.reply({ content: `Enter a number between 1 and 2000!`, ephemeral: true})
            } else {
                const embed = new MessageEmbed()
                    .setColor(config.embed.colour)
                    .setTitle('Success!')
                    .setDescription(`I have purged **${amount}** messages!`)

                interaction.channel.bulkDelete(amount, true).then(interaction.reply({ embeds: [embed] })).catch(err => {
                    console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__dirname}/botphyte.js)`.brightYellow.bold + ` ` + `(ERROR)\n`.bold + `└─`.white + ` ${err}\n`);
                    return interaction.reply({ content: `There was an error while purging messages!`, ephemeral: true})
                })
            }
        } else {
            interaction.reply({ content: `You do not have \`MANAGE_MESSAGES\` permissions required to run this command!`, ephemeral: true })
        }
    }
}