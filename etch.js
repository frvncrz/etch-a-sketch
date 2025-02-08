// button for popup to add or remove number of squares for new grid
const button = document.getElementById("new-grid");
button.addEventListener("click", () => {
  const squares = parseInt(
    prompt(
      "Enter the number of squares per side for the new grid (e.g., 16 for a 16x16 grid):"
    ),
    10
  );

  if (squares && squares > 0 && squares <= 100) {
    createGrid(squares);
  } else {
    alert("Please enter a valid number.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  createGrid(16); // Default grid size
});

let isMouseDown = false;

document.addEventListener("mousedown", () => {
  isMouseDown = true;
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

function createGrid(squares) {
  const container = document.getElementById("container");
  container.innerHTML = ""; // Clear existing grid
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;

  const totalCells = squares * squares;
  for (let i = 0; i < totalCells; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-cell");
    div.style.border = "1px solid #414559";
    div.style.opacity = "0";
    div.addEventListener("mousedown", () => {
      div.style.backgroundColor = getRandomColor();
      let currentOpacity = parseFloat(div.style.opacity);
      if (currentOpacity < 1) {
        div.style.opacity = currentOpacity + 0.1;
      }
    });
    div.addEventListener("mousemove", () => {
      if (isMouseDown) {
        div.style.backgroundColor = getRandomColor(); // Change color on mouse move
        let currentOpacity = parseFloat(div.style.opacity);
        if (currentOpacity < 1) {
          div.style.opacity = currentOpacity + 0.1;
        }
      }
    });
    container.appendChild(div);
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const clearButton = document.getElementById("clear-grid");
clearButton.addEventListener("click", () => {
  createGrid(16); // Reset the grid to default size
});
