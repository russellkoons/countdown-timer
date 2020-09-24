function timer(secs) {
  const now = Date.now();
  const then = now + secs * 1000;
  console.log(now, then);
}