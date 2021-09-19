
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

// #region Import and declare
const colors = require('colors');
const date_time = new Date();
const hour = ('0' + date_time.getHours()).slice(-2);
const minute = ('0' + date_time.getMinutes()).slice(-2);
// #endregion Import and declare

module.exports = {
	name: 'ready',
	once: true,
	execute(Botphyte) {
		Botphyte.user.setPresence({ activities: [{ name: 'over Neophyte\'s server | /botphyte', type: 'WATCHING' }], status: 'online' });
		console.log('┌─ '.white + `[${hour}:${minute}]`.brightGreen.bold + ' ' + `(${__filename})`.brightYellow.bold + ' ' + '(LOG)\n'.bold + '└─'.white + ' Changed status.\n');
		// #region Set status
		const statuses = [
			{ activities: [{ name: 'ttv_neophyte | /botphyte', type: 'WATCHING' }], status: 'online' },
			{ activities: [{ name: 'Belle Delphine | /botphyte', type: 'WATCHING' }], status: 'online' },
			{ activities: [{ name: 'Minecraft | /botphyte', type: 'PLAYING' }], status: 'online' },
			{ activities: [{ name: 'Neophyte | /botphyte', type: 'WATCHING' }], status: 'online' },
			{ activities: [{ name: 'over Neophyte\'s server | /botphyte', type: 'WATCHING' }], status: 'online' },
		];
		let i = 0;
		setInterval(() => {
			let status = statuses[i];
			if (!status) {
				status = statuses[0];
				i = 0;
			}
			Botphyte.user.setPresence(status);
			console.log('┌─ '.white + `[${hour}:${minute}]`.brightGreen.bold + ' ' + `(${__filename})`.brightYellow.bold + ' ' + '(LOG)\n'.bold + '└─'.white + ' Changed status.\n');
			i++;
		}, 43200000);
		// #endregion Set status

		console.log('┌─ '.white + `[${hour}:${minute}]`.brightGreen.bold + ' ' + `(${__filename})`.brightYellow.bold + ' ' + '(LOG)\n'.bold + '└─'.white + ` Logged in as ${Botphyte.user.tag}.\n`);
		console.log('┌─ '.white + `[${hour}:${minute}]`.brightGreen.bold + ' ' + `(${__filename})`.brightYellow.bold + ' ' + '(LOG)\n'.bold + '└─'.white + ' Ready!\n');
	},
};