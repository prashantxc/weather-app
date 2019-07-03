const request = require('request');

const geocode = require('./utils/geocode');

const WEATHER_URL = 'https://api.darksky.net/forecast/2e64da1cc0ec196717545eb97658cf8d/37.8267,-122.4233';

// Weather
// request({ url: WEATHER_URL, json: true }, (error, response) => {
//     if(error) {
//         console.log('Weather Service is not available right now');
//     } else if(response.body.error) {
//         console.log('Problem with location.');
//     } else {
//         console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degree out. There is a ${response.body.currently.precipProbability}% chance of rain.`);
//     }
// });


geocode('Sultanpur UP', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});