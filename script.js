

const btn = document.getElementById('btn');
btn.addEventListener('click', async (e) => {
    e.preventDefault();
    //e.stopPropagation();
    await getWeather();
})

async function getWeather(){
    try{
        /* if(!isZip){ */
            //not a zip code
            let locationName = getDataFromForm()
            const url = buildWeatherUrl(locationName)
            const fetchUrl = url 
            let response = await fetch(fetchUrl) 
            const weatherData = await response.json()
            addToDom(weatherData)

    } catch (err) {console.error(err)}
         
}
function addToDom(jsonData){
    let resultsDiv =  document.querySelector('.results-div');
    let resultsP = document.createElement('p');
            resultsP.textContent = `City: ${jsonData.name}
                                  Country: ${jsonData.sys.country}
                                  Weather: ${jsonData.weather[0].main}
                                  Temp: ${Math.round(jsonData.main.temp)}°F`;
            resultsDiv.replaceChildren(resultsP);
        
}
function getDataFromForm(){
    const locInput = document.getElementById('location');
    const locationName = locInput.value
    if (locationName) {
        // remove whitespace for the api call
        return locationName
          .replace(/(\s+$|^\s+)/g, '') // remove whitespace from begining and end of string
          .replace(/(,\s+)/g, ',') // remove any white space that follows a comma
          .replace(/(\s+,)/g, ',') // remove any white space that preceeds a comma
          .replace(/\s+/g, '+'); // replace any remaining white space with +, so it works in api call
      }
}
function buildWeatherUrl(location){
    if(isNumeric(location)){
        return url = `https://api.openweathermap.org/data/2.5/weather?zip=${location}&appid=cc56e1eed5e50c552e7a6e24b93608f0&units=imperial`
    }
    else{
        return url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cc56e1eed5e50c552e7a6e24b93608f0&units=imperial`
    }
}
function isNumeric(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
} 

