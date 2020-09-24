let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

function timer(secs) {
  const now = Date.now();
  const then = now + secs * 1000;
  displayTimeLeft(secs);
  displayEndTime(then);
  
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

  const display = `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const mins = end.getMinutes();
  endTime.textContent = `Be back at ${hour > 12 ? hour - 12 : hour}:${mins < 10 ? '0' : ''}${mins}`;
}