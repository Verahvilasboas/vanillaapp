
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
  let city = document.querySelector("#city-input").value
 } 

function search(event) {
  event.preventDefault();
  //make api call
  let apiKey = "49b631c45785fe73d2a88477803dea22";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
  console.log(apiUrl);

  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}



let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);


