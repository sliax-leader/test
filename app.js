const dateElement = document.querySelector("#today-date");

if (dateElement) {
  const today = new Date();
  const formatted = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(today);

  const isoDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(today);

  dateElement.textContent = formatted;
  dateElement.dateTime = isoDate;
}
