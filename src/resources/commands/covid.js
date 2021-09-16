
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('../config.json');
const api = require('../misc/json/api.json');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('covid')
        .setDescription('Shows information about COVID-19 cases.')
        .addSubcommand(subcommand => 
			subcommand.setName('worldwide')
					  .setDescription('Shows the amount of COVID-19 cases worldwide.'))
        .addSubcommand(subcommand =>
            subcommand.setName('continent')
                      .setDescription('Shows the amount of COVID-19 cases in a continent.')
                      .addStringOption(option => option.setName('area')
                                                       .setDescription('Enter a continent to pull information from!')
                                                       .setRequired(true)))
        .addSubcommand(subcommand => 
            subcommand.setName('country')
                      .setDescription('Shows the amount of COVID-19 cases in a country.')
                      .addStringOption(option => option.setName('region')
                                                       .setDescription('Enter a country to pull information from!')
                                                       .setRequired(true))),
    async execute(interaction) {
        const button = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setStyle('LINK')
                    .setLabel('Help stop Coronavirus!')
                    .setURL('https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public')
            )

        if(interaction.options.getSubcommand() === 'worldwide') {
            const apiFetch = await fetch(`${api.covid}all`).then(res => res.json())

            const worldwideEmbed = new MessageEmbed()
                .setColor(config.embed.colour)
                .setTitle('COVID-19 worldwide statistics')
                .setThumbnail('https://i.imgur.com/dVIHiYt.png')
                .addFields(
                    { name: 'Cases', value: (apiFetch.cases).toLocaleString('en-AU'), inline: true },
                    { name: 'Cases per 1M', value: (apiFetch.casesPerOneMillion).toLocaleString('en-AU'), inline: true },
                    { name: 'Cases Today', value: (apiFetch.todayCases).toLocaleString('en-AU'), inline: true },
                    { name: 'Active', value: (apiFetch.active).toLocaleString('en-AU'), inline: true },
                    { name: 'Critical', value: (apiFetch.critical).toLocaleString('en-AU'), inline: true },
                    { name: 'Recovered', value: (apiFetch.recovered).toLocaleString('en-AU')},
                    { name: 'Deaths', value: (apiFetch.deaths).toLocaleString('en-AU'), inline: true },
                    { name: 'Deaths today', value: (apiFetch.todayDeaths).toLocaleString('en-AU'), inline: true },
                )
                .setFooter(`Fetched from ${api.covid}all.`);
            
            await interaction.reply({ embeds: [worldwideEmbed], components: [button] })
        } else if(interaction.options.getSubcommand() === 'continent') {
            const continent = interaction.options.getString('area');
            const apiContinent = await fetch(`${api.covid}continents/${continent}`).then(res => res.json());

            const continentEmbed = new MessageEmbed()
                .setColor(config.embed.colour)
                .setTitle(`COVID-19 statistics for \`${apiContinent.continent}\``)
                .setThumbnail('https://i.imgur.com/dVIHiYt.png')
                .addFields(
                    { name: 'Cases', value: (apiContinent.cases).toLocaleString('en-AU'), inline: true },
                    { name: 'Cases per 1M', value: (apiContinent.casesPerOneMillion).toLocaleString('en-AU'), inline: true },
                    { name: 'Cases Today', value: (apiContinent.todayCases).toLocaleString('en-AU'), inline: true },
                    { name: 'Active', value: (apiContinent.active).toLocaleString('en-AU'), inline: true },
                    { name: 'Critical', value: (apiContinent.critical).toLocaleString('en-AU'), inline: true },
                    { name: 'Recovered', value: (apiContinent.recovered).toLocaleString('en-AU')},
                    { name: 'Deaths', value: (apiContinent.deaths).toLocaleString('en-AU'), inline: true },
                    { name: 'Deaths today', value: (apiContinent.todayDeaths).toLocaleString('en-AU'), inline: true },
                )
                .setFooter(`Fetched from ${api.covid}continents/${continent}.`);
        
            await interaction.reply({ embeds: [continentEmbed], components: [button] })
        } else if(interaction.options.getSubcommand() === 'country') {
            const country = interaction.options.getString('region');
            const apiCountry = await fetch(`${api.covid}countries/${country}`).then(res => res.json());

            const countryEmbed = new MessageEmbed()
                .setColor(config.embed.colour)
                .setTitle(`COVID-19 statistics for \`${apiCountry.country}\``)
                .setThumbnail(apiCountry.countryInfo.flag)
                .addFields(
                    { name: 'Cases', value: (apiCountry.cases).toLocaleString('en-AU'), inline: true },
                    { name: 'Cases per 1M', value: (apiCountry.casesPerOneMillion).toLocaleString('en-AU'), inline: true },
                    { name: 'Cases Today', value: (apiCountry.todayCases).toLocaleString('en-AU'), inline: true },
                    { name: 'Active', value: (apiCountry.active).toLocaleString('en-AU'), inline: true },
                    { name: 'Critical', value: (apiCountry.critical).toLocaleString('en-AU'), inline: true },
                    { name: 'Recovered', value: (apiCountry.recovered).toLocaleString('en-AU')},
                    { name: 'Deaths', value: (apiCountry.deaths).toLocaleString('en-AU'), inline: true },
                    { name: 'Deaths today', value: (apiCountry.todayDeaths).toLocaleString('en-AU'), inline: true },
                )
                .setFooter(`Fetched from ${api.covid}countries/${country}.`);
        
            await interaction.reply({ embeds: [countryEmbed], components: [button] })
        }
    }
}