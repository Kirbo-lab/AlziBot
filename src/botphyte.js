console.log('\n'.repeat(process.stdout.rows));

// #region Import and declare
const fs = require('fs');
const os = require('os');
const colors = require('colors');

const user = os.userInfo().username;
const host = os.hostname();
var date_time = new Date();
let hour = ("0" + date_time.getHours()).slice(-2);
let minute = ("0" + date_time.getMinutes()).slice(-2);
// #endregion Import and declare

console.log(`// Running as` + ` ${user}`.white.bold + ` on` + ` ${host}`.white.bold + ` at` + ` ${__dirname}`.white.bold + `.\n`)

// #region Create new Discord instance
const { Client, Collection, Intents, MessageEmbed } = require('discord.js');
console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__dirname}/botphyte.js)`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Imported 'Client', 'Collection', 'Intents' and 'MessageEmbed' classes from package 'Discord.JS'.\n`);
const config = require('./resources/config.json');

const Botphyte = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.DIRECT_MESSAGES] });
console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__dirname}/botphyte.js)`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Created a new 'Client' object named 'Botphyte' with intents 'Intents.FLAGS.GUILDS'.\n`);
// #endregion Create new Discord instance

// #region Event Handler
const eventFiles = fs.readdirSync('./src/resources/events').filter(file => file.endsWith('.js'));

for(const file of eventFiles) {
	const event = require(`./resources/events/${file}`);
	if(event.once) {
		Botphyte.once(event.name, (...args) => event.execute(...args));
	} else {
		Botphyte.on(event.name, (...args) => event.execute(...args))
	}
}

console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__dirname}/botphyte.js)`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Initialized event handler.\n`);
// #endregion Event Handler

// #region Command Handler
Botphyte.commands = new Collection();
const commandFiles = fs.readdirSync('./src/resources/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./resources/commands/${file}`);
	Botphyte.commands.set(command.data.name, command);
}

Botphyte.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = Botphyte.commands.get(interaction.commandName);

	if(!command) return;
    
	try {
    	await command.execute(interaction, Botphyte);
    	console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__dirname}/botphyte.js)`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` "${interaction.user.tag}" at "#${interaction.channel.name}" triggered an interaction.\n`);
	} catch (error) {
    	console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__dirname}/botphyte.js)`.brightYellow.bold + ` ` + `(ERROR)\n`.bold + `└─`.white + ` ${error}\n`);
    	return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

console.log(`┌─ `.white + `[${hour}:${minute}]`.brightGreen.bold + ` ` + `(${__dirname}/botphyte.js)`.brightYellow.bold + ` ` + `(LOG)\n`.bold + `└─`.white + ` Initialized command handler.\n`);
// #endregion Command Handler

// Log in to Discord
Botphyte.login(config.bot.token);