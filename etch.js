document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(16, 1fr)";
  container.style.gridTemplateRows = "repeat(16, 1fr)";

  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.style.border = "1px solid #414559";
    container.appendChild(div);
  }
});
