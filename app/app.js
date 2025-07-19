const apiKey = "8e533e65b01e417a0fb46d8ac53ef254";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl+ city + `&appId=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/hr";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "img/cloudy.png";
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "img/sun.png";
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "img/fog.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain.png";
    }
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})