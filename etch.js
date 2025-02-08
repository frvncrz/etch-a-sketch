// button for popup to add or remove number of squares for new grid
const button = document.getElementById("new-grid");
button.addEventListener("click", () => {
  const squares = parseInt(
    prompt(
      "Enter the number of squares per side for the new grid (e.g., 16 for a 16x16 grid):"
    ),
    10
  );

  if (squares && squares > 0) {
    createGrid(squares);
  } else {
    alert("Please enter a valid number.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  createGrid(16); // Default grid size
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
    container.appendChild(div);
  }
}
