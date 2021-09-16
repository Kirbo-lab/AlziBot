console.log('\n'.repeat(process.stdout.rows));

// #region Import and declare
const { readdirSync } = require('fs');
const os = require('os');
const colors = require('colors');

const user = os.userInfo().username;
const host = os.hostname();
var date_time = new Date();
let hour = ("0" + date_time.getHours()).slice(-2);
let minute = ("0" + date_time.getMinutes()).slice(-2);

console.log(`// Running as` + ` ${user}`.white.bold + ` on` + ` ${host}`.white.bold + ` at` + ` ${__dirname}`.white.bold + `.\n`)
// #endregion Import and declare

// #region Create new Discord instance
const { Client, Collection, Intents } = require('discord.js');
const config = require('./resources/config.json');

const Botphyte = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.DIRECT_MESSAGES] });
console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__dirname}/botphyte.js)`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Created a new 'Client' object named 'Botphyte' with intents 'Intents.FLAGS.GUILDS', 'Intents.FLAGS.GUILD_MEMBERS', 'Intents.FLAGS.GUILD_MESSAGES', 'Intents.FLAGS.GUILD_MESSAGE_REACTIONS', 'Intents.FLAGS.GUILD_VOICE_STATES', and 'Intents.FLAGS.DIRECT_MESSAGES'.\n`);
// #endregion Create new Discord instance

// #region Handler
const eventFolders = readdirSync(`./src/resources/events`);

for (const folder of eventFolders) {
	const eventFiles = readdirSync(`./src/resources/events/${folder}`).filter(file => file.endsWith('.js'));

	for (const file of eventFiles) {
		const event = require(`./resources/events/${folder}/${file}`);
		if (event.once) {
			Botphyte.once(event.name, (...args) => event.execute(...args));
			console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__dirname}/botphyte.js)`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Successfully loaded ${event.name}!\n`);
		} else {
			Botphyte.on(event.name, (...args) => event.execute(...args))
			console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__dirname}/botphyte.js)`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Successfully loaded ${event.name}!\n`);
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
		console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__dirname}/botphyte.js)`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + `Successfully loaded /${command.data.name}!\n`);
	}
}

Botphyte.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = Botphyte.commands.get(interaction.commandName);

	if(!command) return;
    
	try {
    	await command.execute(interaction, Botphyte);
    	console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__dirname}/botphyte.js)`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` "${interaction.user.tag} (${interaction.user.id})" at "#${interaction.channel.name} (${interaction.channel.id})" ran "/${command.data.name}" that triggered an interaction.\n`);
	} catch (error) {
		console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__dirname}/botphyte.js)`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` "${interaction.user.tag} (${interaction.user.id})" at "#${interaction.channel.name} (${interaction.channel.id})" ran "/${command.data.name}" that tried to trigger an interaction, but failed.\n${error}\n`);
    	return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});
// #endregion Handler

// Log in to Discord
Botphyte.login(config.bot.token);