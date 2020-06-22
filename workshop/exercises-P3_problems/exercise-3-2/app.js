// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

const buttons = document.querySelector(".buttons");

for (i = 1; i <= 4; i++) {
  let startButton = document.getElementById(`btn-${i}`);
  startButton.style.backgroundColor = "gold";
  startButton.style.opacity = "1";
}

const clickFunction = function (event) {
  //   console.log("click");
  //   console.log(event.target);
  const button = event.target;
  let buttonID = event.target.id;
  //   console.log(buttonID);
  switch (buttonID) {
    case "btn-1":
      if (button.style.opacity === "1") {
        button.style.opacity = "0";
        // console.log(event.target.id);
      } else {
        button.style.opacity = "1";
      }
      return button.style.opacity;
    case "btn-2":
      if (button.style.backgroundColor === "gold") {
        button.style.backgroundColor = "crimson";
      } else {
        button.style.backgroundColor = "gold";
      }
      return button.style.backgroundColor;
    case "btn-3":
      if (button.style.backgroundColor === "gold") {
        button.style.backgroundColor = "lightblue";
      } else {
        button.style.backgroundColor = "gold";
      }
      return button.style.backgroundColor;
    case "btn-4":
      button.classList.toggle("jitters");
  }
};

buttons.addEventListener("click", clickFunction);
