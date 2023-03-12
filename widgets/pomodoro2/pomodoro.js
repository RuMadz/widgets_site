var sessionMin = 25,
  breakMin = 2,
  timeRunning = false,
  ftn = 0,
  isBreak = false,
  timer = sessionMin * 60,
  count = timer / 100,
  $time = $("#time"),
  $title = $("#title"),
  $playBtn = $("#playBtn"),
  $session = $("#session"),
  $break = $("#break"),
  $tSession = $("#titleSession"),
  $tBreak = $("#titleBreak"),
  $progressBar = $("#progressBar");

$session.append(sessionMin);
$break.append(breakMin);
$time.append(formatTime(sessionMin * 60));
window.onload = function () {
  $(".title-session").css("color", "green");
  $(".title-break").css("opacity", "0.2");
};

function adjustment(type, adj) {
  if (type == "session") {
    sessionMin += adj;
    sessionMin >= 0 && $session.html(sessionMin);
    sessionMin = sessionMin < 0 ? 0 : sessionMin;
    timer = sessionMin * 60;
  } else if (type == "break") {
    breakMin += adj;
    breakMin >= 0 && $break.html(breakMin);
    breakMin = breakMin < 0 ? 0 : breakMin;
  }
  $time.html(isBreak ? formatTime(breakMin * 60) : formatTime(sessionMin * 60));
  count = timer / 100;
}

function formatTime(numb) {
  var minutes, seconds;

  minutes = parseInt(numb / 60, 10);
  seconds = parseInt(numb % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  $time.text(minutes + ":" + seconds);
}

function startTimer() {
  formatTime(timer);

  if (--timer < 0) {
    timer = !isBreak ? (timer = breakMin * 60) : (timer = sessionMin * 60);
    isBreak = !isBreak;
    changeSession(isBreak);

    count = timer / 100;
  }
  updateProgress(timer / count);
}

function startTimerClickHandler() {
  if (!!timeRunning) {
    clearInterval(ftn);
    $(".btn-minus-plus").removeAttr("disabled");
    if (!!isBreak) {
      $(".btn-plus").prop("disabled", true);
    }
  } else {
    ftn = setInterval(startTimer, 1000);
    $(".btn-minus-plus").prop("disabled", true);
  }
  timeRunning = !timeRunning;
}

function updateProgress(percentage) {
  $("#progress-bar").css("width", percentage + "%");
}

function changeSession() {
  if (!isBreak) {
    $(".title-session").css("color", "green");
    $(".title-break").css("opacity", "0.2");
  } else {
    $(".title-break").css("color", "red");
    $(".title-session").css("opacity", "0.2");
  }
}
const btns = document.querySelectorAll(".dataColor");
btns.forEach((b) =>
  b.addEventListener("click", () => {
    document.documentElement.style.setProperty("--hue", b.dataset.color);
  })
);
