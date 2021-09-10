
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../config.json');
const fetch = require('node-fetch')
const TwitchURL = `https://api.twitch.tv/helix/streams/${config.socials.links.twitch}`

module.exports = {
    data: new SlashCommandBuilder()
        .setName('twitch')
        .setDescription(`[IN BETA, DO NOT USE] Shows whether ${config.socials.name} is live or not!`),
    async execute(interaction) {
        fetch(TwitchURL, {
            method: 'GET',
            headers: {
                "Client-ID": config.api.twitch.clientID,
                "Authorization": 'Bearer ' + config.api.twitch.token
            }
        }).then(res => res.json()).then(res => {
            console.log(res)
        })

        fetch(TwitchURL, function(err, res) {
            const button = new MessageActionRow()
            .addComponents(
                new MessageButton()
                        .setStyle('LINK')
                    .setLabel(`Visit ${config.socials.links.twitch}'s Twitch here!`)
                    .setURL(`https://namemc.com/profile/${findPlayer.uuid}`)
            )
        
            const embed = new MessageEmbed()
                .setColor(config.embed.colour)
                .setAuthor(config.socials.links.twitch, config.socials.picture)
                .setTitle(`Watch ${config.socials.links.twitch} on Twitch!`)
                .setURL(`https://twitch.tv/${config.socials.links.twitch}`)
                .setImage(config.socials.picture)
        
            if (res.stream == null) {
                interaction.reply({ content: `**${config.socials.links.twitch}** is not currently live, but you can still check out ${config.socials.pronouns.pronouns3} Twitch.`, components: [button] });
            } else {
                interaction.reply({ content: `**${config.socials.links.twitch}** is currently live!`, embeds: [embed], components: [button] });
            }
        });
        
        // Reply to interaction.
        await interaction.reply({ embeds: [embed] })

 
    }
}