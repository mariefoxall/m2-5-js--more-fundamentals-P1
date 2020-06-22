// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.

const buttons = document.querySelector(".buttons");

for (i = 1; i <= 4; i++) {
  let startButton = document.getElementById(`btn-${i}`);
  startButton.style.opacity = "1";
  startButton.style.backgroundColor = "gold";
}

const clickFunction = function (event) {
  let button = event.target;
  let buttonID = event.target.id;

  switch (buttonID) {
    case "btn-1":
      console.log(buttonID);
      if (button.style.opacity === "1") {
        button.style.opacity = "0";
      } else {
        button.style.opacity = "1";
      }
      return button.style.opacity;
    case "btn-2":
      console.log(buttonID);
      if (button.style.backgroundColor === "gold") {
        button.style.backgroundColor = "crimson";
      } else {
        button.style.backgroundColor = "gold";
      }
      return button.style.backgroundColor;
    case "btn-3":
      console.log(buttonID);
      if (button.style.backgroundColor === "gold") {
        button.style.backgroundColor = "lightblue";
      } else {
        button.style.backgroundColor = "gold";
      }
      return button.style.backgroundColor;
    case "btn-4":
      console.log(buttonID);
      button.classList.toggle("jitters");
      return buttonID;
    case "reset":
      for (i = 1; i <= 4; i++) {
        let resetButton = document.getElementById(`btn-${i}`);
        resetButton.style.backgroundColor = "gold";
        resetButton.style.opacity = "1";
        resetButton.classList.remove("jitters");
      }
  }
};

buttons.addEventListener("click", clickFunction);
