// Made with <3 by Pix3l_.

console.log('\n'.repeat(process.stdout.rows));

const { readdirSync } = require('fs');
const os = require('os');
const colors = require('colors');
const user = os.userInfo().username;
const host = os.hostname();
let date_time = new Date();
let hour = ("0" + date_time.getHours()).slice(-2);
let minute = ("0" + date_time.getMinutes()).slice(-2);

console.log(`// Running as` + ` ${user}`.white.bold + ` on` + ` ${host}`.white.bold + ` at` + ` ${__dirname}`.white.bold + `.\n`)

const { Client, Collection, Intents } = require('discord.js');
const bot = require('./resources/misc/configuration/bot.js');
const Botphyte = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.DIRECT_MESSAGES] });

const eventFolders = readdirSync(`./src/resources/events`);

for (const folder of eventFolders) {
	const eventFiles = readdirSync(`./src/resources/events/${folder}`).filter(file => file.endsWith('.js'));

	for (const file of eventFiles) {
		const event = require(`./resources/events/${folder}/${file}`);
		if (event.once) {
			Botphyte.once(event.name, (...args) => event.execute(...args));
			console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Successfully loaded '${folder} > ${file}'!\n`);
		} else {
			Botphyte.on(event.name, (...args) => event.execute(...args))
			console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Successfully loaded '${folder} > ${file}!\n`);
		}
	}
}

Botphyte.commands = new Collection();
const commandFolders = readdirSync(`./src/resources/commands`);

for (const folder of commandFolders) {
	const commandFiles = readdirSync(`./src/resources/commands/${folder}`).filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./resources/commands/${folder}/${file}`);
		Botphyte.commands.set(command.data.name, command);
		console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Successfully loaded '${folder} > ${file}'!\n`);
	}
}

Botphyte.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = Botphyte.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction, Botphyte);
		console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(LOG)`.bold + ` (/${command.data.name})\n` + `└─`.white + ` "${interaction.user.tag}" (${interaction.user.id}) triggered an interaction at "#${interaction.channel.name}" (${interaction.channel.id}), on "${interaction.guild.name}" (${interaction.guild.id}). \n`);
	} catch (error) {
		console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__filename})`.brightYellow.bold + ` ` + `(ERROR)`.bold + ` (/${command.data.name})\n` + `└─`.white + ` "${interaction.user.tag}" (${interaction.user.id}) tried to trigger an interaction at "#${interaction.channel.name}" (${interaction.channel.id}), on "${interaction.guild.name}" (${interaction.guild.id}), but returned an error.\n${error}\n`);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

Botphyte.login(bot.application.token);