function digitalClock() {
    let date = new Date();
    // This will show the time like thia
    // Sat Apr 27 2021 20:01:00 GMT+0600 (Bangladesh Standard Time)
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormet = 'AM';


    // this is for  12 hours time format 
    if (hours === 0) {
        hours = hours;
    } else if (hours > 12) {
        hours = hours - 12;
        timeFormet = 'PM'
    }


    // If time less then 10 then add one '0' before the time
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
 
    let finalTime = `${hours}:${minutes}:${seconds}`;

    document.getElementById('time').innerText = finalTime;
    document.querySelector('small').innerText = timeFormet;


    setInterval(digitalClock, 1000);
}

digitalClock();