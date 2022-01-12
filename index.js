// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  confirm(`Horraaay, ${winner} wins!`);
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */

let lastFilled = "O";
let boxesFilled = 0;

function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  let X = document.getElementById(index).innerHTML;
  console.log(`the content of ${X} is`);
  if (X !== "X" && X !== "O") {
    if (lastFilled === "O") {
      lastFilled = "X";
      fillButton(index, "X");
      document.getElementById(index).setAttribute("class", "green xobutton");
      boxesFilled++;
    } else {
      lastFilled = "O";
      fillButton(index, "O");
      document.getElementById(index).setAttribute("class", "red xobutton");
      boxesFilled++;
    }

    if (checkWinner()) {
      X = document.getElementById(index).innerHTML;
      winningAlert(X);

      reset();
    } else if (boxesFilled === 9) {
      alert(`Its a draw !!!`);
      reset();
    } else {
      console.log("checking");
      let oPlayed = false;
      let position = 0;
      let checked = 0;
      while (oPlayed === false) {
        position = Math.floor(Math.random() * 9 + 1);
        console.log(`check ${position}`);
        if (
          document.getElementById(position).innerHTML !== "X" &&
          document.getElementById(position).innerHTML !== "O"
        ) {
          oPlayed = true;
          lastFilled = "O";
          fillButton(position, "O");
          document
            .getElementById(position)
            .setAttribute("class", "red xobutton");
          boxesFilled++;
        }
      }
      if (checkWinner()) {
        X = document.getElementById(position).innerHTML;
        winningAlert(X);

        reset();
      } else if (boxesFilled === 9) {
        alert(`Its a draw !!!`);
        reset();
      }
    }
  }

  // while ()
  // fillButton(9, "O");
}
function checkWinner() {
  let index1 = document.getElementById(1).innerHTML;
  let index2 = document.getElementById(2).innerHTML;
  let index3 = document.getElementById(3).innerHTML;
  let index4 = document.getElementById(4).innerHTML;
  let index5 = document.getElementById(5).innerHTML;
  let index6 = document.getElementById(6).innerHTML;
  let index7 = document.getElementById(7).innerHTML;
  let index8 = document.getElementById(8).innerHTML;
  let index9 = document.getElementById(9).innerHTML;

  const row1 =
    index1 === index2 &&
    index2 === index3 &&
    (index1 === "X" || index1 === "O");
  const row2 =
    index4 === index5 &&
    index5 === index6 &&
    (index4 === "X" || index4 === "O");
  const row3 =
    index7 === index8 &&
    index8 === index9 &&
    (index7 === "X" || index7 === "O");

  const col1 =
    index1 === index4 &&
    index4 === index7 &&
    (index1 === "X" || index1 === "O");

  const col2 =
    index2 === index5 &&
    index5 === index8 &&
    (index2 === "X" || index2 === "O");

  const col3 =
    index3 === index6 &&
    index6 === index9 &&
    (index3 === "X" || index3 === "O");

  const diag1 =
    index1 === index5 &&
    index5 === index9 &&
    (index1 === "X" || index1 === "O");

  const diag2 =
    index3 === index5 &&
    index5 === index7 &&
    (index3 === "X" || index3 === "O");

  return row1 || row2 || row3 || col1 || col2 || col3 || diag1 || diag2;
}

function reset() {
  lastFilled = "O";
  for (let i = 1; i < 10; i++) {
    document.getElementById(i).innerHTML = " ";
  }
}

/**
 * 👇🏻 BELOW are functions that you CAN use to structure your code properly.
 * It's always a good idea to make a function for every single purpose.
 *
 */

// In this function you should check if the player is X or O
function checkPlayer() {
  // ....
}

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
// function checkWinner

// function restartGame
