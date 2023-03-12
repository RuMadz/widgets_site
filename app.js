const circle = document.querySelector(".reveal__circle");
const revealFront = document.querySelector(".reveal--front");
const title = document.querySelector(".words-con");

document.addEventListener("mousemove", (event) => {
  const mouseX = event.pageX;
  const mouseY = event.pageY;

  revealFront.style = `clip-path: circle(8em at ${mouseX}px ${mouseY}px);`;
  circle.style = `transform: translate(${mouseX}px, ${mouseY}px)`;
});
function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let mid = "AM";
  mid = hour >= 12 ? "PM" : "AM";
  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.querySelector("#time").innerHTML = `${hour}:${min}`;
  document.querySelector("#sec").innerHTML = `${sec}`;
  document.querySelector("#mid").innerHTML = `${mid}`;
  let curr_date = date.getDate();
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();
  let month_name = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let showDay = document.querySelectorAll(".day_wrapper span");
  document.querySelector(
    "#showDate"
  ).innerHTML = `${month_name[month]} ${curr_date} ${year}`;
  showDay[day].style.opacity = "1";
}
function updateTime(e) {
  if (e < 10) return "0" + e;
  else return e;
}

setInterval(currentTime, 1000);

// clock widget

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

// white calendar
const isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};
const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};
let calendar = document.querySelector(".calendar");
const month_names = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month_picker = document.querySelector("#month-picker");
const dayTextFormate = document.querySelector(".day-text-formate");
const timeFormate = document.querySelector(".time-formate");
const dateFormate = document.querySelector(".date-formate");

month_picker.onclick = () => {
  month_list.classList.remove("hideonce");
  month_list.classList.remove("hide");
  month_list.classList.add("show");
  dayTextFormate.classList.remove("showtime");
  dayTextFormate.classList.add("hidetime");
  timeFormate.classList.remove("showtime");
  timeFormate.classList.add("hideTime");
  dateFormate.classList.remove("showtime");
  dateFormate.classList.add("hideTime");
};

const generateCalendar = (month, year) => {
  let calendar_days = document.querySelector(".calendar-days");
  calendar_days.innerHTML = "";
  let calendar_header_year = document.querySelector("#year");
  let days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  let currentDate = new Date();

  month_picker.innerHTML = month_names[month];

  calendar_header_year.innerHTML = year;

  let first_day = new Date(year, month);

  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
    let day = document.createElement("div");

    if (i >= first_day.getDay()) {
      day.innerHTML = i - first_day.getDay() + 1;

      if (
        i - first_day.getDay() + 1 === currentDate.getDate() &&
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth()
      ) {
        day.classList.add("current-date");
      }
    }
    calendar_days.appendChild(day);
  }
};

let month_list = calendar.querySelector(".month-list");
month_names.forEach((e, index) => {
  let month = document.createElement("div");
  month.innerHTML = `<div>${e}</div>`;

  month_list.append(month);
  month.onclick = () => {
    currentMonth.value = index;
    generateCalendar(currentMonth.value, currentYear.value);
    month_list.classList.replace("show", "hide");
    dayTextFormate.classList.remove("hideTime");
    dayTextFormate.classList.add("showtime");
    timeFormate.classList.remove("hideTime");
    timeFormate.classList.add("showtime");
    dateFormate.classList.remove("hideTime");
    dateFormate.classList.add("showtime");
  };
});

(function () {
  month_list.classList.add("hideonce");
})();
document.querySelector("#pre-year").onclick = () => {
  --currentYear.value;
  generateCalendar(currentMonth.value, currentYear.value);
};
document.querySelector("#next-year").onclick = () => {
  ++currentYear.value;
  generateCalendar(currentMonth.value, currentYear.value);
};

let currentDate = new Date();
let currentMonth = { value: currentDate.getMonth() };
let currentYear = { value: currentDate.getFullYear() };
generateCalendar(currentMonth.value, currentYear.value);

const todayShowTime = document.querySelector(".time-formate");
const todayShowDate = document.querySelector(".date-formate");

const currshowDate = new Date();
const showCurrentDateOption = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};
// black calendar

window.onload = function () {
  let d = new Date();

  let date = document.querySelector(" .date");

  let month = document.querySelector(" .month");

  date.innerText = d.getDate();

  let lang = navigator.language;

  month.innerText = d.toLocaleString(lang, { month: "long" });
};

// digital clock mini

function currentMiniTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let secs = date.getSeconds();
  let mid = "AM";
  mid = hour >= 12 ? "PM" : "AM";
  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
  hour = updateMiniTime(hour);
  min = updateMiniTime(min);
  secs = updateMiniTime(secs);
  document.querySelector(".time").innerHTML = `${hour}:${min}`;
  document.querySelector(".secs").innerHTML = `${secs}`;
  document.querySelector(".mid").innerHTML = `${mid}`;
  let curr_date = date.getDate();
  let day = date.getDay();
  let month = date.getMonth();
  let year = date.getFullYear();
  let month_name = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let showDay = document.querySelectorAll(".mini_day_wrapper span");
  document.querySelector(
    ".showDate"
  ).innerHTML = `${month_name[month]} ${curr_date} ${year}`;
  showDay[day].style.opacity = "1";
}
function updateMiniTime(e) {
  if (e < 10) return "0" + e;
  else return e;
}
setInterval(currentMiniTime, 1000);
