const { readdirSync } = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const colors = require('colors');
const bot = require('./misc/configuration/bot.js');
let date_time = new Date();
let hour = ("0" + date_time.getHours()).slice(-2);
let minute = ("0" + date_time.getMinutes()).slice(-2);

const commands = [];

const commandFolders = readdirSync(`./src/resources/commands`);

for (const folder of commandFolders) {
	const commandFiles = readdirSync(`./src/resources/commands/${folder}`).filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		commands.push(command.data.toJSON());
		console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Successfully deployed '${folder} > ${file}'!\n`);
	}
}

const rest = new REST({ version: '9' }).setToken(bot.application.token);

(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(bot.application.client, bot.guild.main),
			{ body: commands },
		);

		console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Successfully registered application commands to main server!\n`);
	} catch (error) {
		console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(ERROR)\n`.bold + `└─`.white + ` ${error}`);
	}
})();