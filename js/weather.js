const api_key = "b68fbdc048df8f2ad05dfb471eeba830";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    fetch(url).then(response =>response.json()).then(data => {
        const cityContainer = document.querySelector("#weather span:first-child");
        const weatherContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerText = data.name;
        weatherContainer.innerText = `, ${data.weather[0].main} / ${data.main.temp} C`;
    });
}
function onGeoError(){
    alert("당신을 찾지 못했습니다. 날씨를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoOk)