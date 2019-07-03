const request = require('request');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


// geocode('Sultanpur UP', (error, data) => {
//     console.log('Error', error);
//     console.log('Data', data);
// });

forecast(82.11667, 26.45, (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});