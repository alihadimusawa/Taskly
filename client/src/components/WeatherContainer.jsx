import Weather from "./Weather";

function WeatherContainer(){
    return (
        <div id="weatherContainer">
            <div>
                <Weather/>    
            </div>
            <div id="weatherMiddle">
                <Weather/>
            </div>
            <div>
                <Weather/>
            </div>
        </div>
    )
}


export default WeatherContainer;