/* Feature: Text Commands for Bot */

const kick = require('../commands/kick'); // The !kick command from kick.js

module.exports = (client, message) => {
    if (message.content.startsWith('!kick')) {
        return kick(message);
    }
    // TODO Add more text features
};