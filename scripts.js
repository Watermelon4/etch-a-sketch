/* TODO
- generate x boxes based on the size of the grid and append to grid
- select boxes based on mouse hover
- edit color of boxes when clicked or held
- color select
- reset
- edit grid size

createGrid(length) {
  for gridlength**2 {
  create box[i]
  append box[i]
  }
}

eventlistener(hover) {
  get box
}

eventlistener(click/hold) {
  changeColor(box, color)
}

changeBoxColor(box, color) {
  box.backGround = color
}

reset() {
  for numBoxes {
    box[numBox].color = white
  }
}

editGridSize(length) {
  deleteGrid()
}

deleteGrid() {
  delete whole grid?
  or
  for numBoxes {
    del box
  }
}

getSelectedColor(input) {
  selected = input
}
*/

let gridSize = 8; // simulate selection
let gridWidthPixels = "512";
const main = document.querySelector("main");
const canvas = main.querySelector(".canvas");

function createGrid() {
  let gridElement = document.createElement("div");
  gridElement.setAttribute("class", "grid");
  gridElement.style.width = `${gridWidthPixels}px`;
  gridElement.style.height = `${gridWidthPixels}px`;
  canvas.appendChild(gridElement);
}

createGrid();
let a = 0;