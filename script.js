//your JS code here. If required.
const container = document.getElementById("board");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

for (let i = 0; i < 800; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;

  // Reset after 1 second
  setTimeout(() => {
    element.style.backgroundColor = "#1d1d1d";
  }, 1000);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
