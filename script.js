
let locInput = document.querySelector('.location');
const btn = document.getElementById('btn');
btn.addEventListener('click',getWeather(33445));
async function getWeather(loc){
    try{
        if(isNaN(loc)){
            //not a zip code
            let response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=cc56e1eed5e50c552e7a6e24b93608f0`) 
            const weatherData = await response.json();
            let resultsDiv = document.querySelector('.results-div');
            let resultsP = document.createElement('p');
            resultsP.textContent = `Name: ${weatherData.name} \n
                                  Country: ${weatherData.sys.country} \n
                                  Weather: ${weatherData.weather[0].main} \n
                                  Temp: ${weatherData.main.temp}`
            resultsDiv.append(resultsP);
            console.table(weatherData);
        
        }
        else{
            //is zip code
            let response = await fetch( `https://api.openweathermap.org/data/2.5/weather?zip=${loc}&appid=cc56e1eed5e50c552e7a6e24b93608f0`) 
            const weatherData = await response.json();
            let resultsDiv = document.querySelector('.results-div');
            let resultsP = document.createElement('p');
            resultsP.textContent = `Name: ${weatherData.name}
                                    Country: ${weatherData.sys.country}
                                    Weather: ${weatherData.weather[0].main}
                                    Temp: ${weatherData.main.temp}`
            resultsDiv.append(resultsP);
            console.table(weatherData);
        }
    } catch (err) {console.error(err)}
         
}

