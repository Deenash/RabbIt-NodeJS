var fetch = require('node-fetch');

function reduceString(result, temp){
	return result + '\n- ' + temp;
}

fetch('http://api.icndb.com/jokes/random/5?limitTo=[nerdy]')
.then(function(res) {
    return res.json();
}).then(function(body){
	var values = body.value;
	var jokes = [];
	if(values){
		for(value in values){
			jokes.push(values[value].joke);
		}
	}
	
	if(jokes && jokes.length > 0) {
		console.log('- ' + jokes.reduce(reduceString));
	}
});