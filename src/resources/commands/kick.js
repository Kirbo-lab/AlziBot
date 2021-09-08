
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Permissions } = require('discord.js');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks a user.')
        .addUserOption(option => option.setName('user').setDescription('Enter a user to kick!').setRequired(true)),
    async execute(interaction) {
        if(interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
            // Fetch user.
            const user = interaction.options.getUser('user');
            
            // Kick user.
            interaction.guild.members.kick(user);

            const embed = new MessageEmbed()
                .setColor(config.embed.colour)
                .setTitle('Success!')
                .setDescription(`I have successfully kicked ${user}!`)

            // Reply to interaction.
            interaction.reply({ embeds: [embed] })
        } else {
            // Reply to interaction.
            interaction.reply({ content: `You do not have \`KICK_MEMBERS\` permissions required to run this command!`, ephemeral: true })
        }
    }
}