// Variáveis e seleção de elementos
const apikey = "2f12af0df1247082e6a3641639dc96a8";
const apicountryURL = "https://flagsapi.com/BR/shiny/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector( "#weather-data")
// Funções
const getWeatherData = async (city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  return data;
};

const showWeatherData = async (city) => {
  const data = await getWeatherData(city);

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );

  // Correções na linha da bandeira:
  try {
    const countryCode = data.sys.country.toLowerCase();
    const countryFlagURL = `${apicountryURL}/${countryCode}.png`;
    countryElement.setAttribute("src", countryFlagURL);
  } catch (error) {
    console.error("Erro ao carregar a bandeira do país:", error.message);
    // Implementar solução alternativa: Exibir bandeira padrão
  }

  humidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;

  weatherContainer. classList.remove("hide")
};

// Eventos
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const city = cityInput.value;

  showWeatherData(city);
});

cityInput. addEventListener("keyup", (e) => {
    if(e.code === "Enter") {
        const city = e.target.value

        showWeatherData(city);
    }
})

// const input = document.querySelector('input');
// const button = document.querySSelector('button');
// const img = document.querySelector('img');

// const city = document.querySelector('city');
// const degree = document.querySelector('degree');
// const content = document.querySelector('content');

// button.addEventListener('click', () => {
//     if(!input.value) return;
//     getweatherData();
// });
// async function getweatherData() {
//     let urlApi ='https://api.openweathermap.org/data/2.5/weather?${encondeURl(input.value)}&units=metric&appid=${apikey}&lang=pt_br';
// }

//2f12af0df1247082e6a3641639dc96a8