var tweets = require('./keys.js');
var spotify = require('spotify');
var fs = require('fs');
var input = process.argv[3];	// MOVIE / SONG
var selection = process.argv[2];	// COMMAND
// LOG DATA TO TEXT FILE
var log = function(data){
	fs.appendFile('log.txt', data, function(err){
		if (err) {
			return console.log(err);
		}
	});
};

// -----TWEETS-------
if (selection === 'my-tweets') {

var params = {screen_name: 'knicksdynasty'};
	tweets.client.get('statuses/user_timeline', params, function(error, tweets, response){
  	if (!error) {
  		for (var i = 0; i < tweets.length; i++) {

  		console.log(tweets[i].text);
  		console.log('--------------------------------------');
  		log('(' + tweets[i].text + ')');
  		log(' -----> ');
  			};
  		}
	});
}

// -----SPOTIFY------
if (selection === 'spotify-this-song') {

	spotify.search({ type: 'track', query: input }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }

	 console.log(data.tracks.items[0].artists[0].name);
	 console.log(data.tracks.items[0].name);
	 console.log(data.tracks.items[0].preview_url);
	 console.log(data.tracks.items[0].album.name);

	 log('(' + data.tracks.items[0].artists[0].name + ' - ');
	 log(data.tracks.items[0].name + ' - ');
	 log(data.tracks.items[0].preview_url + ' - ');
	 log(data.tracks.items[0].album.name + ')');
		log(' -----> ');

	});
}

// -----OMDB--------
if (selection === 'movie-this') {
	var request = require('request');
request('http://www.omdbapi.com/?t=' + input + '&y=&plot=short&r=json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(body) // Show the HTML for the Google homepage.
    json = JSON.parse(body); 
    console.log(json.Title);
    console.log(json.Year);
    console.log(json.Rated);
	console.log(json.Country);
	console.log(json.Language);
	console.log(json.Plot);
	console.log(json.Actors);

	log('(' + json.Title + ' - ');
    log(json.Year + ' - ');
    log(json.Rated + ' - ');
	log(json.Country + ' - ');
	log(json.Language + ' - ');
	log(json.Plot + ' - ');
	log(json.Actors);
	log(' -----> ');

  }
})
};

// -----DO WHAT IT SAYS-------
if (selection === 'do-what-it-says') {
	

fs.readFile('random.txt', 'utf8', function(err, data){
	
	console.log(data);
		// -----TWEETS------
		if (data.startsWith('my-tweets')) {

			var params = {screen_name: 'knicksdynasty'};
			tweets.client.get('statuses/user_timeline', params, function(error, tweets, response){
	  		if (!error) {
	  		for (var i = 0; i < tweets.length; i++) {

	  		console.log(tweets[i].text);
  			console.log('--------------------------------------');
  			log('(' + tweets[i].text + ')');
  			log(' -----> ');
	  				};
	  			}
			});
		}
		// ------SPOTIFY-------
		if (data.startsWith('spotify-this-song')) {

			input = data.slice(17).trim();
			
			spotify.search({ type: 'track', query: input }, function(err, data) {
			    if ( err ) {
			        console.log('Error occurred: ' + err);
			        return;
			    }
			 console.log(data.tracks.items[0].artists[0].name);
			 console.log(data.tracks.items[0].name);
			 console.log(data.tracks.items[0].preview_url);
			 console.log(data.tracks.items[0].album.name);

			 log('(' + data.tracks.items[0].artists[0].name + ' - ');
			 log(data.tracks.items[0].name + ' - ');
			 log(data.tracks.items[0].preview_url + ' - ');
			 log(data.tracks.items[0].album.name + ')');
			 log(' -----> ');
			});
		}
		// ----OMDB-------
		if (data.startsWith('movie-this')) {

			input = data.slice(11).trim();
			console.log(input);

			var request = require('request');
		request('http://www.omdbapi.com/?t=' + input + '&y=&plot=short&r=json', function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		    // console.log(body) // Show the HTML for the Google homepage.
		    json = JSON.parse(body); 
		    console.log(json.Title);
		    console.log(json.Year);
		    console.log(json.Rated);
			console.log(json.Country);
			console.log(json.Language);
			console.log(json.Plot);
			console.log(json.Actors);

			log('(' + json.Title + ' - ');
		    log(json.Year + ' - ');
		    log(json.Rated + ' - ');
			log(json.Country + ' - ');
			log(json.Language + ' - ');
			log(json.Plot + ' - ');
			log(json.Actors);
			log(' -----> ');

		  }
		})
		}


});
};







