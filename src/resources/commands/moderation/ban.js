



const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Permissions } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a user.')
        .addUserOption(option => option.setName('user').setDescription('Enter a user to ban!').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('Enter a the reason of ban!').setRequired(false)),
    async execute(interaction, Botphyte) {
        if (interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
            const user = interaction.options.getMember('user');

            if (user.id === interaction.user.id) {
                interaction.reply({ content: 'You can\'t ban yourself, dummy!', ephemeral: true });
            } else {
                await Botphyte.users.cache.get(interaction.options.getMember('user')?.id)?.send(`You have been banned from \`${interaction.guild.name}\` by \`${interaction.user.username}#${interaction.user.discriminator}\` for \`${interaction.options.getString('reason')}\``)
                await user.ban({ reason: interaction.options.getString('reason') })

                interaction.guild.members.ban(user);

                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('Success!')
                    .setDescription(`I have successfully banned \`${interaction.options.getMember('user')?.username}#${interaction.options.getMember('user')?.discriminator}\`!`);

                interaction.reply({ embeds: [embed] });
            }
        } else {
            interaction.reply({
                content: `You do not have \`BAN_MEMBERS\` permissions required to run this command!`, ephemeral: true
            });
        }
    }
}