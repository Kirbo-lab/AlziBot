
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../../config.json');
const api = require('../../misc/json/api.json');
const socials = require('../../misc/json/socials.json');
const fetch = require('node-fetch')
const TwitchURL = `${api.twitch.url}${socials.links.twitch}`

module.exports = {
    data: new SlashCommandBuilder()
        .setName('twitch')
        .setDescription(`[IN BETA, DO NOT USE] Shows whether ${socials.name} is live or not!`),
    async execute(interaction) {
        fetch(TwitchURL, {
            method: 'GET',
            headers: {
                "Client-ID": api.twitch.clientID,
                "Authorization": 'Bearer ' + api.twitch.token
            }
        }).then(res => res.json()).then(res => {
            console.log(res)
        })

        fetch(TwitchURL, function(err, res) {
            const button = new MessageActionRow()
            .addComponents(
                new MessageButton()
                        .setStyle('LINK')
                    .setLabel(`Visit ${socials.links.twitch}'s Twitch here!`)
                    .setURL(`https://namemc.com/profile/${findPlayer.uuid}`)
            )
        
            const embed = new MessageEmbed()
                .setColor(config.embed.colour)
                .setAuthor(socials.links.twitch, socials.picture)
                .setTitle(`Watch ${socials.links.twitch} on Twitch!`)
                .setURL(`https://twitch.tv/${socials.links.twitch}`)
                .setImage(socials.picture)
        
            if (res.stream == null) {
                interaction.reply({ content: `**${socials.links.twitch}** is not currently live, but you can still check out ${socials.pronouns.pronouns3} Twitch.`, components: [button] });
            } else {
                interaction.reply({ content: `**${socials.links.twitch}** is currently live!`, embeds: [embed], components: [button] });
            }
        });
        
        // Reply to interaction.
        await interaction.reply({ embeds: [embed] })

 
    }
}