
  function displayTemperature(response){
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("city");
    let description = document.querySelector("description");
    temperatureElement.innerHTML = Math.round
    (response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].description.to;
  }
  

    //make api call
  let apiKey = "49b631c45785fe73d2a88477803dea22";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
  console.log(apiUrl);

  
  
  
  
  function searchLocation(position) {
 let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(displayTemperature);
  }

  console.log(apiUrl);


