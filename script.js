const timerDetails = document.getElementById("timer");

function updateTimer() {
    const time = new Date();
    timerDetails.textContent = time;
}

updateTimer();

setInterval(updateTimer, 1000);