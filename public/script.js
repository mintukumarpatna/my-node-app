// Version + Host
document.getElementById("version").innerText = "Version: v1";
document.getElementById("hostname").innerText = "Host: " + window.location.hostname;

// Live clock
setInterval(() => {
  document.getElementById("time").innerText =
    "Time: " + new Date().toLocaleString();
}, 1000);

// 🔥 Fake CPU + Memory meter (animated)
function randomValue(max) {
  return Math.floor(Math.random() * max);
}

const cpu = document.createElement("p");
const mem = document.createElement("p");

document.querySelector(".card").appendChild(cpu);
document.querySelector(".card").appendChild(mem);

setInterval(() => {
  cpu.innerText = "CPU Usage: " + randomValue(80) + "%";
  mem.innerText = "Memory Usage: " + randomValue(70) + "%";
}, 1500);

// 🟢 Status indicator
const status = document.createElement("div");
status.innerText = "🟢 STATUS: HEALTHY";
status.style.marginTop = "15px";
status.style.color = "#22c55e";
status.style.fontWeight = "bold";

document.querySelector(".card").appendChild(status);

// 🔁 Request counter (live feel)
let count = 0;
const counter = document.createElement("p");

document.querySelector(".card").appendChild(counter);

setInterval(() => {
  count++;
  counter.innerText = "Requests served: " + count;
}, 500);

// 🎇 Smart particles (interactive)
const container = document.querySelector('.particles');

for (let i = 0; i < 80; i++) {
  const dot = document.createElement('span');
  dot.style.left = Math.random() * 100 + '%';
  dot.style.top = Math.random() * 100 + '%';
  container.appendChild(dot);
}

// 🖱️ Mouse follow glow (WOW effect)
document.addEventListener("mousemove", (e) => {
  document.body.style.background =
    `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, #022c22, #000)`;
});