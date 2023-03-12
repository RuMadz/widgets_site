const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
  var dots = elem.getAttribute("data-dots");
  //   var marked = elem.getAttribute("value");
  //   var percent = Math.floor((dots * marked) / 100);
  var rotate = 360 / dots;
  var points = "";
  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
  }
  const percent = getCurrentProgress();

  const circleItem = document.getElementsByClassName("circle")[0];
  circleItem.style.width = `${percent}%`;

  const counterItem = document.getElementsByClassName("value")[0];
  counterItem.textContent = `${percent}%`;

  const currentYear = new Date().getFullYear();

  const yearTextItem = document.getElementsByClassName("current-year")[0];

  yearTextItem.textContent = currentYear;

  const currentDate = new Date();

  const dateItem = document.getElementsByClassName("current-date")[0];

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  dateItem.textContent = currentDate.toLocaleDateString("en-US", options);

  // Show alert if percent is equal to zero
  if (Math.floor(percent) === 0) {
    const alert = document.getElementsByClassName("alert")[0];
    alert.style.display = "block";
  }

  elem.innerHTML = points;
  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});
function getCurrentProgress() {
  const firstDateOfYear = new Date(new Date().getFullYear(), 0, 1);
  const currentDate = new Date();
  return (
    (((currentDate - firstDateOfYear) / (1000 * 60 * 60 * 24)) * 100) /
    365
  ).toFixed(0);
}
function updateUI() {
  const percent = getCurrentProgress();

  const circleItem = document.getElementsByClassName("circle")[0];
  circleItem.style.width = `${percent}%`;

  const counterItem = document.getElementsByClassName("value")[0];
  counterItem.textContent = `${percent}%`;

  // Show alert if percent is equal to zero
  if (Math.floor(percent) === 0) {
    const alert = document.getElementsByClassName("alert")[0];
    alert.style.display = "block";
  }
}
const btns = document.querySelectorAll("button");
btns.forEach((b) =>
  b.addEventListener("click", () => {
    document.documentElement.style.setProperty("--hue", b.dataset.color);
  })
);

setInterval(
  (function () {
    updateUI();
    return arguments.callee;
  })(),
  1000
);
