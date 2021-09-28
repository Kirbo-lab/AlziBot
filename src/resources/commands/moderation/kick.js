



const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Permissions } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks a user.')
        .addUserOption(option => option.setName('user').setDescription('Enter a user to kick!').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Enter a the reason of kick!').setRequired(false)),
    async execute(interaction, Botphyte) {
        if (interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
            const user = interaction.options.getMember('user');

            if (user.id === interaction.user.id) {
                interaction.reply({ content: 'You can\'t kick yourself, dummy!', ephemeral: true });
            } else {
                await Botphyte.users.cache.get(interaction.options.getMember('user')?.id)?.send(`You have been kicked from \`${interaction.guild.name}\` by \`${interaction.user.username}#${interaction.user.discriminator}\` for \`${interaction.options.getString('reason')}\``)
                await user.ban({ reason: interaction.options.getString('reason') || 'no reason' })

                interaction.guild.members.kick(user);

                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('Success!')
                    .setDescription(`I have successfully kicked \`${interaction.options.getMember('user')?.username}#${interaction.options.getMember('user')?.discriminator}\`!`);

                interaction.reply({ embeds: [embed] });
            }
        } else {
            interaction.reply({
                content: `You do not have \`KICK_MEMBERS\` permissions required to run this command!`, ephemeral: true
            });
        }
    }
}