module.exports = message => {
    const member = message.mentions.members.first();
    if (!member) { // if the member cannot be found
        return message.reply(`Did you eat boomers on accident? The user you are trying to kick either doesn't exist or they aren't a part of this server. Try again!`);
    }
    if (!member.kickable) { // if the member cannot be kicked due to permissions
        return message.reply(`Talk to the void master...I can't kick this user for you :(`);
    }
    return member.kick()
        .then(() => message.reply(`${member.user.tag} has successfully been kicked from the server.`))
        .catch(error => message.reply(`A problem has been encountered...`));
}