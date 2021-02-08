const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Conected as " + client.user.tag);

    client.user.setActivity("My Little Pony")

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
        guild.channels.cache.forEach((channel) =>{
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
    });

    let channel = client.channels.cache.get("#")
})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }

    if(receivedMessage.content === "cavalo?"){
        receivedMessage.channel.send("CAVALO, " + receivedMessage.author.toString())
    } else if(receivedMessage.content === "boa noite cavalo"){
        receivedMessage.channel.send("boa noite, " + receivedMessage.author.toString(), {
            files: ["https://thumbs.dreamstime.com/b/sleeping-horse-9482052.jpg"]
        })
    } else if(receivedMessage.content === "cavalo selfie"){
        receivedMessage.channel.send("SORRIA, " + receivedMessage.author.toString(), {
            files: ["https://i.ytimg.com/vi/tioFCguWSIg/maxresdefault.jpg"]
        })
    }else if(receivedMessage.content === "bom dia cavalo"){
        receivedMessage.channel.send("bom dia, " + receivedMessage.author.toString(), {
            files: ["https://media1.giphy.com/media/IEbrIbqMDfIdO/giphy.gif?cid=ecf05e47t5rfds1phlxcvfnfgeropmips7infjnnbkcqex3n&rid=giphy.gif"]
        })
    } else if(receivedMessage.content === "cavalo juan"){
        receivedMessage.channel.send("juan. https://www.youtube.com/watch?v=H9aC5AGY9YU")
    }

    var frases = [
        "E a perua falou ta afim? E eu disse agora não",
        "Quem é a mocréia velha?",
        "Barangas como você também me deixam excitado",
        "Drake, cadê a porta?",
        "Poct poct poct fica de quatro nos bota sem dó",
        "Graças a Deus é sexta feira hein",
        "MAKONHA, https://www.youtube.com/watch?v=CzrlBjAgMZk"
    ]
    
    if(receivedMessage.content === "fala cavalo"){
        Say()
    }

    function Say(min, max){
        min = Math.ceil(0)
        max = Math.floor(frases.length)
        var number = Math.floor(Math.random() * (max - min)) + min
        receivedMessage.channel.send(frases[number])
    }
})

client.login("#");
