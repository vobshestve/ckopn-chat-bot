const Discord = require('discord.js');
const robot = new Discord.Client();
const word = require("./word.js");
const fs = require('fs');
const {
 prefix,
 token,
} = require('./config.json');
const client = new Discord.Client();
client.login(token);
