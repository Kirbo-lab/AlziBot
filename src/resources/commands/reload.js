
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const  config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reload')
        .setDescription('Kills the bot process, then fires it back up.'),
    async execute(interaction) {
        if(interaction.user.id === config.owner.botOwner) {
            interaction.reply({ content: 'Reloading bot...', ephemeral: true })
            function task(i) {
                setTimeout(function() {
                    process.exit()
                }, 5000 * i);
              }
        } else {
            interaction.reply({ content: `You must be \`${config.owner.botOwner}\` to run this command!`, ephemeral: true })
        }
    }
}