//Start my bot!

const Discord = require("discord.js");
const config = require("./config.json");
const crash = ["Welcome to MMS", "Enjoy at MMS", "Peraturan tetap berlaku!", "tulis cg!help"];

const bot = new Discord.Client({disableEveryone: true});

//Bot is ready?

bot.on("ready", async () => {
    console.log(`Ayyeeee i'm ${bot.user.username} ready boissss!`)
    setInterval(() => {
        let crashed = Math.floor(Math.random() * (crash.length - 1) + 1)
    bot.user.setActivity(crash[crashed])
    }, 4000);
});

//Creating message!

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

//Adding automatic message sender!

bot.on("guildMemberAdd", async member => {

    let welchannel = member.guild.channels.find(channel => channel.name === "welcome-leave");

        let aftgh = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(bot.user.avatarURL)
            .addField(`**Welcome**`, [
                "Welcome " + `<@${member.id}>`,
                "Sebelum memulai lebih baik kamu membaca peraturan dahulu!",
                "Jika membutuhkan bantuan , kamu bita tulis cg!help , Oke!"
            ]);

           return welchannel.send(aftgh);

});

bot.on("guildMemberRemove", async member => {

    let welchannela = member.guild.channels.find(channel => channel.name === "welcome-leave");

        let aftgha = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(bot.user.avatarURL)
            .addField(`**Bye**`, [
                "Good Bye " + `<@${member.id}>`,
                "Terima kasih atas kunjunganmu!",
                "Dan good luck!"
            ]);

           return welchannela.send(aftgha);

        });

//Adding commands!

if(cmd === `${prefix}help`){

        let discorda = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(bot.user.avatarURL)
            .addField("**INFORMASI**", [
                `Halo!` + `<@${message.author.id}>`,
                "`Selamat datang di Help center server ini!`",
                "`Disini aku akan memberi kamu banyak jawaban!`",
                "`Silahkan pilih kategori pertanyaan kamu`" ,
                "`1.Tentang bot! - cg!helpbot`",
                "`2.Tentang server - cg!helpserver`",
                "`3.Tentang Role dan sebagainya! - cg!helprole`",
                "`Hmm? kategorinya gk cocok? oke kamu bisa bertanya kepada admin`",
                "`Gunakan command ini: cg!helpme (tulis pertanyaan kamu disini!)`"
            ]);

            return message.channel.send(discorda);

}

if(cmd === `${prefix}helpbot`){

    let botinf = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(bot.user.avatarURL)
        .addField("**Bot**", [
            "`Bot digunakan untuk kesenangan,administrasi,dan lainnya`",
            "`Untuk menggunakan bot kamu harus tau prefix mereka dulu!`",
            "`Contoh paling mudah ialah dengan bot ini!`",
            "`Saat kamu menulis cg!help 1 , prefix dari bot ini ialah cg!`",
            "`Begitu juga dengan bot yang lainnya!`"
        ]);

        return message.channel.send(botinf);
}

if(cmd === `${prefix}helpserver`){

    let asd = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(bot.user.avatarURL)
        .addField("**Server**", [
            "`Server ini bernama MMS alias Multi Master Server`",
            "`Server ini berbasis dalam game minecraft pe dan menggunakan aplikasi Multiplayer master sebagai medianya`",
            "`Enjoy staying at our server :D`"
        ]);

        return message.channel.send(asd);
}

if(cmd === `${prefix}helprole`){

    let roles = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(bot.user.avatarURL)
        .addField("**Informasi**", [
            "`Role di server ini dibagi menjadi 5`",
            "`Yaitu Admin,Moderator,Bot Developer,Vip,dan MVP`",
            "`Role Admin adalah yang paling tinggi di server ini!`",
            "`Jika ada yang melanggar peraturan, maka Admin dan Moderator yang akan bertindak!`"
        ]);

        return message.channel.send(roles);

}

if(cmd === `${prefix}helpme`){

    let me123 = args.join(" ");
    if(!me123) return message.channel.send("Adakah pertanyaan? silahkan dilengkapi :v");

    let helps = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("**Pertanyaan**", ["Dari" + `<@${message.author.id}>`, "**Berupa**", me123]);

        let aftg = message.guild.channels.find(`name`, "help");
        if(!aftg) return message.channel.send("Uhh mohon bersabar, ada kesalahan pada command!").then(message => {message.delete(5000)});


        message.channel.send("Pertanyaanmu telah dikirim ke admin yang online, mohon bersabar").then(message => {message.delete(5000)});
        message.delete().catch(O_o=>{});
        return aftg.send(helps);

}

if(cmd === `${prefix}say`){

    let ars = args.join(" ");
    if(!ars) return message.channel.send("Uhh?").then(message => {message.delete(5000)});

    message.delete().catch(O_o=>{});
    return message.channel.send(args);

}

});

//Login the bot
bot.login(process.env.BOT_TOKEN);