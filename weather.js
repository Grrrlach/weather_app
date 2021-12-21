const APIKey = '3ac866dcd2ef65725acdd5e6f9bf5282';
// displaying:
// name
// temp
// feels like
// min
// max
// wind


const handleClick = () => {
    console.log ("start-handleclick")
    zipCode = document.getElementById("zip-code").value;
    APICall(zipCode)
}

// const handleClick = ()=>{
//     zipCode = document.getElementById("weather-zip").value;
//     axiosCall(zipCode)
// };

document.getElementById("button").addEventListener('click', handleClick);

const APICall = async ()=>{
    console.log("start-apicall")
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},&appid=3ac866dcd2ef65725acdd5e6f9bf5282&units=imperial`);
    data = response.data;
    console.log(data)
    document.getElementById("location").innerHTML = `${data.name}`
    document.getElementById("temp").innerHTML = `${data.main.temp}`
    document.getElementById("wind").innerHTML = `${data.wind.speed}`
    document.getElementById("min").innerHTML = `${data.main.temp_min}`
    document.getElementById("max").innerHTML = `${data.main.temp_max}`
    document.getElementById("humidity").innerHTML = `${data.main.humidity}`
    console.log(data.weather[0].icon)
    document.getElementById("forecast").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`

}

// https://api.openweathermap.org/data/2.5/weather?zip=14132,&appid=3ac866dcd2ef65725acdd5e6f9bf5282&units=imperial
