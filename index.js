// Home status 

let homeCount = 0;
let changeCount = document.getElementById("home--btn");

function plusOne() {
    homeCount += 1;
    changeCount.textContent = homeCount;
}
function plusTwo() {
    homeCount += 2;
    changeCount.textContent = homeCount;
}
function plusThree() {
    homeCount += 3;
    changeCount.textContent = homeCount;
}
function minusOne() {
    homeCount -= 1;
    changeCount.textContent = homeCount;
}

function minusTwo() {
    homeCount -= 2;
    changeCount.textContent = homeCount;
}

function minusThree() {
    homeCount -= 3;
    changeCount.textContent = homeCount;
}



// Guest status 
let guestCount = 0;
let guestCountChange = document.getElementById("guest--btn");

function guestPlusOne() {
    guestCount += 1;
    guestCountChange.textContent = guestCount;
}
function guestPlusTwo() {
    guestCount += 2;
    guestCountChange.textContent = guestCount;
}
function guestPlusThree() {
    guestCount += 3;
    guestCountChange.textContent = guestCount;
}
function guestMinusOne() {
    guestCount -= 1;
    guestCountChange.textContent = guestCount;
}

function guestMinusTwo() {
    guestCount -= 2;
    guestCountChange.textContent = guestCount;
}

function guestMinusThree() {
    guestCount -= 3;
    guestCountChange.textContent = guestCount;
}
// save items 

let saveCountHome;
let saveCountGuest;
let domHome = document.getElementById("home--count")
let domGuest = document.getElementById("guest--count")

function saveClick() {
    saveCountHome  = homeCount + " -- "
    domHome.textContent += saveCountHome;

    saveCountGuest  = guestCount + " -- "
    domGuest.textContent += saveCountGuest;

    changeCount.textContent = 0;
    homeCount = 0;
    guestCountChange.textContent = 0;
    guestCount = 0;

}

let homeFoul = 0;
let guestFoul = 0;
let gameClockRunning = true;  // Assuming the game clock starts running by default

function homeFoulClick() {
    homeFoul++;
    // Logic for displaying foul count or triggering actions
    if (homeFoul >= 5) {
        alert("Home Team has reached 5 fouls!"); // Example action: Alerting a warning
    }
}

function guestFoulClick() {
    guestFoul++;
    // Logic for displaying foul count or triggering actions
    if (guestFoul >= 5) {
        alert("Guest Team has reached 5 fouls!"); // Example action: Alerting a warning
    }
}

function homeTimeout() {
    if (gameClockRunning) {
        alert("Home Team has called a timeout!");
        gameClockRunning = false;  // Stop the game clock
        // Logic to indicate that the home team has called a timeout (e.g., visually)
    } else {
        alert("The game clock is already stopped!");
    }
}

function guestTimeout() {
    if (gameClockRunning) {
        alert("Guest Team has called a timeout!");
        gameClockRunning = false;  // Stop the game clock
        // Logic to indicate that the guest team has called a timeout (e.g., visually)
    } else {
        alert("The game clock is already stopped!");
    }
}

let timerInterval;
let minutes = 0;
let seconds = 0;
let timeDisplay = document.getElementById("timeDisplay");

function restartGame() {
    homeCount = 0;
    guestCount = 0;
    changeCount.textContent = homeCount;
    guestCountChange.textContent = guestCount;
    clearInterval(timerInterval);
    minutes = 0;
    seconds = 0;
    timeDisplay.textContent = "00:00";
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(function() {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        timeDisplay.textContent = displayMinutes + ":" + displaySeconds;
    }, 1000);
}

startTimer();
