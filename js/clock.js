const clock = document.querySelector("#clock");
let hour, minutes, seconds;

function turnClock(){
    hour = String(new Date().getHours()).padStart(2, "0");
    minutes = String(new Date().getMinutes()).padStart(2, "0");
    seconds = String(new Date().getSeconds()).padStart(2, "0");
    clock.innerText = hour + "시 " + minutes + "분 " + seconds + "초";
}

turnClock();
setInterval(turnClock, 1000);