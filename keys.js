// TWITTER------------------------
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'K0I35HOuFtSawoiBAMx4tn8Pz',
  consumer_secret: '16YQdui2tbECj5WOsEcqguPhNcX1lEQOWXIyTaOZy36t9V0GfF',
  access_token_key: '74812401-q7x9vRKXqeKOVlN3wMZGcrEXzAd4mX3P5KLPUU080',
  access_token_secret: 'Ltbh2CdX64smU1mZ5roDid76ODrlA3qtBBKCwsA0x8Uy3'
});

module.exports.client = client;