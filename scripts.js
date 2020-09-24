let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(secs) {
  const now = Date.now();
  const then = now + secs * 1000;
  displayTimeLeft(secs);
  
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // check if we should stop
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    // display countdown
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(secs) {
  const mins = Math.floor(secs / 60);
  const remainder = secs % 60;

  const display = `${mins}:${remainder}`;
  timerDisplay.textContent = display;
}