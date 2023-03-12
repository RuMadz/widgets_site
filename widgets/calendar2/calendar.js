window.onload = function () {
  let d = new Date();

  let date = document.querySelector(" .date");

  let month = document.querySelector(" .month");

  date.innerText = d.getDate();

  let lang = navigator.language;

  month.innerText = d.toLocaleString(lang, { month: "long" });
};
const btns = document.querySelectorAll("button");
btns.forEach((b) =>
  b.addEventListener("click", () => {
    document.documentElement.style.setProperty("--hue", b.dataset.color);
  })
);
