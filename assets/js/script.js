
//   getWeatherData("Seattle", "", "US", apiKey)
//     .then((weatherData) => {
//       console.log(weatherData);
//     });

const apiKey = '15d7b21b8e0b5e4495187c250234a200';

function getWeatherData(city, state, country, apiKey) {
  const baseUrl = "http://api.openweathermap.org/data/2.5/forecast";
  const url = new URL(baseUrl);
  url.searchParams.append("q", `${city},${state},${country}`);
  url.searchParams.append("appid", apiKey);

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}

function display5DayForecast(city, forecastData) {
  // Assuming you have an HTML element with an id for displaying the forecast.
  const forecastElement = document.getElementById("forecast");

  // Clear any previous forecast data.
  forecastElement.innerHTML = "";

  // Loop through the forecast data and display it.
  forecastData.list.forEach((item) => {
    const date = new Date(item.dt * 1000); // Convert timestamp to date.
    const temperature = item.main.temp;
    const description = item.weather[0].description;

    const forecastItem = document.createElement("div");
    forecastItem.innerHTML = `
      <p>Date: ${date.toLocaleDateString()}</p>
      <p>Temperature: ${temperature}°C</p>
      <p>Description: ${description}</p>
    `;

    forecastElement.appendChild(forecastItem);
  });
}

const newYork = document.getElementById("New York");
newYork.addEventListener('click', () => {
  getWeatherData("New York", "", "US", apiKey)
    .then((forecastData) => {
      display5DayForecast("New York", forecastData);
    });
});
// Repeat the above click event listeners for other cities.
const losAngeles = document.getElementById("Los Angeles");
losAngeles.addEventListener('click', () => {
  getWeatherData("Los Angeles", "", "US", apiKey)
    .then((forecastData) => {
      display5DayForecast("Los Angeles", forecastData);
    });
});

const Chicago = document.getElementById("Chicago");
Chicago.addEventListener('click', () => {
  getWeatherData("Chicago", "", "US", apiKey)
    .then((forecastData) => {
      display5DayForecast("Chicago", forecastData);
    });
});

const Seattle = document.getElementById("Seattle");
Seattle.addEventListener('click', () => {
  getWeatherData("Seattle", "", "US", apiKey)
    .then((forecastData) => {
      display5DayForecast("Seattle", forecastData);
    });
});

const sanFrancisco = document.getElementById("San Francisco");
sanFrancisco.addEventListener('click', () => {
  getWeatherData("San Francisco", "", "US", apiKey)
    .then((forecastData) => {
      display5DayForecast("San Francisco", forecastData);
    });
});

