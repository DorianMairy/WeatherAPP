// constantes
const apikey = "123573cc4ec236994ba2613961469c95";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

// recup url lien ville
const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=fr`;

// recup de la météo pour la ville
async function getWeatherByLocation(city) {
  const resp = await fetch(url(city));
  const respData = await resp.json();
  console.log(respData);
  addWeatherToPage(respData);
}

//Ajoute la météo a la page
function addWeatherToPage(data) {
  const name = (data.name);
  const country = (data.sys.country);
  const temp = (data.main.temp);
  const windspeed = (data.wind.speed);
  const humidity = (data.main.humidity);
  const fellslike = (data.main.feels_like);
  const lon = (data.coord.lon);
  const lat = (data.coord.lat);
  const weather = document.createElement("div");
  weather.classList.add("weather");
//iframe width="300" height="200" src="https://www.openstreetmap.org/export/embed.html?bbox=${lon}%2C${lat}" style="border: 1px solid black"></iframe><br/>
  weather.innerHTML = `
        <h1>${name}</h1>
        <p><img width="300" height="200" src="http://www.geonames.org/flags/x/${country.toLowerCase()}.gif"></p>
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />${temp}°C</h2>
        <p>Température ressentie <br>${fellslike}°C</p>
        <p>Vitesse du vent <br>${Math.round(windspeed*3.6)} Km/h</p>
        <p>Humidité <br>${humidity}%</p>
    `;
  main.innerHTML = "";
  main.appendChild(weather);
  
}


//bouton de recherche et touche ENTER
const btnsearch = document.getElementById('btn-search');
const btncompare = document.getElementById('btn-compare');

btnsearch.addEventListener("click", function(e){
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = search.value;
  if (city) {
    getWeatherByLocation(city);
  }
  else if (data.object.cod == "400") {
    output(data);
  }
  else{
    citynotfound(data);
  }
});