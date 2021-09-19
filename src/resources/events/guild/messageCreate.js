
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

// #region Import and declare
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const colors = require('colors');
const owner = require('../../misc/json/owner.json')
let date_time = new Date();
let hour = ("0" + date_time.getHours()).slice(-2);
let minute = ("0" + date_time.getMinutes()).slice(-2);
const wait = require('util').promisify(setTimeout);
// #endregion Import and declare

module.exports  = {
    name: 'messageCreate',
    execute (message) {
        // #region Embeds
        const belleEmbed = new MessageEmbed()
	        .setColor('#D80070')
	        .setAuthor('Disciple', 'https://instagram.fcgk25-1.fna.fbcdn.net/v/t51.2885-19/s150x150/62505124_481991302534506_3164807120902160384_n.jpg?_nc_ht=instagram.fcgk25-1.fna.fbcdn.net&_nc_ohc=BIG0DualZRUAX-q9M_Z&edm=ABfd0MgBAAAA&ccb=7-4&oh=a1b8ba642d4599f6715d695a933f3c5c&oe=613B6D63&_nc_sid=7bff83', 'https://www.instagram.com/disciple/')
	        .setTitle('Sick edit by @tobshudson 🍭')
	        .setURL('https://www.instagram.com/p/B4xzsyTBtRz')
	        .setDescription('If you know, you know.')
	        .setImage('https://instagram.fcgk25-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/73414946_969793080074119_6682054374765460181_n.jpg?_nc_ht=instagram.fcgk25-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=07t5wcrYHZEAX9VMlXv&edm=AABBvjUBAAAA&ccb=7-4&oh=cfe56a7649a72f6f3237acb0614a1c1a&oe=613C6C54&_nc_sid=83d603')
        // #endregion Embeds

        // #region Buttons
        const badBot = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setStyle('LINK')
                    .setLabel('Help improve Botphyte here!')
                    .setURL(owner.github.issues)
            );

        const goodBot = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setStyle('LINK')
                    .setLabel('Star me on GitHub!')
                    .setURL(owner.github.main)
            )
            .addComponents(
                new MessageButton()
                    .setStyle('LINK')
                    .setLabel('Support me on Patreon!')
                    .setURL(owner.donate)
            );
        // #endregion Buttons

        if(message.content === 'pixel makes the best bots') {
            message.reply({ content: 'Like the bot? Consider starring the bot on GitHub or supporting me on Patreon!', components: [goodBot] });
            console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Replied to message "${message.content}"\n`);
        } else if(message.content === 'pixels bots are so good') {
            message.reply({ content: 'Like the bot? Consider starring the bot on GitHub or supporting me on Patreon!', components: [goodBot] });
            console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Replied to message "${message.content}"\n`);
        } else if(message.content === 'pixel makes bad bots') {
            message.reply({ content: 'Is there something wrong? Help me improve over at my GitHub!', components: [badBot] });
            console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Replied to message "${message.content}"\n`);
        } else if(message.content === 'pixel makes shit bots') {
            message.reply({ content: 'Is there something wrong? Help me improve over at my GitHub!', components: [badBot] });
            console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Replied to message "${message.content}"\n`);
        } else if(message.content === 'pixels bots are trash') {
            message.reply({ content: 'Is there something wrong? Help me improve over at my GitHub!', components: [badBot] });
            console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Replied to message "${message.content}"\n`);
        } else if(message.content === 'pixels bots are the worst') {
            message.reply({ content: 'Is there something wrong? Help me improve over at my GitHub!', components: [badBot] });
            console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Replied to message "${message.content}"\n`);
        } else if(message.content === 'oh damn, belle delphine, ok i see') {
            message.reply({ embeds: [belleEmbed] });
            console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Replied to message "${message.content}"\n`);
        } else if(message.content === 'hi botphyte') {
            message.reply('Hey there!')
            console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Replied to message "${message.content}"\n`);
        } else if(message.content === 'OwO') {
            message.reply('What\'s this?')
            console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Replied to message "${message.content}"\n`);
        } else if(message.content === '@random') {
		    message.guild.members.fetch();

            message.channel.send('<a:loading:887182267254997002> Botphyte is thinking...').then(async msg => {
                                                                                                await wait(2500),
                                                                                                await msg.edit(`I choose you, ${message.guild.members.cache.random(1)[0]}!`)})
        
        }
    }
}