var key = "15d7b21b8e0b5e4495187c250234a200"

`{lat}&lon={lon}&appid={API key}`
var lat = 0
var lon = 0
var state = ""

function getDateApi(lat, lon, apiKey) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Process and use the fetched data here
        console.log(data);
      })
      .catch((error) => {
        console.error(`An error occurred: ${error}`);
      });
  }
  
  
  const latitude = ""; 
  const longitude = ""; 
  const apiKey = '15d7b21b8e0b5e4495187c250234a200'; 
  
  getDateApi(latitude, longitude, apiKey);
  