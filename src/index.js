// DATE & TIME

function formatDate() {
    let dayIndex = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = dayIndex[currentDate.getDay()];
  
    let hours = currentDate.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let minutes = currentDate.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${day}, ${hours}:${minutes}`;
  }
  
  let currentDate = new Date();
  let date = document.querySelector("#date");
  date.innerHTML = formatDate(currentDate);
  
  // SEARCH ENGINE
  
  function showTemperature(response) {
    let temperature = response.data.main.temp;
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(temperature);
  }
  
  function searchCity(event) {
    event.preventDefault();
    let citySearch = document.querySelector("#city-input");
    let cityName = document.querySelector("#city-name");
    let unit = "metric";
    let apiKey = "aef650f4f97d6be4e2588d635fe74f28";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch.value}&units=${unit}&appid=${apiKey}`;
    cityName.innerHTML = citySearch.value;
  
    axios.get(apiUrl).then(showTemperature);
  }
  let searchForm = document.querySelector("#button-addon2");
  searchForm.addEventListener("click", searchCity);
  
  // CURRENT-CITY BUTTON
  function showCurrentPosition(position) {
    function showCurrentPositionTemperature(response) {
      let currentPositionTemp = response.data.main.temp;
      let currentPositionTempElement = document.querySelector("#temperature");
      let currentLocationElement = document.querySelector("#city-name");
      currentLocationElement.innerHTML = "Current City";
      currentPositionTempElement.innerHTML = Math.round(currentPositionTemp);
    }
  
    function retrieveCoordinates(coordinates) {
      let lat = coordinates.coords.latitude;
      let lon = coordinates.coords.longitude;
      let unit = "metric";
      let apiKey = "aef650f4f97d6be4e2588d635fe74f28";
      let geoApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
  
      axios.get(geoApiUrl).then(showCurrentPositionTemperature);
    }
  
    navigator.geolocation.getCurrentPosition(retrieveCoordinates);
  }
  
  let currentcityButton = document.querySelector("#current-city-btn");
  currentcityButton.addEventListener("click", showCurrentPosition);
  
  // UNIT LINKS
  
  function convertToFahrenheit(event) {
    event.preventDefault();
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = 61;
  }
  function convertToCelsius(event) {
    event.preventDefault();
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = 16;
  }
  
  let celsiusLink = document.querySelector("#celsius-link");
  let fahrenheitLink = document.querySelector("#fahrenheit-link");
  
  fahrenheitLink.addEventListener("click", convertToFahrenheit);
  celsiusLink.addEventListener("click", convertToCelsius);
  