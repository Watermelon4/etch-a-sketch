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

const main = document.querySelector("main")
const canvas = main.querySelector(".canvas");
let grid = document.createElement("div");

grid.style.gridTemplate = "repeat(8, 64px) / repeat(8, 64px)";
canvas.appendChild(grid);
let box = document.createElement("div");
grid.appendChild(box);
let a = 0;

function createGrid(gridSize) {
  gridSize = Number(gridSize);
  grid.setAttribute("class", "grid");
  const gridStyles = getComputedStyle(grid)
  const gridWidth = Number(gridStyles.width);

  const boxWidth = gridWidth / gridSize;
  let gridTemplateStyle = `return(${gridSize}, ${boxWidth}) / 
                           return(${gridSize}, ${boxWidth})`;
  grid.style.gridTemplate = gridTemplateStyle;
}

let gridSize = "8";
createGrid(gridSize);