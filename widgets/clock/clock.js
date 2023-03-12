// clock b
let minEl = document.querySelector(".min");
let secEl = document.querySelector(".sec");
let hourEl = document.querySelector(".hr");

setInterval(() => {
  let date = new Date();
  let secDeg = (date.getSeconds() / 60) * 360 - 90;
  let minDeg = (date.getMinutes() / 60) * 360 - 90;
  let hourDeg = (date.getHours() / 12) * 360 - 90;
  secEl.style.transform = `rotate(${secDeg}deg)`;
  minEl.style.transform = `rotate(${minDeg}deg)`;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  // console.log(date.getSeconds())
  // console.log(date.getMinutes())
}, 1000);
let btns = document.querySelectorAll("button");
btns.forEach((b) =>
  b.addEventListener("click", () => {
    document.documentElement.style.setProperty("--hue", b.dataset.color);
  })
);
