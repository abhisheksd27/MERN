document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input");
    const btn = document.querySelector("#btn");
    const icon = document.querySelector(".icon");
    const weather = document.querySelector(".weather");
    const temperature = document.querySelector(".temperature");
    const description = document.querySelector(".description");

    btn.addEventListener("click", () => {
        let city = input.value.trim(); // Trim whitespace from input
        if (city !== "") {
            getWeather(city);
        } else {
            alert("Please enter a city name.");
        }
    });

    function getWeather(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d52315072bc194a2fcc59f6d6ae984c0`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('There was a problem fetching the weather:', error);
            });
    }

    function displayWeather(data) {
        icon.innerHTML = ""; // Clear previous icon
        weather.textContent = data.weather[0].main;
        temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`; // Convert Kelvin to Celsius
        description.textContent = data.weather[0].description;

        // Display weather icon
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        const iconImg = document.createElement("img");
        iconImg.src = iconUrl;
        icon.appendChild(iconImg);
    }
});
