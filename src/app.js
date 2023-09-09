
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
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let description = document.querySelector("#description");
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
  function getForecast(coordinates) {
    let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
    let city = "New York"
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayTemperature);
  }
  
function search(city) {
  let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);

    console.log(search);
}


let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);


