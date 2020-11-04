const Discord = require('discord.js');
const {
 prefix,
 token,
} = require('./config.json');
const client = new Discord.Client();
client.login(token);
//
client.on("message", (message) => {
if(message.content == (prefix + "Привет")){
message.reply("Отстань от меня 😡");
}
});
//
client.on("message", (message) => {
if(message.content == (prefix + "Пока")){
message.reply("Покакаешь дома.");
}
});
//
client.on("message", (message) => {
if(message.content == (prefix + "Как дела?")){
message.reply("У тебя наверное все плохо.");
}
});
//
client.on("message", (message) => {
if(message.content == (prefix + "Вадим")){
message.reply("Вадимыч сюда иди.");
}
});
//
client.on("message", (message) => {
if(message.content == (prefix + "Тиражик")){
message.reply("Изыди демон отсюда");
}
});
//
client.on("message", (message) => {
if(message.content == (prefix + "Читы")){
message.reply("Читы офф");
}
});
//
client.on("message", (message) => {
if(message.content == (prefix + "Топ")){
message.reply("Топический звездец");
}
});
//
client.on("message", (message) => {
if(message.content == (prefix + "Че")){
message.reply("Чекать дома.");
}
});
//
client.on("message", (message) => {
if(message.content == (prefix + "АК-47")){
message.reply("Харе уже играть со своим ак. ЗАЕ*АЛ");
}
});
//
client.on("message", (message) => {
if(message.content == (prefix + "Лох")){
message.reply("Я знаю что я лох.");
}
});
//
client.on("message", (message) => {
if(message.content == (prefix + "Сам покакай")){
message.reply("Я уже сижу в нем.");
}
});
//
client.on("message", (message) => {
if(message.content == (prefix + "/gm 1")){
message.reply("ЭЭЭ выбурил гм быстро.");
}
});
//
client.on("message", (message) => {
if(message.content == (prefix + "/god")){
message.reply("ЭЭЭ выбурил год быстро.");
}
});
//