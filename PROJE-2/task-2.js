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
    
        const hava = data.weather[0].main;
        
        switch (hava) {
            case "Clouds":
                weatherIcon.classList.add("fa-cloud");
                break
            case "Clear":
                weatherIcon.classList.add("fa-sun");
                break
            case "Rain":
                weatherIcon.classList.add("fa-cloud-showers-heavy");
                break
            case "Drizzle":
                weatherIcon.classList.add("fa-cloud-rain");
                break
            case "Mist":
                weatherIcon.classList.add("fa-smog");
                break;
            case "Snow":
                weatherIcon.classList.add("fa-snowflake");
                break
            case "Thunderstorm":
                weatherIcon.classList.add("fa-bolt");
                break
            
            default:
                break         
    }



    document.querySelector(".weather").style.display = "block";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
