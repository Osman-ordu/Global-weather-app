'use strict'

const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'ce59e198cc9433fe5cd877900b96ce66';

const setQuery = (event) => {
    if (event.keyCode == '13') getWeather(searchBar.value)
}

const getWeather = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(showDetails)
}

const showDetails = (weather) => {
    let city = document.querySelector('.city')
    city.textContent = `${weather.name} , ${weather.sys.country}`

    let temp = document.querySelector('.temp')
    temp.textContent = `${Math.round(weather.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.textContent = `${weather.weather[0].description}`

    let minMax = document.querySelector('.minmax')
    minMax.textContent = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c `

}
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress',setQuery)
