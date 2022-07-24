// for ui

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// calculation of next year

const currentYears = new Date().getFullYear();

let nextYears = currentYears + 1;

const newYears = `1 jan ${nextYears}`;

// Countdown function

 function countdown() {

    const newYearsDate = new Date(newYears);

    const currentDate = new Date();
    
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    
    const hours = Math.floor((totalSeconds / 3600) % 24);
    
    const mins = Math.floor((totalSeconds / 60) % 60);
    
    const seconds = Math.floor(totalSeconds % 60);

    // inner HTML

    daysEl.innerHTML = formatTime(days);

    hoursEl.innerHTML = formatTime(hours);

    minsEl.innerHTML = formatTime(mins);

    secondsEl.innerHTML = formatTime(seconds);
 
}

// formatTime

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}


// initial call

setInterval(countdown, 1000);