let time = document.querySelector('.time p');
let date = document.querySelector('.date p');

const dayOfWeekArray = {
    "0" : "Sunday",
    "1" : "Monday",
    "2" : "Tuesday",
    "3" : "Wednesday",
    "4" : "Thursday",
    "5" : "Friday",
    "6" : "Saturday",
}

const monthArray = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December",
}

function addZero(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}

function start() {
    let now = new Date();

    let hours = addZero(now.getHours());
    let minutes = addZero(now.getMinutes());
    let seconds = addZero(now.getSeconds());
    time.innerHTML = `${hours}:${minutes}:${seconds}`;

    let day = now.getDate();
    let month = monthArray[addZero(now.getMonth() + 1)];
    let year = now.getFullYear();
    let dayOfWeek = dayOfWeekArray[now.getDay().toString()];
    if (day == 1) {
        date.innerHTML = `${dayOfWeek}, ${day}st ${month} of ${year}`;
    } else if (day == 2) {
        date.innerHTML = `${dayOfWeek}, ${day}nd ${month} of ${year}`
    } else if (day == 3) {
        date.innerHTML = `${dayOfWeek}, ${day}rd ${month} of ${year}`
    } else {
        date.innerHTML = `${dayOfWeek}, ${day}th ${month} of ${year}`
    }
    

    setTimeout(function() {
        start();
    }, 500)
}

start();