import DiscordJS from "discord.js";

require('dotenv').config() // Loads the Bot token based on the current environment

////////// DISCORD.JS INITIALIZATION //////////
const Discord = require('discord.js'); // Library for Discord API interaction
const client = new Discord.Client(); // Initialize the Library

////////// HANDLE EVENTS USING CALLBACK FUNCTIONS //////////
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})
client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!')
    }
})
client.login("process.env.BOT_TOKEN") // Establish websocket connection to Discord with given bot token


