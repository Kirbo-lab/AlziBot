
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../../config.json');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('youtubetogether')
		.setDescription('Sends an invite to watch YouTube together in voice channels.')
		.addSubcommand(subcommand =>
			subcommand
				.setName('create')
				.setDescription('Watch YouTube together in a voice channel!'))
		.addSubcommand(subcommand =>
			subcommand
				.setName('info')
				.setDescription('Displays information about YouTube together.')),
	async execute(interaction) {
		if(interaction.options.getSubcommand() === 'create') {		
			let vc = interaction.member.voice.channel
			if(!vc) return interaction.reply({ content: 'You must be in a voice channel to use this command!', ephemeral: true })

			fetch(`https://discord.com/api/v9/channels/${vc.id}/invites`, {
				method: 'POST',
				body: JSON.stringify({
					max_age: 0,
					max_uses: 0,
					target_application_id: '755600276941176913',
					target_type: 2,
					temporary: false,
					validate: null
				}),
				headers: {
					"Authorization": `Bot ${config.bot.token}`,
					"Content-Type": 'application/json'
				}
			}).then(res => res.json()).then(invite => {
				if(!invite.code) return interaction.reply({ content: 'An error occurred while trying to start YouTube Together!', ephemeral: true })
				interaction.reply(`https://discord.com/invite/${invite.code}`)
			})
		} else if(interaction.options.getSubcommand() === 'info') {
			const embed = new MessageEmbed()
				.setColor(config.embed.colour)
				.setTitle('YouTube Together')
				.addFields(
					{ name: 'What it is', value: 'YouTube Together is a new API that I found, and decided to implement to Botphyte. YouTube Together allows you to watch YouTube together with friends in a voice channel, all completely for free.'},
					{ name: 'How to use', value: 'To use YouTube Together, execute the `/youtubetogether create` command and click on the invite link. After one person clicks on the invite link, the activity buttons will become activated for other people to use and join with.' },
				)
			
			interaction.reply({ embeds: [embed] })
		}
	}
}