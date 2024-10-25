const APIKEY = "46fcaef5ece0306b5c280412b766e25e";
const APICountryURL = "https://flagsapi.com/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

const getWeatherData = async (city) => {
    const resultado = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}&lang=pt_br`;
    const res = await fetch(resultado);
    const data = await res.json();
    console.log(data);
    cityElement.innerText = city;
};


searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value;
    getWeatherData(city);
});
