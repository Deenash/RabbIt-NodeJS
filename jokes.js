var fetch = require('node-fetch');

fetch('http://api.icndb.com/jokes/random/5?limitTo=[nerdy]')
	.then(function(res){
		if (res.ok) {
			return res.json();
		} else {
			throw res.statusText;
		}
	}) 
}).then(function(body){
	var values = body.value;
	var jokes = [];
	if(values){
		for(value in values){
			jokes.push(values[value].joke);
		}
	}
	if(jokes && jokes.length > 0) {
	    for(joke in jokes){
	    	console.log('- ' + jokes[joke]);
	    }
	}
});

