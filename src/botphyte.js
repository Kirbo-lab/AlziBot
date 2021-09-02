const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const Botphyte = new Client({ intents: [Intents.FLAGS.GUILDS] });

Botphyte.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	Botphyte.commands.set(command.data.name, command);
}

Botphyte.once('ready', () => {
	console.log('Ready!');
});

Botphyte.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = Botphyte.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

Botphyte.login(token);