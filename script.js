const clock = document.querySelector("#clock");

function renderClock() {
  const stamp = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "medium",
    timeZone: "Asia/Seoul",
  }).format(new Date());

  clock.textContent = `KST ${stamp}`;
}

renderClock();
setInterval(renderClock, 1000);
