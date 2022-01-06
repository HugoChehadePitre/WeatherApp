/* some other js is missing that isn't apaprt of this projectbut rather appart of the page functionnality */


/***********    Weather APP   ***********/


/******** API FETCH **********/

let weather = {
    apiKey: "6d2e713a717f6671ae3a3fd73c6915fe",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector('.wapp__city').innerText = "Weather in " + name;
        document.querySelector('.wapp__temperature').innerText = temp + "°C";
        document.querySelector('.wapp__icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.wapp__description').innerText = description;
        document.querySelector('.wapp__humidity').innerText = humidity + "% Humidity";
        document.querySelector('.wapp__wind').innerText = speed + "km/h";
        document.querySelector('.wapp__container').classList.remove('loading');
    },
    search: function() {
        this.fetchWeather(document.querySelector('.wapp__search--bar').value);
    }
};

/********* search *********/

document.querySelector('.wapp__search--btn').addEventListener('click', function () {
    weather.search();
});
document.querySelector('.wapp__search--bar').addEventListener('keyup', function(event) {
if(event.key == 'Enter') {
    weather.search()
}
});

weather.fetchWeather("montreal");

