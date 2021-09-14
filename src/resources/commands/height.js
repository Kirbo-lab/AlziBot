
// © 2021 Pix3l_. All rights reserved.
// oh yeah copied from trobo lamo
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('height')
        .setDescription('Exposes a users real height.')
        .addUserOption(option => option.setName('user').setDescription('Enter a user to measure!').setRequired(true)),
    async execute(interaction) {
        if(interaction.options.getUser('user')?.id === interaction.user.id) {
            if(interaction.user.id === '366252037694029834') {
                const feets = ['2', '3', '4']
                const inches = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
        
                let feet = feets[Math.floor(Math.random() * feets.length)]
                let inch = inches[Math.floor(Math.random() * inches.length)]
        
                const heightUS = feet + '\'' + inch
                const heightGlo = Math.floor(feet/0.032808 + inch/0.39370)
        
                if(feet < 5) {
                    await interaction.reply(`You are **${heightGlo}cm (${heightUS})** tall. 🤏 🤏`)
                } else if(feet < 6) {
                    await interaction.reply(`You are **${heightGlo}cm (${heightUS})** tall. 👍`)
                } else {
                    await interaction.reply(`You are **${heightGlo}cm (${heightUS})** tall. 😱 😱`)
                }
            } else if(interaction.user.id === '528329240651759616') {
                const feets = ['6', '7', '8']
                const inches = ['3', '4', '5', '6', '7', '8', '9', '10', '11']
        
                let feet = feets[Math.floor(Math.random() * feets.length)]
                let inch = inches[Math.floor(Math.random() * inches.length)]
        
                const heightUS = feet + '\'' + inch
                const heightGlo = Math.floor(feet/0.032808 + inch/0.39370)
        
                if(feet < 5) {
                    await interaction.reply(`You are **${heightGlo}cm (${heightUS})** tall. 🤏 🤏`)
                } else if(feet < 6) {
                    await interaction.reply(`You are **${heightGlo}cm (${heightUS})** tall. 👍`)
                } else {
                    await interaction.reply(`You are **${heightGlo}cm (${heightUS})** tall. 😱 😱`)
                }
            } else if(interaction.user.id === '783272839435255818') {
                const feets = ['6', '7', '8']
                const inches = ['3', '4', '5', '6', '7', '8', '9', '10', '11']
        
                let feet = feets[Math.floor(Math.random() * feets.length)]
                let inch = inches[Math.floor(Math.random() * inches.length)]
        
                const heightUS = feet + '\'' + inch
                const heightGlo = Math.floor(feet/0.032808 + inch/0.39370)
        
                if(feet < 5) {
                    await interaction.reply(`You are **${heightGlo}cm (${heightUS})** tall. 🤏 🤏`)
                } else if(feet < 6) {
                    await interaction.reply(`You are **${heightGlo}cm (${heightUS})** tall. 👍`)
                } else {
                    await interaction.reply(`You are **${heightGlo}cm (${heightUS})** tall. 😱 😱`)
                }
            } else {
                const feets = ['3', '4', '5', '6', '7', '8']
                const inches = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
        
                let feet = feets[Math.floor(Math.random() * feets.length)]
                let inch = inches[Math.floor(Math.random() * inches.length)]
        
                const heightUS = feet + '\'' + inch
                const heightGlo = Math.floor(feet/0.032808 + inch/0.39370)
        
                if(feet < 5) {
                    await interaction.reply(`You are **${heightGlo}cm (${heightUS})** tall. 🤏 🤏`)
                } else if(feet < 6) {
                    await interaction.reply(`You are **${heightGlo}cm (${heightUS})** tall. 👍`)
                } else {
                    await interaction.reply(`You are **${heightGlo}cm (${heightUS})** tall. 😱 😱`)
                }
            }
        } else {
            if(interaction.options.getUser('user')?.id === '366252037694029834') {
                const feets = ['2', '3', '4']
                const inches = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
        
                let feet = feets[Math.floor(Math.random() * feets.length)]
                let inch = inches[Math.floor(Math.random() * inches.length)]
        
                const heightUS = feet + '\'' + inch
                const heightGlo = Math.floor(feet/0.032808 + inch/0.39370)
        
                if(feet < 5) {
                    await interaction.reply(`${interaction.options.getUser('user')?.username} is **${heightGlo}cm (${heightUS})** tall. 🤏 🤏`)
                } else if(feet < 6) {
                    await interaction.reply(`${interaction.options.getUser('user')?.username} is **${heightGlo}cm (${heightUS})** tall. 👍`)
                } else {
                    await interaction.reply(`${interaction.options.getUser('user')?.username} is **${heightGlo}cm (${heightUS})** tall. 😱 😱`)
                }
            } else if(interaction.options.getUser('user')?.id === '528329240651759616') {
                const feets = ['6', '7', '8']
                const inches = ['3', '4', '5', '6', '7', '8', '9', '10', '11']
        
                let feet = feets[Math.floor(Math.random() * feets.length)]
                let inch = inches[Math.floor(Math.random() * inches.length)]
        
                const heightUS = feet + '\'' + inch
                const heightGlo = Math.floor(feet/0.032808 + inch/0.39370)
        
                if(feet < 5) {
                    await interaction.reply(`${interaction.options.getUser('user')?.username} is **${heightGlo}cm (${heightUS})** tall. 🤏 🤏`)
                } else if(feet < 6) {
                    await interaction.reply(`${interaction.options.getUser('user')?.username} is **${heightGlo}cm (${heightUS})** tall. 👍`)
                } else {
                    await interaction.reply(`${interaction.options.getUser('user')?.username} is **${heightGlo}cm (${heightUS})** tall. 😱 😱`)
                }
            } else if(interaction.options.getUser('user')?.id === '783272839435255818') {
                const feets = ['6', '7', '8']
                const inches = ['3', '4', '5', '6', '7', '8', '9', '10', '11']
        
                let feet = feets[Math.floor(Math.random() * feets.length)]
                let inch = inches[Math.floor(Math.random() * inches.length)]
        
                const heightUS = feet + '\'' + inch
                const heightGlo = Math.floor(feet/0.032808 + inch/0.39370)
        
                if(feet < 5) {
                    await interaction.reply(`${interaction.options.getUser('user')?.username} is **${heightGlo}cm (${heightUS})** tall. 🤏 🤏`)
                } else if(feet < 6) {
                    await interaction.reply(`${interaction.options.getUser('user')?.username} is **${heightGlo}cm (${heightUS})** tall. 👍`)
                } else {
                    await interaction.reply(`${interaction.options.getUser('user')?.username} is **${heightGlo}cm (${heightUS})** tall. 😱 😱`)
                }
            } else {
                const feets = ['3', '4', '5', '6', '7', '8']
                const inches = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
        
                let feet = feets[Math.floor(Math.random() * feets.length)]
                let inch = inches[Math.floor(Math.random() * inches.length)]
        
                const heightUS = feet + '\'' + inch
                const heightGlo = Math.floor(feet/0.032808 + inch/0.39370)
        
                if(feet < 5) {
                    await interaction.reply(`${interaction.options.getUser('user')?.username} is **${heightGlo}cm (${heightUS})** tall. 🤏 🤏`)
                } else if(feet < 6) {
                    await interaction.reply(`${interaction.options.getUser('user')?.username} is **${heightGlo}cm (${heightUS})** tall. 👍`)
                } else {
                    await interaction.reply(`${interaction.options.getUser('user')?.username} is **${heightGlo}cm (${heightUS})** tall. 😱 😱`)
                }
            }
        }
    }
}