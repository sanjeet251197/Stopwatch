let startTime, elapsedTime = 0, timerInterval;
const timeDisplay = document.getElementById("display");

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTime, 10);
  document.getElementById("startButton").disabled = true;
  document.getElementById("stopButton").disabled = false;
}

function stop() {
  clearInterval(timerInterval);
  document.getElementById("startButton").disabled = false;
  document.getElementById("stopButton").disabled = true;
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
  document.getElementById("startButton").disabled = false;
  document.getElementById("stopButton").disabled = true;
}

function updateTime() {
  elapsedTime = Date.now() - startTime;
  updateDisplay();
}

function updateDisplay() {
  const ms = elapsedTime % 1000;
  const sec = Math.floor(elapsedTime / 1000) % 60;
  const min = Math.floor(elapsedTime / (1000 * 60)) % 60;
  const hr = Math.floor(elapsedTime / (1000 * 60 * 60)) % 24;
  const formattedTime = `${formatTime(hr)}:${formatTime(min)}:${formatTime(sec)}.${formatTime(ms, true)}`;
  timeDisplay.textContent = formattedTime;
}

function formatTime(time, isMs = false) {
  return (isMs ? time.toString().padStart(3, "0") : time.toString().padStart(2, "0"));
}