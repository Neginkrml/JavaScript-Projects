const apiKey = "a436f897fe34a1f4fdf6a1c2f862339a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon= document.querySelector(".weather-icon")

async function checkWeather( city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status == 404) {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none"
    } else {
         const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clouds") {
        weatherIcon.classList.add("fa-cloud"); // Bulut simgesi
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.classList.add("fa-sun"); // Güneş simgesi
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.classList.add("fa-cloud-showers-heavy"); // Yağmur simgesi
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.classList.add("fa-cloud-rain"); // Hafif Yağmur simgesi
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.classList.add("fa-smog"); // Sis simgesi
    } else if (data.weather[0].main === "Snow") {
        weatherIcon.classList.add("fa-snowflake"); // Kar simgesi
    } else if (data.weather[0].main === "Thunderstorm") {
        weatherIcon.classList.add("fa-bolt"); // Fırtına simgesi
    }
    document.querySelector(".weather").style.display = "block";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
