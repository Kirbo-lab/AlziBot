

// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('minecraft')
        .setDescription('Fetches information of a Minecraft player.')
        .addStringOption(option => option.setName('player')
            .setDescription('Enter a Minecraft username or UUID!')
            .setRequired(true)),
    async execute(interaction) {
        const name = interaction.options.getString('player');
        const findPlayer = await nameToUUID(name) || await uuidToName(name);
        const nameHistory = await fetch(`https://api.mojang.com/user/profiles/${findPlayer.uuid}/names`).then(res => res.json());

        async function nameToUUID(name) {
            const body = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}?at=${moment().format('x')}`).then(res => res.json())
            if (body.id) return { uuid: body.id, name: body.name }
            return false
        };

        async function uuidToName(uuid) {
            const body = await fetch(`https://sessionconfig.server.mojang.com/session/minecraft/profile/${uuid}`).then(res => res.json())
            if (body.id) return { uuid: body.id, name: body.name }
            return false
        };

        if (findPlayer.uuid) {
            const embed = new MessageEmbed()
                .setColor(bot.embed.defaultColour)
                .setAuthor(findPlayer.name, 'https://crafatar.com/avatars/' + findPlayer.uuid + '.png')
                .addField(':clipboard: UUID', findPlayer.uuid)
                .addField(':label: Name History', `${nameHistory.map(n => `\`${n.name}\` (${n.changedToAt ? moment(n.changedToAt).fromNow() : 'Original Name'})`).join('\n')}`)
                .setImage(' https://crafatar.com/renders/body/' + findPlayer.uuid + '.png');

            const button = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setStyle('LINK')
                        .setLabel('Visit this profile on NameMC!')
                        .setURL(`https://namemc.com/profile/${findPlayer.uuid}`)
                );

            interaction.reply({ embeds: [embed], components: [button] });
        } else {
            interaction.reply({ content: 'This username/UUID is invalid!', ephemeral: true });
        }
    }, catch(error) {
        console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(ERROR)\n`.bold + `└─`.white + ` ${error}\n`);
    }
}