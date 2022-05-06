/* TODO
- generate x boxes based on the size of the grid and append to grid
- select boxes based on mouse hover
- edit color of boxes when clicked or held
- color select
- reset
- edit grid size

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

let gridSizeInput = "64"; // simulate selection
let gridSize = Number(gridSizeInput); 
let gridWidthString = "512";
let gridWidth = Number(gridWidthString); // simulate
const main = document.querySelector("main");
const canvas = main.querySelector(".canvas");

function createGrid() {
  let gridElement = document.createElement("div");
  gridElement.setAttribute("class", "grid");
  gridElement.style.width = `${gridWidth}px`;
  gridElement.style.height = `${gridWidth}px`;
  let boxSize = Math.round(gridWidth / gridSize);
  let gridTemplate = `repeat(${gridSize}, ${boxSize}px) / repeat(${gridSize}, ${boxSize}px)`;
  gridElement.style.gridTemplate = gridTemplate;
  canvas.appendChild(gridElement);
}

function populateGrid() {
  let numBoxesToCreate = gridSize ** 2;
  let gridElement = canvas.querySelector(".grid");
  for (let i = 0; i < numBoxesToCreate; i++) {
    let gridBoxElement = document.createElement("div");
    gridBoxElement.setAttribute("id", `box-${i}`)
    gridElement.append(gridBoxElement);
  }
}

function resetGrid() {
  canvas.removeChild(canvas.firstChild);
  createGrid()
}

function getGridSize() {
  // check value of gridSize in ui
  // need to create ui element first
}

createGrid();
populateGrid();
let a = 0;