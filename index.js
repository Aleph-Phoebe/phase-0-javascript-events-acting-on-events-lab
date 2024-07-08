// Your code here

const dodger = document.getElementById("dodger");

document.addEventListener("keydown", function (a) {
  if (a.key == "ArrowLeft") {
    moveDodgerLeft();
  }
});

//Function to moveDodgerLeft
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

// Use the if statement to execute
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

//Function to moveDodgerRight
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Use the if statement to execute
  if (left < 360) { 
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function(a) {
  if (a.key === "ArrowRight") {
    moveDodgerRight();
  }
});
