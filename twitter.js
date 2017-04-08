//different variables for twitter function
var Twitter = require('twitter');
var client = new Twitter(keys['twitterKeys']);
var params = {screen_name: 'jonsarro', count: '20'};


//if user selects twitter

	client.get('statuses/user_timeline', params, function(error, tweets, response)


