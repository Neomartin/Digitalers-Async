const key = "YOUR-KEY-FROM-OPENWEATHER API";
let latitud = 38.894726
let longitud = -77.032492
const weatherName = document.getElementById('weather-name')
const weatherTemp = document.getElementById('weather-temp')
const weatherIcon = document.getElementById('weather-icon')

// #Funcion para obtener geolocalizacion de el navegador
function getGeolocation() {

    if(window.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (datos) => {
                console.log(datos)
                const lat = datos.coords.latitude;
                const lon = datos.coords.longitude;

                loadWeather(lat, lon)
            },
            (error) => {
                console.error(error)
                loadWeather(latitud, longitud)
            }
        )
    }
}
getGeolocation()

function loadWeather(lat, lon) {
    
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=sp`;


    axios.get(URL)
        .then((resp) => {
            const weather = resp.data;
            actualizarWeatherCard(weather)
        })
        .catch((error) => {
            console.log(error)
        })

}



function actualizarWeatherCard(clima) {
    console.log(clima)
    weatherName.innerText = clima.name;
    weatherTemp.innerHTML = `${clima.main.temp} <span>°C</span>`;
    weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png" />`

}