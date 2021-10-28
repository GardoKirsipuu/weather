document.addEventListener('DOMContentLoaded', cityWeather);


function weatherDataFetch(city) {
	var key = 'afdc4f8bad1a71f008d1c53bb6d0cb56';
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
	.then(function(resp) {
		return resp.json()
	}) // convert data to json
	.then(function(data) {
		console.log(data);
	})
	.catch(function() {
		//catch any errors
	});
}

function cityWeather(e) {
	weatherDataFetch(`Tallinn`);
}