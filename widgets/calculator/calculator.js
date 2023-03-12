// calculator

let outputScreen = document.getElementById("output-screen");

function display(num) {
  outputScreen.value += num;
}
function Calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalid");
  }
}
function Clear() {
  outputScreen.value = "";
}
function Delete() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
const btns = document.querySelectorAll(".dataColor");
btns.forEach((b) =>
  b.addEventListener("click", () => {
    document.documentElement.style.setProperty("--hue", b.dataset.color);
  })
);
