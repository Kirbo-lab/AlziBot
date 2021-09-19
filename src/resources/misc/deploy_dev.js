const { readdirSync } = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('../config.json');
const server = require('./json/server.json');
const colors = require('colors');
let date_time = new Date();
let hour = ("0" + date_time.getHours()).slice(-2);
let minute = ("0" + date_time.getMinutes()).slice(-2);

const commands = [];

const commandFolders = readdirSync(`./src/resources/commands`);

for (const folder of commandFolders) {
	const commandFiles = readdirSync(`./src/resources/commands/${folder}`).filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`../commands/${folder}/${file}`);
		commands.push(command.data.toJSON());
		console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Successfully deployed '${folder} > ${file}'!\n`);
	}
}

const rest = new REST({ version: '9' }).setToken(config.bot.token);

(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(config.bot.clientID, server.misc.devGuildID),
			{ body: commands },
		);

		console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Successfully registered all application commands!`);
	} catch (error) {
		console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(ERROR)\n`.bold + `└─`.white + ` ${error}`);
	}
})();