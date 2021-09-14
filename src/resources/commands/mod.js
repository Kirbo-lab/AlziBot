
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mod')
        .setDescription('Grants moderator role to specified user.')
        .addUserOption(option => option.setName('user').setDescription('Enter a user to grant Moderator!').setRequired(true)),
    async execute(interaction) {
        if (interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
            const member = interaction.options.getMember('user');
    
            if(member.roles.cache.some(role => role.id === config.server.modRole)) {
                interaction.reply({ content: `This user already has moderator privileges.`, ephemeral: true })
            } else {
                member.roles.add(config.server.modRole).then(() => {
                    interaction.reply({ content: `User has been promoted to moderator!`, ephemeral: true })
                    member.send(`How exciting, you have been promoted to **Moderator** on **${interaction.guild.name}**!`);
                })
            }
        } else {
            interaction.reply({ content: `You do not have \`ADMINISTRATOR\` privileges to run this command!`, ephemeral: true })
        }
    }
}