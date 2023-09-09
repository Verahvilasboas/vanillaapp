
  function displayTemperature(response){
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let description = document.querySelector("#description");
    let humidityElement= document.querySelector("#humidity");
    let windElement=document.querySelector("#wind");
    temperatureElement.innerHTML = Math.round
    (response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].description.to;
    humidityElement.innerHTML=response.data.main.humidity;
     windElement.innerHTML = response.data.wind.speed;
  }
  

    //make api call
  let apiKey = "9e0fb79c2f66d0cd0dcf06710976a873";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
  q=New York&appid=${apiKey}&units=metric`; 
  
  
  axios.get(apiUrl).then(displayTemperature);
  console.log(apiUrl);

  


