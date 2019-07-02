const request = require('request');

const url = 'https://api.darksky.net/forecast/2e64da1cc0ec196717545eb97658cf8d/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degree out. There is a ${response.body.currently.precipProbability}% chance of rain.`);
})

