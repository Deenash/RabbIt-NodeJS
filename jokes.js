var fetch = require('node-fetch');

function printJokes(values) {
  var jokes = values.reduce((result,next) => result + "- " + next.joke + "\n" , "");
	console.log(jokes);
}

fetch('http://api.icndb.com/jokes/random/5?limitTo=[nerdy]')
	.then(function(res){
		if (res.ok) {
			return res.json();
		} else {
			throw res.statusText;
		}
	})
	.then(function(jsonBody){
		var values =  jsonBody.value;
		if(!values){
			throw "No Values Recieved from the API. Actual Response " + jsonBody;
		} else {
			printJokes(values);
		}
	})
	.catch(function(err){
		console.log(err);
});