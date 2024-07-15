var time = document.getElementById('time');
var miliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

function count() {
    miliseconds += 9;
    time.innerHTML = `${addZeros(hours,2)}:${addZeros(minutes,2)}:${addZeros(seconds,2)}:${addZeros(miliseconds,3)}`;

    if (miliseconds == 999) {
        seconds += 1;
        miliseconds = 0;
    } 
    if (seconds == 60) {
        minutes += 1;
        seconds = 0;
    }
    if (minutes == 60) {
        hours += 1;
        minutes = 0;
    }
}

function addZeros(num, len) {
    let numStr = num.toString();

    while (numStr.length < len) {
        numStr = '0' + numStr;
    }

    return numStr
}

var timer;
var counting = false;
var paused = false;

function start() {
    if (!counting) {
        timer = window.setInterval(count, 9);
        counting = true;
    }
    if (paused) {
        str.innerHTML = 'Start'
    }
};

function pause() {
    if (counting) {
        counting = false;
        clearInterval(timer)
        str.innerHTML = 'Continue'
        paused = true;
    }
};

function reset() {
    counting = false;
    clearInterval(timer)

    miliseconds = 0;
    seconds = minutes = hours = 0;
    if (paused) {
        str.innerHTML = 'Start'
    }

    time.innerHTML = `00:00:00:000`;
}