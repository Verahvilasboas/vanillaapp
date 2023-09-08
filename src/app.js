
}
//fisrt step
function search(event) {
  event.preventDefault();
  //make api call
  let apiKey = "9e0fb79c2f66d0cd0dcf06710976a873";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
  console.log(apiUrl);

 