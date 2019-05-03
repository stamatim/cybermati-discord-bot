require('dotenv').config(); // Loads the Bot token based on the current environment
const fs = require('fs'); // Load the fs module
const Discord = require('discord.js'); // Library for Discord API interaction
const client = new Discord.Client(); // Initialize the Library

fs.readdir('./events/', (err, files) => {
    files.forEach(file => {
        const eventHandler = require(`./events/${file}`);
        const eventName = file.split('.')[0];
        client.on(eventName, (...args) => eventHandler(client, ...args));
    })
}) // Callback function for fs with event handling

client.login(process.env.BOT_TOKEN); // Establish websocket connection to Discord with given bot token
