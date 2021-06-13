const Discord = require('discord.js');
const client = new Discord.Client();
const c = require('ansi-colors');
const config = require('./config.json');

client.on('ready', () => {
    console.log(c.green("Estoy online puta"));
})

client.on('guildMemberAdd', async(member) => {

    member.roles.add("846120479592677446");
    member.roles.add("846120570709606440");

    member.roles.add("846120351968133141");
    member.roles.add("792205518118060052");

    member.roles.add("846119980097077269");

    member.roles.add("846119980097077269");
    member.roles.add("846119969740947467");

    member.roles.add("792205526947069954");
    member.roles.add("792205517925253180");

    member.roles.add("792205474585509888");
    member.roles.add("792205506940502046");

    member.roles.add("850200869730779146");
    member.roles.add("850201015784701993");

    member.roles.add("846154614565765121");
    member.roles.add("846154763636834324");

    client.channels.cache.find(ch => ch.id === "789949108642381846").send(`:cyclone: <@${member.id}>, BIENVENID@ NUKETOWN DE LINKMEGA :cyclone: \nPREPARA EL OJETE Y DISFRUTA:)\nINVITE A SUS PANAS <:emoji_5:836692090959560735>`)
})

client.login(config.token);