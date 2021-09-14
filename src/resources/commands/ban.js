
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Permissions } = require('discord.js');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a user.')
        .addUserOption(option => option.setName('user').setDescription('Enter a user to ban!').setRequired(true)),
    async execute(interaction) {
        if(interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
            // Fetch user.
            const user = interaction.options.getUser('user');
            
            if(user.id === interaction.user.id) {
                interaction.reply({ content: 'You can\'t ban yourself, dummy!', ephemeral: true })
            } else {
                // Ban user.
                interaction.guild.members.ban(user);

                const embed = new MessageEmbed()
                    .setColor(config.embed.colour)
                    .setTitle('Success!')
                    .setDescription(`I have successfully banned ${user}!`)

                // Reply to interaction.
                interaction.reply({ embeds: [embed] })
            }
        } else {
            // Reply to interaction.
            interaction.reply({ content: `You do not have \`BAN_MEMBERS\` permissions required to run this command!`, ephemeral: true })
        }
    }
}