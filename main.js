const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather() {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&timezone=America%2FNew_York');
    const data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.current_weather.temperature) + '°F';
    document.querySelector(".wind").innerHTML = data.current_weather.windspeed + ' mph';
    document.querySelector(".precipitation").innerHTML = data.hourly.precipitation_probability[0] + '%';

    if (data.current_weather.weathercode == "0") {
        weatherIcon.src = "images/clear.png"
    } 
    else if (data.current_weather.weathercode == "1" || "2" || "3") {
        weatherIcon.src = "images/clouds.png"
    }
    else if (data.current_weather.weathercode == "51" || "53" || "55") {
        weatherIcon.src = "images/drizzle.png"
    }
    else if (data.current_weather.weathercode == "61" || "63" || "65") {
        weatherIcon.src = "images/rain.png"
    }
    else if (data.current_weather.weathercode == "71" || "73" || "75") {
        weatherIcon.src = "images/snow.png"
    }
}

checkWeather();