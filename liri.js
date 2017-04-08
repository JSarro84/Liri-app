//including terminal "fs" program needed to use the readFile function
var fs = require('fs')
//including npm package "request" allowing calls to an API database
var request = require("request");
//including npm package "inquirer" for query prompt
var inquirer = require("inquirer");
//this links to the file that holds all my API keys.
var keys = require('./keys.js');


//different variables for twitter function
var Twitter = require('twitter');
var client = new Twitter(keys['twitterKeys']);
var params = {screen_name: 'jonsarro', count: '20'};


//different variables for spotify function
var spotify = require('spotify');
var track = (process.argv[3]);


//different variables for OMDB function
var omdb = require('omdb');
var movGet = (process.argv[3]);

//different variables for do-what-it-says function
fs.readFile('/random.text', (err, data) => {
});


//the following if else statement checks the user's decision and executes an API request accordingly

//if user selects twitter

if (process.argv[2] === "my-tweets"){

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	console.log(tweets[0]['text'])
	console.log(tweets[1]['text'])
	console.log(tweets[2]['text'])
	console.log(tweets[3]['text'])
	console.log(tweets[4]['text'])
	console.log(tweets[5]['text'])
	console.log(tweets[6]['text'])
	console.log(tweets[7]['text'])
	console.log(tweets[8]['text'])
	console.log(tweets[9]['text'])
	console.log(tweets[10]['text'])

});
}

else if (process.argv[2] === "do-what-it-says"){
	spotify.search({ type: 'track', query: "I want it that way" }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
   	else console.log("I want it that way");
   		 console.log(data.tracks.items[0].album.artists[0].name);
   		 console.log(data.tracks.items[0].album.name);
   		 console.log(data.tracks.items[12].preview_url);
   		 });	
}

//if user selects spotify
else if (process.argv[2] === "spotify-this-song"){
	spotify.search({ type: 'track', query: track }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
   	else console.log(track);
   		 console.log(data.tracks.items[0].album.artists[0].name);
   		 console.log(data.tracks.items[0].album.name);
   		 console.log(data.tracks.items[12].preview_url);
   		
});	
}


//if user selects OMDB
else if (process.argv[2] === "movie-this"){


	omdb.search(movGet, function(err, movies) {
    if(err) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
    movies.forEach(function(movie) { 
    });
});
omdb.get({ title: movGet }, true, function(err, movie) {
    if(err) {
        return console.error(err);
    }
    if(!movie) {
        return console.log('Movie not found!');
    }
    console.log("Title: " + movie.title, "\n" + "Year Released: " + movie.year + "\n" + 
    	"IMDB Rating: " + movie.imdb.rating + "\n" + "Country: " + movie.country + "\n" + 
    	"Language: " + movie.language + "\n" + "Plot: " + movie.plot + "\n" + 
    	"Actors: " + movie.actors + "\n" + "Rotten Tomatoes Rating: no longer supported by OMDB");
});
};
