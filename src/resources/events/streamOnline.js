
// © 2021 Pix3l_. All rights reserved.
// Created with <3 by Pix3l_.

// #region Import and declare
const colors = require('colors');
const config = require('../config.json');
// #endregion Import and declare

const body = {
    "type": "channel.follow",
    "version": "1",
    "condition": {
        "broadcaster_user_id": "12826"
    },
    "transport": {
        "method": "webhook",
        "callback": "https://example.com/webhooks/callback",
        "secret": "s3cRe7"
    }
}

module.exports = {
    name: 'streamOnline',
    execute() {
    const request = require('request');

        setTimeout(() => {
            const gameOptions = {
                url: 'https://api.twitch.tv/helix/games/top',
                method: 'GET',
                headers:{
                    'Client-ID': 'w90oqmu9u0of2vsh0xnv6qxivn8bko',
                    'Authorization': 'Bearer ' + config.api.twitch.token
                }
            }
        if(!accessToken){
            console.log("No Token");
        }else{
            console.log(gameOptions);
            
            const gameRequest = request.get(gameOptions,(err,res,body) => {
                if(err){
                    return console.log(err);
                }
                
                console.log('Status: ${res.statusCode}');
                console.log(JSON.parse(body));
                });
            
            };
            
        },2000)
    },

}