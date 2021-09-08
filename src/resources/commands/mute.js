
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Permissions } = require('discord.js');
const config = require('../config.json');
const ms = require('ms')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mute')
        .setDescription('Mutes a user.')
        .addUserOption(option => option.setName('user').setDescription('Enter a user to mute!').setRequired(true)),
    async execute(interaction) {
        if(interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            // Get role.
            let role = interaction.guild.roles.cache.find((role) => role.name === 'Muted')

            // Create new role if non existant
            if(!role)
                interaction.guild.roles.create({name: 'Muted', permissions: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY, Permissions.FLAGS.CREATE_INSTANT_INVITE], color: '#f44336'})

            // Fetch user.
            const user = interaction.options.getMember('user');
            
            // Add muted role.
            user.roles.add(role);

            const embed = new MessageEmbed()
                .setColor(config.embed.colour)
                .setTitle('Success!')
                .setDescription(`I have successfully muted ${user}!`)

            // Reply to interaction.
            interaction.reply({ embeds: [embed] })
        } else {
            // Reply to interaction.
            interaction.reply({ content: `You do not have \`MANAGE_MESSAGES\` permissions required to run this command!`, ephemeral: true })
        }
    }
}