const Discord = require('discord.js');
const axios = require('axios');

const client = new Discord.Client();
const token = 'YOUR_DISCORD_BOT_TOKEN';
const upworkApiKey = 'YOUR_UPWORK_API_KEY';
const upworkApiSecret = 'YOUR_UPWORK_API_SECRET';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
    if (message.content === '!upwork') {
        try {
            const response = await axios.get('https://www.upwork.com/api/profiles/v3/me', {
                headers: {
                    Authorization: `Bearer ${upworkApiKey}:${upworkApiSecret}`,
                },
            });

            const profileData = response.data;

            // Use the profile data as needed

            message.channel.send('Upwork profile data fetched successfully!');
        } catch (error) {
            console.error('Error fetching Upwork profile data:', error);
            message.channel.send('Failed to fetch Upwork profile data.');
        }
    }
});

client.login(token);
