# My First Discord Bot
My first attempt at making a Discord bot using JavaScript and [discord.js](https://discord.js.org)

## Features & Commands
- Welcome new members to the server
- Kick members from the server

## Bot Building Guide
*Build your own Discord bot using the same steps that I followed...*

*[Inside your project's root directory]*

1. `npm init -y` - Generate a package.json file
2. `npm install discord.js` - Import library to allow interaction with the Discord API
3. Create `index.js` file and fill with sample code from [Discord.js](https://discord.js.org/)
4. Go to the [Discord Developer Portal](https://discordapp.com/developers/applications/) and create a new application for your bot with the desired name
5. Navigate to the *Bots* page and click on **Add Bot**
6. Give your bot a *username* and copy the bot token into the `client.login()` method
7. Go to the *OAuth2* section of your app, and under *SCOPES*, select *bot*, and then *Copy*
8. Open a new browser tab and paste the URL that you just copied, then select your server and click on *Authorize*
9. In a terminal window, `npm install nodemon --save-dev`, which will enable contunuous reloading of your code as soon as it has been updated/modified
10. Add the following scripts to your `package.json` file
```JSON
{
  "name": "name-of-bot",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "discord.js": "^11.4.2"
  },
  "devDependencies": {
    "nodemon": "^1.18.9"
  }
}
```
11. Run `npm run dev` to bring your bot online
---
*[Optional Steps] Take these steps for added privacy if you decide to push your bot to GitHub*

12. Create a `.env` file in your directory to store the bot token using the command `touch .env`, and inside, write `BOT_TOKEN=YOUR_TOKEN_HERE` replacing `YOUR_TOKEN_HERE` with the bot token which can be found on your application's developer portal.
13. Run `npm install dotenv`
14. At the top of `index.js`, add the following line of code
`require('dotenv').config()`
15. Replace your token with `process.env.BOT_TOKEN`
16. Add any bot functionalities that you want using the Discord API; *Feel free to get creative ;)*

## Bot Deployment Guide
1. Create a free [Heroku](https://heroku.com) account
2. Once you made an account, go to your dashboard and click on *New > Create New App* and enter a name
3. In your project's root folder directory, create a file and name it `Procfile` and insert the contents specified below:
`worker node index.js`
4. Follow the instructions by Heroku on the deployment tab