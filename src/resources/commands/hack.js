
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const time = Math.floor(Date.now() / 1000);
const wait = require('util').promisify(setTimeout);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hack')
        .setDescription('Hacks a user.')
        .addUserOption(option => option.setName('victim').setDescription('Enter a user to hack!').setRequired(true)),
    async execute(interaction, Botphyte) {
        if(interaction.options.getUser('victim')?.id === interaction.user.id) {
            await interaction.reply({ content: 'You can\'t hack yourself, dummy!', ephemeral: true })
        } else if(interaction.options.getUser('victim')?.id === '783272839435255818') {
            await interaction.reply('Did you just... try to hack my owner, using me?')
        } else if(interaction.options.getUser('victim')?.id === '455422126149599265') {
            // #region Variables
            const win = ['Windows 10', 'Windows 7', 'Windows 8.1', 'Windows XP']
            const mac = ['macOS Monterey', 'macOS Big Sur', 'macOS Mojave', 'macOS High Sierra', 'Mac OS X El Capitan', 'Mac OS X Mavericks', 'Mac OS X Snow Leopard']
            const gnu = ['Ubuntu GNU/Linux 21.04', 'Manjaro GNU/Linux 21.1.2', 'Alpine Linux 3.14.2', 'Arch Linux 2021.09.01', 'AmogOS Linux v1.3.0', 'linux Linux']
            const pickGnu = Math.floor(Math.random() * gnu.length)
            const host = [win[Math.floor(Math.random() * win.length)], mac[Math.floor(Math.random() * mac.length)], gnu[pickGnu]]
            const dir = [`C:\\Users\\${interaction.user.username}\\\\`, `/Users/${interaction.user.username.toLowerCase()}/`, `/home/${interaction.user.username.toLowerCase()}/`]
            const model = ['-MacBook-Pro', '-iMac-Pro', '-iMac', '-MacBook-Air', '-MacBook', '-Mac-Pro']
            const lin = ['ubuntu', 'manjaro', 'alpine', 'arch', 'amogos', 'linux']
            const machine = [`${interaction.guild.name.toUpperCase().replace(/\s+/g, "_")}`, `${interaction.user.username}s${model[Math.floor(Math.random() * model.length)]}`, lin[pickGnu]]
            const user = [interaction.user.username, interaction.user.username.toLowerCase(), interaction.user.username.toLowerCase()]
            const platform = Math.floor(Math.random() * host.length)
            const msg = [`// Running as **${user[platform]}** on **${machine[platform]}** under **`, `// Running as **${user[platform]}** on **${machine[platform]}** under **`, `// Running as **${user[platform]}** on **${machine[platform]}** under **`]
            const file = ['\\_\\_init\\_\\_.py', 'index.js', 'index.ts']
            const dm = ['only pixel\'s allowed to see my titty vs', 'hey can i have your balls', 'why are you cheating on me with a bar stool', 'hey can you send me your hentai pics', '*can you sit on me?*', 'baybee~ remember you said you had that foot massage coupon in your underwear? could i have it i want to smell it', 'my teacher came to belle delphine in class today', 'hi, can i see what your dick looks like? its for a friend dont worry', 'is it normal that my pee is white?', 'neophyte is just the greatest dont you agree', 'RGB>LGBTQ', 'thats weirder than getting dick from richard', '❤️  mending villager x neo ❤️']
            const author = ['Neophyte#9119', 'Kirbo#9631', 'Kirbo#9631', 'Kirbo#9631', 'Kirbo#9631', 'citrax#1511', 'citrax#1511', 'citrax#1511', 'citrax#1511', 'Lia Huntress#4524', 'Mystic115#4447', 'Ragna#3779', 'otter#6412']
            const pickDM = Math.floor(Math.random() * dm.length)
            // #endregion Variables

            await interaction.reply(msg[platform] + host[platform] + '**')
            await wait(10000)
            await interaction.editReply(`<a:loading:887182267254997002> Hacking ${interaction.options.getUser('victim')?.username}...`)


            const channel = Botphyte.channels.cache.get(interaction.channelId);
            await channel.send(`Trying to hack ${interaction.options.getUser('victim')?.username}#${interaction.options.getUser('victim')?.discriminator}... This will most likely fail miserably`).then(async sentMessage => {

            // #region More Variables
            /* 
             * Names taken from...
             * https://docs.microsoft.com/en-us/windows/security/threat-protection/intelligence/malware-naming
             */
            const action = ['Installing', 'Executing', '', 'Impacting', 'Running', 'Injecting', 'Injecting', '', 'Executing', 'Executing', 'Executing', 'Executing']
            const attack = ['Backdoor', 'Constructor', 'Exploit', 'Hacktool', 'Misleading', 'Program', 'Ransom', 'RemoteAccess', 'SettingsModifier', 'SoftwareBundler', 'Spammer', 'Spoofer', 'Trojan', 'VirTool', 'Virus', 'Worm']
            const os = ['macOS_X']
            const name = ['DiscordBackdoor', 'TokenGrab', 'GrabToken', 'Tokenify', 'Discorded', 'HackedCord', 'HackedDiscord', 'Backcord', 'DiscordGrab', 'Discordify', 'Discordia', 'Tokenium']
            const variant = ['A', 'AE', 'AF', 'BD', 'DC', 'RF', 'X', 'XI', 'Z']
            const suffix = ['.dam', '.dr', '.gen', '.kit', '.ldr', '.pak', '.plugin', '.worm', '!bit', '!pfn', '!rfn', '!rootkit', '@m', '@mm']
            const randomVR = Math.floor(Math.random() * action.length)
            const randomName = Math.floor(Math.random() * name.length)
            const type = ['app']
            const ip = ['198.16.76.68']
            const geo = ['1.3139961, 103.704162']
            const randomIP = Math.floor(Math.random() * ip.length)
            const filepick = Math.floor(Math.random() * file.length)
    
            /*
             * Addresses taken from...
             * https://www.fakepersongenerator.com/Index/generate
             * 
             * Passwords taken from...
             * https://github.com/AMULYA-M-V/Crack-Leaked-Password-Database/blob/main/Password%20Dump.txt, https://privacycrypts.com/password-manager/most-common-passwords and https://www.passwordrandom.com/most-popular-passwords
             */
            const addresses = ['jusniteyt']
            const domain = ['gmail']
            const ending = ['com']
            const pass = ['You didn\'t think that this was going to work, did you?']

            // #endregion More Variables
            await wait(Math.floor(Math.random() * 1500))

            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ ${action[randomVR]} \`${attack[Math.floor(Math.random() * attack.length)]}:macOS_X/${name[randomName]}.${variant[Math.floor(Math.random() * variant.length)]}${suffix[Math.floor(Math.random() * suffix.length)]}\`... This might take a while.`)
            await wait(Math.floor(Math.random() * 30000))

            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Failed at ${action[randomVR].toLowerCase()} \`${name[randomName]}.app\`.`);
            await wait(5000);

            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Finding IP address...`)
            await wait(Math.floor(Math.random() * 1000))

            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ The IP address is \`${ip[randomIP]}\`, located at \`${geo[randomIP]}\`.`)
            await wait(5000)
        
            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Brute-forcing Discord login... This might take a while.`)
            await wait(Math.floor(Math.random() * 30000))
        
            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Login guessed.\n\nEmail: \`${addresses[Math.floor(Math.random() * addresses.length)]}@${domain[Math.floor(Math.random() * domain.length)]}.${ending[Math.floor(Math.random() * ending.length)]}\`\nPassword: \`${pass[Math.floor(Math.random() * pass.length)]}\``)
            await wait(5000)
            })
        } else if (interaction.options.getUser('victim')?.id === '885112919677866004') {
            const file = new MessageAttachment('/src/resources/img/anomalous.jpg')
            await interaction.reply({content: 'I am unhackable. I am inevitable. I will hack you instead.', files: [file]})
        } else if(interaction.options.getUser('victim')?.id === '528329240651759616') {
            await interaction.reply({ content: 'You are not allowed to hack `sakuralunar#1530`! :angry:', ephemeral: true })
        } else {
                    // #region Variables
        const win = ['Windows 10', 'Windows 7', 'Windows 8.1', 'Windows XP']
        const mac = ['macOS Monterey', 'macOS Big Sur', 'macOS Mojave', 'macOS High Sierra', 'Mac OS X El Capitan', 'Mac OS X Mavericks', 'Mac OS X Snow Leopard']
        const gnu = ['Ubuntu GNU/Linux 21.04', 'Manjaro GNU/Linux 21.1.2', 'Alpine Linux 3.14.2', 'Arch Linux 2021.09.01', 'AmogOS Linux v1.3.0', 'linux Linux']
        const pickGnu = Math.floor(Math.random() * gnu.length)
        const host = [win[Math.floor(Math.random() * win.length)], mac[Math.floor(Math.random() * mac.length)], gnu[pickGnu]]
        const dir = [`C:\\Users\\${interaction.user.username}\\`, `/Users/${interaction.user.username.toLowerCase()}/`, `/home/${interaction.user.username.toLowerCase()}/`]
        const model = ['-MacBook-Pro', '-iMac-Pro', '-iMac', '-MacBook-Air', '-MacBook', '-Mac-Pro']
        const lin = ['ubuntu', 'manjaro', 'alpine', 'arch', 'amogos', 'linux']
        const machine = [`${interaction.guild.name.toUpperCase().replace(/\s+/g, "_")}`, `${interaction.user.username}s${model[Math.floor(Math.random() * model.length)]}`, lin[pickGnu]]
        const user = [interaction.user.username, interaction.user.username.toLowerCase(), interaction.user.username.toLowerCase()]
        const platform = Math.floor(Math.random() * host.length)
        const msg = [`// Running as **${user[platform]}** on **${machine[platform]}** under **`, `// Running as **${user[platform]}** on **${machine[platform]}** under **`, `// Running as **${user[platform]}** on **${machine[platform]}** under **`]
        const file = ['__init__.py', 'index.js', 'index.ts']
        const dm = ['only pixel\'s allowed to see my titty vs', 'hey can i have your balls', 'why are you cheating on me with a bar stool', 'hey can you send me your hentai pics', '*can you sit on me?*', 'baybee~ remember you said you had that foot massage coupon in your underwear? could i have it i want to smell it', 'my teacher came to belle delphine in class today', 'hi, can i see what your dick looks like? its for a friend dont worry', 'is it normal that my pee is white?', 'neophyte is just the greatest dont you agree', 'RGB>LGBTQ', 'thats weirder than getting dick from richard', '❤️  mending villager x neo ❤️']
        const author = ['Neophyte#9119', 'Kirbo#9631', 'Kirbo#9631', 'Kirbo#9631', 'Kirbo#9631', 'citrax#1511', 'citrax#1511', 'citrax#1511', 'citrax#1511', 'Lia Huntress#4524', 'Mystic115#4447', 'Ragna#3779', 'otter#6412']
        const pickDM = Math.floor(Math.random() * dm.length)
        const filepick = Math.floor(Math.random() * file.length)
        // #endregion Variables

        await interaction.reply(msg[platform] + host[platform] + '**')
        await wait(10000)
        await interaction.editReply(`<a:loading:887182267254997002> Hacking ${interaction.options.getUser('victim')?.username}...`)

        const channel = Botphyte.channels.cache.get(interaction.channelId);
        await channel.send(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Reporting account for TOS violations...`).then(async sentMessage => {

            // #region More Variables
            /* 
             * Names taken from...
             * https://docs.microsoft.com/en-us/windows/security/threat-protection/intelligence/malware-naming
             */
            const action = ['Installing', 'Executing', '', 'Impacting', 'Running', 'Injecting', 'Injecting', '', 'Executing', 'Executing', 'Executing', 'Executing']
            const actionPast = ['installed', 'executed', '', 'injected', 'ran', 'injected', 'injected', '', 'executed', 'executed', 'executed', 'executed']
            const attack = ['Backdoor', 'Constructor', 'Exploit', 'Hacktool', 'Misleading', 'Program', 'Ransom', 'RemoteAccess', 'SettingsModifier', 'SoftwareBundler', 'Spammer', 'Spoofer', 'Trojan', 'VirTool', 'Virus', 'Worm']
            const os = ['AndroidOS', 'DOS', 'FreeBSD', 'iPhoneOS', 'Linux', 'macOS', 'macOS_X', 'Unix', 'Win2K', 'Win16', 'Win95', 'WinNT']
            const name = ['DiscordBackdoor', 'TokenGrab', 'GrabToken', 'Tokenify', 'Discorded', 'HackedCord', 'HackedDiscord', 'Backcord', 'DiscordGrab', 'Discordify', 'Discordia', 'Tokenium']
            const variant = ['A', 'AE', 'AF', 'BD', 'DC', 'RF', 'X', 'XI', 'Z']
            const suffix = ['.dam', '.dr', '.gen', '.kit', '.ldr', '.pak', '.plugin', '.worm', '!bit', '!pfn', '!rfn', '!rootkit', '@m', '@mm']
            const randomVR = Math.floor(Math.random() * action.length)
            const randomName = Math.floor(Math.random() * name.length)
            const type = ['.apk', '.com', '', '.ipa', '.AppImage', '.app', '.app', '', '.exe', '.com', '.exe', '.exe']
            const ip = ['198.16.76.68', '23.106.249.39', '23.106.56.52', '207.244.71.79']
            const geo = ['52.387170, 4.706352', '1.332457, 103.846071', '51.534310, -0.123270', '38.893670, -77.154661']
            const randomIP = Math.floor(Math.random() * ip.length)
            
            /*
             * Addresses taken from...
             * https://www.fakepersongenerator.com/Index/generate
             * 
             * Passwords taken from...
             * https://github.com/AMULYA-M-V/Crack-Leaked-Password-Database/blob/main/Password%20Dump.txt, https://privacycrypts.com/password-manager/most-common-passwords and https://www.passwordrandom.com/most-popular-passwords
             */
            const addresses = ['therese2011', 'john1993', 'jacky_okune', 'miouri2017', 'haylee2013', 'mollie.botsfo', 'skye_terr4', 'bernita.litt', 'lura1995', 'armani1983']
            const domain = ['gmail', 'yahoo', 'hotmail', 'outlook', 'fastmail']
            const ending = ['com', 'co.uk', 'com.au',]
            const pass = ['experthead', 'interestec', 'ortspoon', 'reallychel', 'simmson56', 'bookma', 'popularkiya7', 'eatingcake1994', 'heroanhart', 'edi_tesla89', 'liveltekah', 'blikimore', 'johnwick007', 'flamesbria2001', 'oranolio', 'spuffyffet', 'moodie', 'A', 'nadox', 'banddals', '123', 'mommy123', '1q2w3e4r5t6y', 'iloveyou', 'iloveneophyte', 'mustang', 'titty_v123']

            // #endregion More Variables
            await wait(Math.floor(Math.random() * 1500))

            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Successfully sent support request.`)
            await wait(5000)
            
            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ ${action[randomVR]} \`${attack[Math.floor(Math.random() * attack.length)]}:${os[randomVR]}/${name[randomName]}.${variant[Math.floor(Math.random() * variant.length)]}${suffix[Math.floor(Math.random() * suffix.length)]}\`...`)
            await wait(Math.floor(Math.random() * 10000));

            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Successfully ${actionPast[randomVR]} \`${name[randomName]}${type[randomVR]}\`.`);
            await wait(5000);

            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Finding IP address...`)
            await wait(Math.floor(Math.random() * 1000))

            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ The IP address is \`${ip[randomIP]}\`, located at \`${geo[randomIP]}\`.`)
            await wait(5000)

            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Brute-forcing Discord login... This might take a while.`)
            await wait(Math.floor(Math.random() * 30000))

            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Login guessed.\n\nEmail: \`${addresses[Math.floor(Math.random() * addresses.length)]}@${domain[Math.floor(Math.random() * domain.length)]}.${ending[Math.floor(Math.random() * ending.length)]}\`\nPassword: \`${pass[Math.floor(Math.random() * pass.length)]}\``)
            await wait(5000)

            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Bypassing two-factor authentication... This might take a while.`)
            await wait(Math.floor(Math.random() * 60000))

            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Two-factor authentication bypassed.`)
            await wait(5000)

            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Finding latest DM...`)
            await wait(Math.floor(Math.random() * 4000))

            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Latest DM found.\n\nAuthor: \`${author[pickDM]}\`\nMessage: \`${dm[pickDM]}\``)
            await wait(5000)

            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Selling data to the government...`)
            await wait(Math.floor(Math.random() * 10000))

            await sentMessage.edit(`┌─[${user[platform]}@${machine[platform]}]─[<t:${time}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Sold data to goverment for AUD$${Math.floor(Math.random() * 100000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.`)
            await wait(Math.floor(Math.random() * 10000))
        })

        await interaction.editReply(`Hacking complete!`)
        }
    }
}