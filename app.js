const request = require('request');

const url = 'https://api.darksky.net/forecast/2e64da1cc0ec196717545eb97658cf8d/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    if(error) {
        console.log('Weather Service is not available right now');
    } else if(response.body.error) {
        console.log('Problem with location.');
    } else {
        console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degree out. There is a ${response.body.currently.precipProbability}% chance of rain.`);
    }
})

//Geocoding
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHJhc2hhbnR4YyIsImEiOiJjanhsaGNuNzcwNjYwM3JtZzUwNzN6OWNoIn0.I-skCxjmKCtglI72PSHJcg&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
    if(error) {
        console.log('Unable to connect with location service.');
    } else if(response.body.features.length === 0) {
        console.log('Are you searching for a different planet? Unable to find location.');
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(latitude, longitude);
    }
    
})