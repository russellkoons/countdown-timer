let countdown;

function timer(secs) {
  const now = Date.now();
  const then = now + secs * 1000;
  displayTimeLeft(secs);
  
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) * 1000);

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
  console.log(secs);
}