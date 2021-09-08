
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ship')
        .setDescription('Ships a user with another user.')
        .addUserOption(option => option.setName('user1')
                                       .setDescription('Select a user to ship with!')
                                       .setRequired(true))
        .addUserOption(option => option.setName('user2')
                                       .setDescription('Select another user to ship with!')
                                       .setRequired(true)),
    async execute(interaction) {
        var user1 = interaction.options.getUser('user1')?.username
        var user2 = interaction.options.getUser('user2')?.username

        const user1slice = user1.slice(0, user1.length / 2)
        const user2slice = user2.slice(user2.length /2)

        let lovePercent = Math.floor(Math.random() * 100) + 1

        if(user1 === 'Pixel' || user2 === 'cit') {
            lovePercent = 100
        } else {
            lovePercent = Math.floor(Math.random() * 100) + 1
        }

        const baseEmbed = new MessageEmbed()
            .setTitle(`${user1} + ${user2} = ${user1slice + user2slice}`)
            .setColor('#FF2600')
            .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/broken-heart_1f494.png')
            .setDescription(`This isn't going to work out... **${lovePercent}%**. 😬`)

        const thirtyEmbed = new MessageEmbed()
            .setTitle(`${user1} + ${user2} = ${user1slice + user2slice}`)
            .setColor('#FF7B00')
            .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/heart-suit_2665-fe0f.png')
            .setDescription(`Cute couple. **${lovePercent}%**. 😅`)

        const fiftyEmbed = new MessageEmbed()
            .setTitle(`${user1} + ${user2} = ${user1slice + user2slice}`)
            .setColor('#FFFF00')
            .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/31/two-hearts_1f495.png')
            .setDescription(`Ahh cute!! **${lovePercent}%** ☺️`)

        const eightyEmbed = new MessageEmbed()
            .setTitle(`${user1} + ${user2} = ${user1slice + user2slice}`)
            .setColor(config.embed.colour)
            .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/31/sparkling-heart_1f496.png')
            .setDescription(`Adorable couple!!~ **${lovePercent}%** 😊`)

        const topEmbed = new MessageEmbed()
            .setTitle(`${user1} + ${user2} = ${user1slice + user2slice}`)
            .setColor('#ec407a')
            .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/31/heart-with-ribbon_1f49d.png')
            .setDescription(`damn we all jealous now. **${lovePercent}%** 😔`)


               if(lovePercent < 30) {
            interaction.reply({ embeds: [baseEmbed] })
        } else if(lovePercent < 50) {
            interaction.reply({ embeds: [thirtyEmbed] })
        } else if(lovePercent < 80) {
            interaction.reply({ embeds: [fiftyEmbed] })
        } else if(lovePercent < 95) {
            interaction.reply({ embeds: [eightyEmbed] })
        } else if(lovePercent > 95) {
            interaction.reply({ embeds: [topEmbed] })
        } else {
            interaction.reply({ embeds: [fiftyEmbed] })
        }
    }
}