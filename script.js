function updateUTCTime() {
  const utcTimeElement = document.getElementById("utcTime");
  const current = new Date();
  utcTimeElement.textContent = current.toISOString().split(".")[0] + " UTC";
}

updateUTCTime();