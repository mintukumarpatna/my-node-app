// Dynamic values
document.getElementById("version").innerText = "Version: v" + Math.floor(Math.random()*10);
document.getElementById("hostname").innerText = "Hostname: " + window.location.hostname;
document.getElementById("time").innerText = "Time: " + new Date().toLocaleString();

// PARTICLES (cool floating neon effect)
const container = document.querySelector('.particles');

for (let i = 0; i < 80; i++) {
  const dot = document.createElement('span');
  dot.style.left = Math.random() * 100 + '%';
  dot.style.animationDuration = (5 + Math.random() * 10) + 's';
  container.appendChild(dot);
}

// Smooth live time update
setInterval(() => {
  document.getElementById("time").innerText =
    "Time: " + new Date().toLocaleString();
}, 1000);