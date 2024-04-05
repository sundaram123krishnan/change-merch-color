const colors = document.querySelectorAll(".color");
const shape = document.querySelector(".shape");

for (let i = 0; i < colors.length; i++) {
  colors[i].onclick = changeColor;
}

function changeColor(e) {
  let hex = getComputedStyle(e.target).getPropertyValue("--color");
  shape.style.fill = hex;
}
