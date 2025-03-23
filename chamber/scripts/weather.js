const infoWeather = document.querySelector("#current-weather");
const weatherIcon = document.querySelector("#weather-icon");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-1.04&lon=-80.66&appid=11f27d56c6d3624ddce144763b34e265&units=imperial";

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    let temp = document.createElement("p");
    let description = document.createElement("p");
    let high = document.createElement("p");
    let low = document.createElement("p");
    let humidity = document.createElement("p");
    let sunrise = document.createElement("p");
    let sunset = document.createElement("p");

    temp.innerHTML = `${data.main.temp}&deg;F`;
    description.innerHTML = desc.toUpperCase();
    high.innerHTML = `Max: ${data.main.temp_max}&deg;`;
    low.innerHTML = `Low: ${data.main.temp_min}&deg;`;
    humidity.innerHTML = `Humidity; ${data.main.humidity}%`;
    sunrise.innerHTML = `Sunrise: ${convertTimeUnix(data.sys.sunrise)}`;
    sunset.innerHTML = `Sunset: ${convertTimeUnix(data.sys.sunset)}`;

    infoWeather.appendChild(temp);
    infoWeather.appendChild(description);
    infoWeather.appendChild(high);
    infoWeather.appendChild(low);
    infoWeather.appendChild(humidity);
    infoWeather.appendChild(sunrise);
    infoWeather.appendChild(sunset);

  };


function convertTimeUnix(time){
    const nuevo = new Date(time * 1000);
    return nuevo.toLocaleTimeString("en-En", {hour:"2-digit", minute: "2-digit"});
};

apiFetch();
