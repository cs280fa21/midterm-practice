const BASE_URL = "https://dataservice.accuweather.com";
const city = "Baltimore";

// Note: you cannot actually call fetch from NodeJS,
//  so you cannot run the code in this file!

async function printWeatherCondition(city) {
	let response, data;
	try {
		response = await fetch(`${BASE_URL}/locations/v1/cities/search?q=${city}`);
		data = await response.json();
		const location = data[0]; 
		response = await fetch(`${BASE_URL}/currentconditions/v1/${location.Key}`);
		data = awaitresponse.json();
		const forecast = data[0];
		console.log(`${city} is ${forecast.WeatherText}`);
	} catch (err) {
		console.log(err);
	}
}

printWeatherCondition(city);
