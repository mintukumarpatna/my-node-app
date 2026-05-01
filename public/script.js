document.getElementById("version").innerText = "Version: v1";
document.getElementById("hostname").innerText = "Hostname: " + window.location.hostname;

setInterval(() => {
  document.getElementById("time").innerText =
    "Time: " + new Date().toLocaleString();
}, 1000);