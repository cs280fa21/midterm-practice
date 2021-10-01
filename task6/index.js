const BASE_URL = "https://dataservice.accuweather.com";
const city = "Baltimore";

// Note: you cannot actually call fetch from NodeJS,
//  so you cannot run the code in this file!

fetch(`${BASE_URL}/locations/v1/cities/search?q=${city}`)
    .then((response) => response.json())
    .then((data) => {
      const location = data[0];
      fetch(`${BASE_URL}/currentconditions/v1/${location.Key}`)
		    .then((response) => response.json())
		    .then((data) => {
		      const forecast = data[0];
					console.log(`${city} is ${forecast.WeatherText}`);
		    })
    })
    .catch((err) => console.log(err));