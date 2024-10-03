import WeatherInfo from "./WeatherInfo"

function Weather(){
    return(
        <div id="weather"> 
            <h1 class="weatherHeading">Day</h1>
            <img src="/img/weather/sunny.png" alt="sunnny" />
            <WeatherInfo/>
            <WeatherInfo/>
            <WeatherInfo/>
            <WeatherInfo/>
        </div>
    )
}

export default Weather;