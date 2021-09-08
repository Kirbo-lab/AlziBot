
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const  config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('die')
        .setDescription('Kills the bot process.'),
    async execute(interaction) {
        if(interaction.user.id === config.owner.botOwner) {
            interaction.reply({ content: 'Killing the bot process.', ephemeral: true })
            function task(i) {
                setTimeout(function() {
                    process.exit()
                }, 5000 * i);
              }
        } else {
            interaction.reply({ content: `You must be \`${config.owner.botOwnerTag}\` to run this command!`, ephemeral: true })
        }
    }
}