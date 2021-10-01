# Task 6

The following program uses the Promise pattern. Please rewrite it using async/await.

```js
const BASE_URL = "https://dataservice.accuweather.com";
const city = "Baltimore";

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
```

Please complete this task in the `index.js` file inside this folder. Do **not** write the answer in this README file.