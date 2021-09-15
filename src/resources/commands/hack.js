// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageAttachment, MessageEmbed } = require("discord.js");
const wait = require("util").promisify(setTimeout);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hack")
    .setDescription("Hacks a user.")
    .addUserOption((option) =>
      option
        .setName("victim")
        .setDescription("Enter a user to hack!")
        .setRequired(true)
    ),
  async execute(interaction, Botphyte) {
    if (interaction.options.getUser("victim")?.id === interaction.user.id) {
      await interaction.reply({
        content: "You can't hack yourself, dummy!",
        ephemeral: true,
      });
    } else if (
      interaction.options.getUser("victim")?.id === "783272839435255818"
    ) {
      await interaction.reply(
        "Did you just... try to hack my owner, using me?"
      );
    } else if (
      interaction.options.getUser("victim")?.id === "455422126149599265"
    ) {
      // #region Variables
      const win = ["Windows 10", "Windows 7", "Windows 8.1", "Windows XP"];
      const mac = [
        "macOS Monterey",
        "macOS Big Sur",
        "macOS Mojave",
        "macOS High Sierra",
        "Mac OS X El Capitan",
        "Mac OS X Mavericks",
        "Mac OS X Snow Leopard",
      ];
      const gnu = [
        "Ubuntu GNU/Linux 21.04",
        "Manjaro GNU/Linux 21.1.2",
        "Alpine Linux 3.14.2",
        "Arch Linux 2021.09.01",
        "AmogOS Linux v1.3.0",
        "linux Linux",
      ];
      const pickGnu = Math.floor(Math.random() * gnu.length);
      const host = [
        win[Math.floor(Math.random() * win.length)],
        mac[Math.floor(Math.random() * mac.length)],
        gnu[pickGnu],
      ];
      const terminalsWin = [
        "Windows Console Host",
        "Windows Terminal",
        "FireCMD",
        "Cmder",
        "ConEmu",
        "Terminus",
      ];
      const terminalsMac = [
        "Apple Terminal",
        "Commander One",
        "iTerm2",
        "Terminator",
        "MacTerm",
        "Alacritty",
        "Hyper",
        "Terminus",
      ];
      const terminalsGnu = [
        "GNOME Terminal",
        "Konsole",
        "iTerm2",
        "Terminator",
        "Tilda",
        "Kitty",
        "Yakuake",
      ];
      const emu = [
        terminalsWin[Math.floor(Math.random() * terminalsWin.length)],
        terminalsMac[Math.floor(Math.random() * terminalsMac.length)],
        terminalsGnu[Math.floor(Math.random() * terminalsGnu.length)],
      ];
      const shellWin = [
        "cmd.exe",
        "PowerShell",
        "WSL2-Bash",
        "WSL2-Zsh",
        "DOS",
      ];
      const shellUnix = ["Bash", "ZSH", "CHSH", "SH", "Dash"];
      const shell = [
        shellWin[Math.floor(Math.random() * shellWin.length)],
        shellUnix[Math.floor(Math.random() * shellUnix.length)],
        shellUnix[Math.floor(Math.random() * shellUnix.length)],
      ];
      const dir = [
        `C:\\Users\\${interaction.user.username}\\\\`,
        `/Users/${interaction.user.username.toLowerCase()}/`,
        `/home/${interaction.user.username.toLowerCase()}/`,
      ];
      const model = [
        "-MacBook-Pro",
        "-iMac-Pro",
        "-iMac",
        "-MacBook-Air",
        "-MacBook",
        "-Mac-Pro",
      ];
      const lin = ["ubuntu", "manjaro", "alpine", "arch", "amogos", "linux"];
      const machine = [
        `${interaction.guild.name.toUpperCase().replace(/\s+/g, "_")}`,
        `${interaction.user.username}s${model[Math.floor(Math.random() * model.length)]
        }`,
        lin[pickGnu],
      ];
      const user = [
        interaction.user.username,
        interaction.user.username.toLowerCase(),
        interaction.user.username.toLowerCase(),
      ];
      const platform = Math.floor(Math.random() * host.length);
      const msg = [
        `// Running as **${user[platform]}** on **${machine[platform]}** under **`,
        `// Running as **${user[platform]}** on **${machine[platform]}** under **`,
        `// Running as **${user[platform]}** on **${machine[platform]}** under **`,
      ];
      const file = ["\\_\\_init\\_\\_.py", "index.js", "index.ts"];
      const pyVer = ["Python 3", "Python 2.7"];
      const esVer = [
        "ES1",
        "ES2",
        "ES3",
        "ES4",
        "ES5.1",
        "ES2015",
        "ES2016",
        "ES2017",
        "ES2018",
        "ES2019",
        "ES2020",
        "ES2021",
      ];
      const language = [
        pyVer[Math.floor(Math.random() * pyVer.length)],
        `JavaScript (${esVer[Math.floor(Math.random() * esVer.length)]})`,
        `TypeScript`,
      ];
      const filepick = Math.floor(Math.random() * file.length);

                /*
           * Names taken from...
           * https://docs.microsoft.com/en-us/windows/security/threat-protection/intelligence/malware-naming
           */
                const action = [
                  "Installing",
                ];
                const actionPast = [
                  "installed",
                ];
                const attack = [
                  "Backdoor",
                  "Constructor",
                  "Exploit",
                  "Hacktool",
                  "Misleading",
                  "Program",
                  "Ransom",
                  "RemoteAccess",
                  "SettingsModifier",
                  "SoftwareBundler",
                  "Spammer",
                  "Spoofer",
                  "Trojan",
                  "VirTool",
                  "Virus",
                  "Worm",
                ];
                const os = [
                  "macOS_X",
                ];
                const name = [
                  "DiscordBackdoor",
                  "TokenGrab",
                  "GrabToken",
                  "Tokenify",
                  "Discorded",
                  "HackedCord",
                  "HackedDiscord",
                  "Backcord",
                  "DiscordGrab",
                  "Discordify",
                  "Discordia",
                  "Tokenium",
                ];
                const variant = ["A", "AE", "AF", "BD", "DC", "RF", "X", "XI", "Z"];
                const suffix = [
                  ".dam",
                  ".dr",
                  ".gen",
                  ".kit",
                  ".ldr",
                  ".pak",
                  ".plugin",
                  ".worm",
                  "!bit",
                  "!pfn",
                  "!rfn",
                  "!rootkit",
                  "@m",
                  "@mm",
                ];
                const randomVR = Math.floor(Math.random() * action.length);
                const randomName = Math.floor(Math.random() * name.length);
                const type = [
                  ".app",
                ];
                const ip = [
                  "198.16.76.68",
                  "23.106.249.39",
                  "23.106.56.52",
                  "207.244.71.79",
                ];
                const geo = [
                  "52.387170, 4.706352",
                  "1.332457, 103.846071",
                  "51.534310, -0.123270",
                  "38.893670, -77.154661",
                ];
                const randomIP = Math.floor(Math.random() * ip.length);
      
                const pickAttack = Math.floor(Math.random() * attack.length);
                const pickVariant = Math.floor(Math.random() * variant.length);
                const pickSuffix = Math.floor(Math.random() * suffix.length);
      
                const currency = [
                  "AUD",
                  "SGD",
                  "USD",
                  "IDR",
                  "CHF",
                  "EUR",
                  "CNY",
                  "GEL",
                  "JPY",
                  "PLN",
                  "NOK"
                ];
                const pickCur = currency[Math.floor(Math.random() * currency.length)];

      // #endregion Variables

      await interaction.reply(msg[platform] + host[platform] + "**");
      await wait(10000);
      await interaction.editReply(
        `<a:loading:887182267254997002> Hacking ${interaction.options.getUser("victim")?.username
        }... This will most likely fail.`
      );

      const channel = Botphyte.channels.cache.get(interaction.channelId);
      await channel
        .send(
          `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
            Date.now() / 1000
          )}>]─(${dir[platform]}${file[filepick]
          }) (LOG)\n└─$ Reporting account for TOS violations...`
        )
        .then(async (sentMessage) => {
          await wait(Math.floor(Math.random() * 1500));

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]
            }) (LOG)\n└─$ Failed to send support request.`
          );
          await wait(5000);

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ ${action[randomVR]
            } \`${attack[pickAttack]}:${os[randomVR]}/${name[randomName]}.${variant[pickVariant]
            }${suffix[pickSuffix]}\`...`
          );
          await wait(Math.floor(Math.random() * 10000));

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Successfully ${actionPast[randomVR]
            } \`${name[randomName]}${type[randomVR]}\`.`
          );
          await wait(5000);

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]
            }) (LOG)\n└─$ Finding IP address...`
          );
          await wait(Math.floor(Math.random() * 1000));

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]
            }) (LOG)\n└─$ The IP address is \`${ip[randomIP]}\`, located at \`${geo[randomIP]
            }\`.`
          );
          await wait(5000);

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]
            }) (LOG)\n└─$ Brute-forcing Discord login... This might take a while.`
          );
          await wait(Math.floor(Math.random() * 30000));

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]
            }) (LOG)\n└─$ Login guessed.\n\nEmail: \`jusniteyt@gmail.com\`\nPassword: \`You didn't think this would actually work, did you?\``
          );
          await wait(5000); 

          await sentMessage.delete
        });
        await wait(2500)

        const embed = new MessageEmbed()
        .setColor("#F44336")
        .setTitle("Hack failed - Summary")
        .addFields(
          { name: "Ran as", value: user[platform], inline: true },
          { name: "Ran on", value: machine[platform], inline: true },
          { name: "Ran under", value: host[platform], inline: true },
          { name: "Terminal Emulator", value: emu[platform], inline: true },
          { name: "Terminal Shell", value: shell[platform], inline: true },
          { name: "Script Language", value: language[randomVR], inline: true },
          {
            name: "Malware Sent",
            value: `\`${attack[pickAttack]}:${os[randomVR]}/${name[randomName]}.${variant[pickVariant]}${suffix[pickSuffix]}\``,
          },
          {
            name: "File Sent",
            value: `\`${name[randomName]}${type[randomVR]}\``,
          },
          { name: "IP address", value: ip[randomIP], inline: true },
          {
            name: "Position (Lat, Long)",
            value: geo[randomIP],
            inline: true,
          },
          { name: "Discord Token", value: '`Failed to catch token.`' },
          {
            name: "Email",
            value:
              '`jusniteyt@gmail.com`',
            inline: true
          },
          { name: "Password", value: '`You didn\'t think that this would actually work, did you?`', inline: true },
          { name: "Latest DM", value: "`Failed to fetch DMs.`" },
          { name: "DM author", value: "`Failed to fetch DMs.`" },
          {
            name: "Data Sold",
            value: `0 B`,
            inline: true,
          },
          { name: "Sold For", value: `0 ${pickCur}`, inline: true }
        );

        interaction.editReply({ content: 'Hack completed.', embeds: [embed] })
    } else if (
      interaction.options.getUser("victim")?.id === "885112919677866004"
    ) {
      const file = new MessageAttachment("./src/resources/img/anomalous.jpg");
      await interaction.reply({
        content: "I am unhackable. I am inevitable. I will hack you instead.",
        files: [file],
      });
    } else if (
      interaction.options.getUser("victim")?.id === "528329240651759616"
    ) {
      await interaction.reply({
        content: "You are not allowed to hack `sakuralunar#1530`! :angry:",
        ephemeral: true,
      });
    } else {
      // #region Variables
      const win = ["Windows 10", "Windows 7", "Windows 8.1", "Windows XP"];
      const mac = [
        "macOS Monterey",
        "macOS Big Sur",
        "macOS Mojave",
        "macOS High Sierra",
        "Mac OS X El Capitan",
        "Mac OS X Mavericks",
        "Mac OS X Snow Leopard",
      ];
      const gnu = [
        "Ubuntu GNU/Linux 21.04",
        "Manjaro GNU/Linux 21.1.2",
        "Alpine Linux 3.14.2",
        "Arch Linux 2021.09.01",
        "AmogOS Linux v1.3.0",
        "linux Linux",
      ];
      const pickGnu = Math.floor(Math.random() * gnu.length);
      const host = [
        win[Math.floor(Math.random() * win.length)],
        mac[Math.floor(Math.random() * mac.length)],
        gnu[pickGnu],
      ];
      const terminalsWin = [
        "Windows Console Host",
        "Windows Terminal",
        "FireCMD",
        "Cmder",
        "ConEmu",
        "Terminus",
      ];
      const terminalsMac = [
        "Apple Terminal",
        "Commander One",
        "iTerm2",
        "Terminator",
        "MacTerm",
        "Alacritty",
        "Hyper",
        "Terminus",
      ];
      const terminalsGnu = [
        "GNOME Terminal",
        "Konsole",
        "iTerm2",
        "Terminator",
        "Tilda",
        "Kitty",
        "Yakuake",
      ];
      const emu = [
        terminalsWin[Math.floor(Math.random() * terminalsWin.length)],
        terminalsMac[Math.floor(Math.random() * terminalsMac.length)],
        terminalsGnu[Math.floor(Math.random() * terminalsGnu.length)],
      ];
      const shellWin = [
        "cmd.exe",
        "PowerShell",
        "WSL2-Bash",
        "WSL2-Zsh",
        "DOS",
      ];
      const shellUnix = ["Bash", "ZSH", "CHSH", "SH", "Dash"];
      const shell = [
        shellWin[Math.floor(Math.random() * shellWin.length)],
        shellUnix[Math.floor(Math.random() * shellUnix.length)],
        shellUnix[Math.floor(Math.random() * shellUnix.length)],
      ];
      const dir = [
        `C:\\Users\\${interaction.user.username}\\\\`,
        `/Users/${interaction.user.username.toLowerCase()}/`,
        `/home/${interaction.user.username.toLowerCase()}/`,
      ];
      const model = [
        "-MacBook-Pro",
        "-iMac-Pro",
        "-iMac",
        "-MacBook-Air",
        "-MacBook",
        "-Mac-Pro",
      ];
      const lin = ["ubuntu", "manjaro", "alpine", "arch", "amogos", "linux"];
      const machine = [
        `${interaction.guild.name.toUpperCase().replace(/\s+/g, "_")}`,
        `${interaction.user.username}s${model[Math.floor(Math.random() * model.length)]
        }`,
        lin[pickGnu],
      ];
      const user = [
        interaction.user.username,
        interaction.user.username.toLowerCase(),
        interaction.user.username.toLowerCase(),
      ];
      const platform = Math.floor(Math.random() * host.length);
      const msg = [
        `// Running as **${user[platform]}** on **${machine[platform]}** under **`,
        `// Running as **${user[platform]}** on **${machine[platform]}** under **`,
        `// Running as **${user[platform]}** on **${machine[platform]}** under **`,
      ];
      const file = ["\\_\\_init\\_\\_.py", "index.js", "index.ts"];
      const pyVer = ["Python 3", "Python 2.7"];
      const esVer = [
        "ES1",
        "ES2",
        "ES3",
        "ES4",
        "ES5.1",
        "ES2015",
        "ES2016",
        "ES2017",
        "ES2018",
        "ES2019",
        "ES2020",
        "ES2021",
      ];
      const language = [
        pyVer[Math.floor(Math.random() * pyVer.length)],
        `JavaScript (${esVer[Math.floor(Math.random() * esVer.length)]})`,
        `TypeScript`,
      ];
      const dm = [
        "only pixel's allowed to see my titty vs",
        "hey can i have your balls",
        "why are you cheating on me with a bar stool",
        "hey can you send me your hentai pics",
        "*can you sit on me?*",
        "baybee~ remember you said you had that foot massage coupon in your underwear? could i have it i want to smell it",
        "my teacher came to belle delphine in class today",
        "hi, can i see what your dick looks like? its for a friend dont worry",
        "is it normal that my pee is white?",
        "neophyte is just the greatest dont you agree",
        "RGB>LGBTQ",
        "thats weirder than getting dick from richard",
        "❤️  mending villager x neo ❤️",
      ];
      const author = [
        "Neophyte#9119",
        "Kirbo#9631",
        "Kirbo#9631",
        "Kirbo#9631",
        "Kirbo#9631",
        "citrax#1511",
        "citrax#1511",
        "citrax#1511",
        "citrax#1511",
        "Lia Huntress#4524",
        "Mystic115#4447",
        "Ragna#3779",
        "otter#6412",
      ];
      const pickDM = Math.floor(Math.random() * dm.length);
      const filepick = Math.floor(Math.random() * file.length);
      const unit = [
        "PB",
        "PiB",
        "TB",
        "TiB",
        "GB",
        "GiB",
        "MB",
        "MiB",
        "KB",
        "KiB",
        "B",
      ];

                /*
           * Names taken from...
           * https://docs.microsoft.com/en-us/windows/security/threat-protection/intelligence/malware-naming
           */
          const action = [
            "Installing",
            "Executing",
            "Installing",
            "Impacting",
            "Running",
            "Injecting",
            "Injecting",
            "Installing",
            "Executing",
            "Executing",
            "Executing",
            "Executing",
          ];
          const actionPast = [
            "installed",
            "executed",
            "installed",
            "injected",
            "ran",
            "injected",
            "injected",
            "installed",
            "executed",
            "executed",
            "executed",
            "executed",
          ];
          const attack = [
            "Backdoor",
            "Constructor",
            "Exploit",
            "Hacktool",
            "Misleading",
            "Program",
            "Ransom",
            "RemoteAccess",
            "SettingsModifier",
            "SoftwareBundler",
            "Spammer",
            "Spoofer",
            "Trojan",
            "VirTool",
            "Virus",
            "Worm",
          ];
          const os = [
            "AndroidOS",
            "DOS",
            "FreeBSD",
            "iPhoneOS",
            "Linux",
            "macOS",
            "macOS_X",
            "Unix",
            "Win2K",
            "Win16",
            "Win95",
            "WinNT",
          ];
          const name = [
            "DiscordBackdoor",
            "TokenGrab",
            "GrabToken",
            "Tokenify",
            "Discorded",
            "HackedCord",
            "HackedDiscord",
            "Backcord",
            "DiscordGrab",
            "Discordify",
            "Discordia",
            "Tokenium",
          ];
          const variant = ["A", "AE", "AF", "BD", "DC", "RF", "X", "XI", "Z"];
          const suffix = [
            ".dam",
            ".dr",
            ".gen",
            ".kit",
            ".ldr",
            ".pak",
            ".plugin",
            ".worm",
            "!bit",
            "!pfn",
            "!rfn",
            "!rootkit",
            "@m",
            "@mm",
          ];
          const randomVR = Math.floor(Math.random() * action.length);
          const randomName = Math.floor(Math.random() * name.length);
          const type = [
            ".apk",
            ".com",
            " ",
            ".ipa",
            ".AppImage",
            ".app",
            ".app",
            " ",
            ".exe",
            ".com",
            ".exe",
            ".exe",
          ];
          const ip = [
            "198.16.76.68",
            "23.106.249.39",
            "23.106.56.52",
            "207.244.71.79",
          ];
          const geo = [
            "52.387170, 4.706352",
            "1.332457, 103.846071",
            "51.534310, -0.123270",
            "38.893670, -77.154661",
          ];
          const randomIP = Math.floor(Math.random() * ip.length);

          const pickAttack = Math.floor(Math.random() * attack.length);
          const pickVariant = Math.floor(Math.random() * variant.length);
          const pickSuffix = Math.floor(Math.random() * suffix.length);

          /*
           * Addresses taken from...
           * https://www.fakepersongenerator.com/Index/generate
           *
           * Passwords taken from...
           * https://github.com/AMULYA-M-V/Crack-Leaked-Password-Database/blob/main/Password%20Dump.txt, https://privacycrypts.com/password-manager/most-common-passwords and https://www.passwordrandom.com/most-popular-passwords
           *
           * These tokens aren't real. I generated them with Discord's bot token generator
           */
          const token = [
            "ODU4OTk0NzgyNzQzNjkxMzA0.YNmPOw.8b98Xrhs3WByMyTraKqzasENo7M",
            "ODU4OTk0NzgyNzQzNjkxMzA0.YNmPOw.jiVJPx8hw9Os5CVLeHfODWnmUh8",
            "ODU4OTk0NzgyNzQzNjkxMzA0.YNmPOw.rl4UMkWEMsvYfAC7MZt9UGaD820",
            "ODU4OTk0NzgyNzQzNjkxMzA0.YNmPOw.7x1SoQlKWxNOjil09Nsu91hAZa0",
            "ODU4OTk0NzgyNzQzNjkxMzA0.YNmPOw.Zccc1RxvHri0Mv-MY2AdrZqtI68",
            "ODU4OTk0NzgyNzQzNjkxMzA0.YNmPOw.kTjOV-NVtGzRsoFQ0MICxSU_FAc",
            "ODU4OTk0NzgyNzQzNjkxMzA0.YNmPOw.BVh5jc3bJIawdi3lDk0R63O2Ds4",
            "ODU4OTk0NzgyNzQzNjkxMzA0.YNmPOw.w7LoWyUxJZ9-aRgkLeu5WFAibHU",
            "ODU4OTk0NzgyNzQzNjkxMzA0.YNmPOw.gU8oaywhKaRjBKejckoYxlyIYyc",
            "ODU4OTk0NzgyNzQzNjkxMzA0.YNmPOw.Zdyytk-um7sTkIZz1GMUbYVE0Uc",
          ];
          const addresses = [
            "therese2011",
            "john1993",
            "jacky_okune",
            "miouri2017",
            "haylee2013",
            "mollie.botsfo",
            "skye_terr4",
            "bernita.litt",
            "lura1995",
            "armani1983",
          ];
          const domain = ["gmail", "yahoo", "hotmail", "outlook", "fastmail"];
          const ending = ["com", "co.uk", "com.au"];
          const pass = [
            "experthead",
            "interestec",
            "ortspoon",
            "reallychel",
            "simmson56",
            "bookma",
            "popularkiya7",
            "eatingcake1994",
            "heroanhart",
            "edi_tesla89",
            "liveltekah",
            "blikimore",
            "johnwick007",
            "flamesbria2001",
            "oranolio",
            "spuffyffet",
            "moodie",
            "A",
            "nadox",
            "banddals",
            "123",
            "mommy123",
            "1q2w3e4r5t6y",
            "iloveyou",
            "iloveneophyte",
            "mustang",
            "titty_v123",
          ];
          const authtype = ["SMS-based", "App-based"];

          const pickToken = Math.floor(Math.random() * token.length);
          const pickAddress = Math.floor(Math.random() * addresses.length);
          const pickDomain = Math.floor(Math.random() * domain.length);
          const pickEnding = Math.floor(Math.random() * ending.length);
          const pickPass = Math.floor(Math.random() * pass.length);

          const moneyz = Math.floor(Math.random() * 100000)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          const currency = [
            "AUD",
            "SGD",
            "USD",
            "IDR",
            "CHF",
            "EUR",
            "CNY",
            "GEL",
            "JPY",
            "PLN",
            "NOK"
          ];
          const pickCur = currency[Math.floor(Math.random() * currency.length)];
      // #endregion Variables

      await interaction.reply(msg[platform] + host[platform] + "**");
      await wait(10000);
      await interaction.editReply(
        `<a:loading:887182267254997002> Hacking ${interaction.options.getUser("victim")?.username
        }...`
      );

      const channel = Botphyte.channels.cache.get(interaction.channelId);
      await channel
        .send(
          `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
            Date.now() / 1000
          )}>]─(${dir[platform]}${file[filepick]
          }) (LOG)\n└─$ Reporting account for TOS violations...`
        )
        .then(async (sentMessage) => {
          await wait(Math.floor(Math.random() * 1500));

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]
            }) (LOG)\n└─$ Successfully sent support request.`
          );
          await wait(5000);

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ ${action[randomVR]
            } \`${attack[pickAttack]}:${os[randomVR]}/${name[randomName]}.${variant[pickVariant]
            }${suffix[pickSuffix]}\`...`
          );
          await wait(Math.floor(Math.random() * 10000));

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]}) (LOG)\n└─$ Successfully ${actionPast[randomVR]
            } \`${name[randomName]}${type[randomVR]}\`.`
          );
          await wait(5000);

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]
            }) (LOG)\n└─$ Finding IP address...`
          );
          await wait(Math.floor(Math.random() * 1000));

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]
            }) (LOG)\n└─$ The IP address is \`${ip[randomIP]}\`, located at \`${geo[randomIP]
            }\`.`
          );
          await wait(5000);

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]
            }) (LOG)\n└─$ Brute-forcing Discord login... This might take a while.`
          );
          await wait(Math.floor(Math.random() * 30000));

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]
            }) (LOG)\n└─$ Login guessed.\n\nEmail: \`${addresses[pickAddress]
            }@${domain[pickDomain]}.${ending[pickEnding]}\`\nPassword: \`${pass[pickPass]
            }\``
          );
          await wait(5000);

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]
            }) (LOG)\n└─$ Bypassing two-factor authentication... This might take a while.`
          );
          await wait(Math.floor(Math.random() * 60000));

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]
            }) (LOG)\n└─$ Two-factor authentication bypassed.`
          );
          await wait(5000);

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]
            }) (LOG)\n└─$ Finding latest DM...`
          );
          await wait(Math.floor(Math.random() * 4000));

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]
            }) (LOG)\n└─$ Latest DM found.\n\nAuthor: \`${author[pickDM]
            }\`\nMessage: \`${dm[pickDM]}\``
          );
          await wait(5000);

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]
            }) (LOG)\n└─$ Selling data to the government...`
          );
          await wait(Math.floor(Math.random() * 10000));

          await sentMessage.edit(
            `┌─[${user[platform]}@${machine[platform]}]─[<t:${Math.floor(
              Date.now() / 1000
            )}>]─(${dir[platform]}${file[filepick]
            }) (LOG)\n└─$ Sold data to goverment for **${moneyz} ${pickCur}**.`
          );
          await wait(5000);

          await sentMessage.delete
        });
        const embed = new MessageEmbed()
        .setColor("#4CAF50")
        .setTitle("Hack successful! - Summary")
        .addFields(
          { name: "Ran as", value: user[platform], inline: true },
          { name: "Ran on", value: machine[platform], inline: true },
          { name: "Ran under", value: host[platform], inline: true },
          { name: "Terminal Emulator", value: emu[platform], inline: true },
          { name: "Terminal Shell", value: shell[platform], inline: true },
          { name: "Script Language", value: language[randomVR], inline: true },
          {
            name: "Malware Sent",
            value: `\`${attack[pickAttack]}:${os[randomVR]}/${name[randomName]}.${variant[pickVariant]}${suffix[pickSuffix]}\``,
          },
          {
            name: "File Sent",
            value: `\`${name[randomName]}${type[randomVR]}\``,
          },
          { name: "IP address", value: ip[randomIP], inline: true },
          {
            name: "Position (Lat, Long)",
            value: geo[randomIP],
            inline: true,
          },
          { name: "Discord Token", value: "`" + token[pickToken] + "`" },
          {
            name: "Email",
            value:
              "`" +
              addresses[pickAddress] +
              "@" +
              domain[pickDomain] +
              "." +
              ending[pickEnding] +
              "`",
            inline: true
          },
          { name: "Password", value: "`" + pass[pickDomain] + "`", inline: true },
          {
            name: "2-FA Type",
            value: authtype[Math.floor(Math.random() * authtype.length)],
            inline: true,
          },
          { name: "Latest DM", value: "`" + dm[pickDM] + "`" },
          { name: "DM author", value: "`" + author[pickDM] + "`" },
          {
            name: "Data Sold",
            value: `${Math.floor(Math.random() * 947)} ${unit[Math.floor(Math.random() * unit.length)]
              }`,
            inline: true,
          },
          { name: "Sold For", value: `${moneyz.toString()} ${pickCur}`, inline: true }
        );

        await wait(2500)
        interaction.editReply({ content: 'Hack completed.', embeds: [embed] })
    }
  },
};
