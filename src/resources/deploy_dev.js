const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('./config.json');
const colors = require('colors');
var date_time = new Date();
let hour = ("0" + date_time.getHours()).slice(-2);
let minute = ("0" + date_time.getMinutes()).slice(-2);

const commands = [];
const commandFiles = fs.readdirSync('./src/resources/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(config.bot.token);

(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(config.bot.clientID, config.bot.devGuildID),
			{ body: commands },
		);

		console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__dirname}/botphyte.js)`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Successfully registered application commands!`);
	} catch (error) {
		console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__dirname}/botphyte.js)`.brightYellow.bold + ` ` + `(ERROR)\n`.bold + `└─`.white + ` ${error}`);
	}
})();