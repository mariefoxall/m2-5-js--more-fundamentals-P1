// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

const buttons = document.querySelector(".buttons");

const clickFunction = function (event) {
  //   console.log("click");
  let button = document.querySelector(`#${event.target.id}`);
  let buttonID = button.id;
  //   console.log(buttonID);
  switch (buttonID) {
    case "btn-1": {
      button.style.opacity = "0";
      //   console.log("button 1");
      return "button 1";
    }
    case "btn-2": {
      //   console.log("button 2");
      button.style.backgroundColor = "crimson";
      return "button 2";
    }
    case "btn-3": {
      //   console.log("button 3");
      button.style.backgroundColor = "lightblue";
      return "button 3";
    }
    case "btn-4": {
      //   console.log("button 4");
      button.setAttribute("class", "jitters");
      return "button 2";
    }
  }
};

buttons.addEventListener("click", clickFunction);
