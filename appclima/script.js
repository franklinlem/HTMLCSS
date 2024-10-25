const APIKEY = "46fcaef5ece0306b5c280412b766e25e";
const APICountryURL = "https://flagsapi.com";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

const getWeatherData = async (city) => {
    const resultado = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}&lang=pt_br`;
    const res = await fetch(resultado);
    const data = await res.json();
    console.log(data);
    cityElement.innerText = data.name;
    tempElement.innerText = Number(data.main.temp).toFixed(1);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    countryElement.src = `${APICountryURL}/${data.sys.country}/flat/64.png`;
    humidityElement.innerText = data.main.humidity+"%";
    windElement.innerText = data.wind.speed+" m/s";

    weatherContainer.style.display = "block";
};


searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value;
    getWeatherData(city);
});

cityInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        e.preventDefault();
        const city = cityInput.value;
        getWeatherData(city);
    }
});
