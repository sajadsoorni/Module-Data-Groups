//Global Variables
const timeDisplay = document.getElementById("timeRemaining"); // Timer display element
const alarmInput = document.getElementById("alarmSet"); // Input field for alarm time
let countDownInterval; // To store interval ID for the countdown

// Change display text color to red

function redColor() {
  timeDisplay.style.color = "red";
}
// Reset display text color to black

function blackColor() {
  timeDisplay.style.color = "black";
}
// Clear the input field

function clearInputBox() {
  alarmInput.value = "";
}

//Main Function
function setAlarm() {
  //clear any existing interval if one is running

  if (countDownInterval) {
    clearInterval(countDownInterval);
  }

  //get the input value and convert it to a number

  let time = Number(alarmInput.value);
  if (!isNaN(time) && time > 0) {
    const updateDisplay = () => {
      const minutes = String(Math.floor(time / 60)).padStart(2, "0");
      const seconds = String(time % 60).padStart(2, "0");
      timeDisplay.textContent = `Time Remaining: ${minutes}:${seconds}`;
    };
    updateDisplay();
    //Start the countdown

    countDownInterval = setInterval(() => {
      if (time <= 0) {
        clearInterval(countDownInterval);
        redColor();
        playAlarm();
      } else {
        time -= 1;
        updateDisplay();
      }
    }, 1000); //run every 1000ms(1 Second)
  } else {
    time.timeDisplay.textContent = `Please enter a valid number!`;
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    clearInputBox();
    blackColor();
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
