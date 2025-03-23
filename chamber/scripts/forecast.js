const forecastInfo = document.querySelector("#weather-forecast");

const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=-1.04&lon=-80.66&appid=11f27d56c6d3624ddce144763b34e265&units=imperial";

async function apiFetchForecast(){
    try{
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResultsForecast(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

function displayResultsForecast(data) {
    let today = document.createElement("p");
    let tomorrow = document.createElement("p");
    let afterTomorrow = document.createElement("p");

    today.innerHTML = `Today: ${data.list[0].main.temp}&deg;F`;
    tomorrow.innerHTML = `Tomorrow: ${data.list[8].main.temp}&deg;F`;
    afterTomorrow.innerHTML = `After tomorrow: ${data.list[16].main.temp}&deg;F`;

    forecastInfo.appendChild(today);
    forecastInfo.appendChild(tomorrow);
    forecastInfo.appendChild(afterTomorrow);


};


apiFetchForecast();