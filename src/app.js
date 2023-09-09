
  function formatDate(timestamp) {
//calculate the date 
let date = new date (timestamp);
let hours = date.getHours();
if (hours < 10) {
hours = '0${hours}';
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = '0${minutes}';
}
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
let day = days[date.getDay()];
return '${day} &{hours}:${minutes}';
}
  
  
  function displayTemperature(response){

    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement= document.querySelector("#humidity");
    let windElement=document.querySelector("#wind");
    let dateElement=document.querySelector("#date");
    let iconElement=document.querySelector("#icon");

    temperatureElement.innerHTML = Math.round
    (response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].description.to;
    humidityElement.innerHTML=response.data.main.humidity;
     windElement.innerHTML = Math.round(response.data.wind.speed);
     dateElement.innerHTML = formatDate(response.data.dt * 1000);
     iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  iconElement.setAttribute("alt", response.data.weather[0].description); }

    //make api call
 function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
 } 

function searchCity(city) {
  let apiKey = "9e0fb79c2f66d0cd0dcf06710976a873";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);

}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);



//current

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);



// Bonus Feature

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

function searchLocation(position) {
  let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
