



const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Permissions } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');
const ms = require('ms')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mute')
        .setDescription('Mutes a user.')
        .addUserOption(option => option.setName('user').setDescription('Enter a user to mute!').setRequired(true)),
    async execute(interaction) {
        if (interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            let role = interaction.guild.roles.cache.find(role => role.name == 'Muted');

            if (!role)
                interaction.guild.roles.create({ name: 'Muted', permissions: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY, Permissions.FLAGS.CREATE_INSTANT_INVITE], color: '#f44336' })

            const user = interaction.options.getMember('user');

            if (user.id === interaction.user.id) {
                interaction.reply({ content: 'You can\'t mute yourself, dummy!', ephemeral: true });
            } else {
                user.roles.add(role);

                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('Success!')
                    .setDescription(`I have successfully muted ${user}!`)

                interaction.reply({ embeds: [embed] })
            }
        } else {

            interaction.reply({ content: `You do not have \`MANAGE_MESSAGES\` permissions required to run this command!`, ephemeral: true })
        }
    }
}