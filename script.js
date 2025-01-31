function updateUTCTime() {
  const utcTimeElement = document.getElementById("utcTime");
  const now = new Date();
  utcTimeElement.textContent = now.toISOString().split(".")[0] + " UTC";
}

updateUTCTime();