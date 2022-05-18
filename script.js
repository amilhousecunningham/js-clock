setInterval(timeShown, 1000);

function timeShown() {

    const timeNow = new Date();

    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
   

    if (hoursOfDay > 12) {
        hoursOfDay-= 12;
    }

    if (hoursOfDay === 0) {
        hoursOfDay = 12;
    }

    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hoursOfDay + ":" + minutes + ":" + seconds;

    document.getElementById('time-clock').innerHTML = time + " ";

}
timeShown();