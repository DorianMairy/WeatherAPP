const apikey = "123573cc4ec236994ba2613961469c95";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=fr`;

async function getWeatherByLocation(city) {
  const resp = await fetch(url(city));
  const respData = await resp.json();
  console.log(respData);
  addWeatherToPage(respData);
}

function addWeatherToPage(data) {
  const name = (data.name);
  const temp = (data.main.temp);
  const windspeed = (data.wind.speed);
  const humidity = (data.main.humidity);
  const weather = document.createElement("div");
  weather.classList.add("weather");
  weather.innerHTML = `
        <p>${object.cod.message}</p>
        <p>${name}</p>
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />${temp}°C</h2>
        <p>Vitesse du vent : <br>${Math.round(windspeed*3.6)} Km/h</p>
        <p>Humidité : <br>${humidity}%</p>
    `;

  main.innerHTML = "";
  main.appendChild(weather);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = search.value;
  if (city) {
    getWeatherByLocation(city);
  }
  else if (data.object.cod == "400") {
    noinput(data);
  }
  else{
    citynotfound(data);
  }
});