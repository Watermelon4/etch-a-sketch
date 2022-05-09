const main = document.querySelector("main");
const canvas = main.querySelector(".canvas");
let grid;
const controls = main.querySelector(".controls")
const resetButton = controls.querySelector("#reset")
const colorPicker = controls.querySelector("#color-picker");
const sizeSelector = controls.querySelector("#grid-size-selector")

resetButton.addEventListener("click", resetGrid);
colorPicker.addEventListener("change", getColor);
sizeSelector.addEventListener("change", changeGridSize);

let gridSizeInput = sizeSelector.value;
let gridSize = Number(gridSizeInput); 
let gridWidthString = "512";
let gridWidth = Number(gridWidthString);
let currentColor = "grey";
let currentBox;


function changeGridSize() {
  gridSize = sizeSelector.value;
  resetGrid();
}

function createGrid() {

  let gridElement = document.createElement("div");
  gridElement.setAttribute("class", "grid");
  gridElement.style.width = `${gridWidth}px`;
  gridElement.style.height = `${gridWidth}px`;
  let boxSize = Math.round(gridWidth / gridSize);
  let gridTemplate = `repeat(${gridSize}, ${boxSize}px) / repeat(${gridSize}, ${boxSize}px)`;
  gridElement.style.gridTemplate = gridTemplate;
  canvas.appendChild(gridElement);
  populateGrid();
  grid = gridElement;
}

function populateGrid() {
  let numBoxesToCreate = gridSize ** 2;
  let gridElement = canvas.querySelector(".grid");
  for (let i = 0; i < numBoxesToCreate; i++) {
    let gridBoxElement = document.createElement("div");
    gridBoxElement.setAttribute("id", `box-${i}`)
    gridBoxElement = setGridBoxEventListeners(gridBoxElement);
    gridElement.append(gridBoxElement);
  }
}

function setGridBoxEventListeners(gridBoxElement) {
  gridBoxElement.addEventListener("click", function() {
    gridBoxElement.style.backgroundColor = `${currentColor}`;
  });
  gridBoxElement.addEventListener("mouseover", function() {
    gridBoxElement.style.border = "1px dashed grey"
  });
  gridBoxElement.addEventListener("mouseout", function() {
    gridBoxElement.style.border = ""
  });
  return gridBoxElement
}

function resetGrid() {
  canvas.removeChild(canvas.lastChild);
  createGrid();
  populateGrid();
}

function getColor() {
  currentColor = colorPicker.value;
}



createGrid();
