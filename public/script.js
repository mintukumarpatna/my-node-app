document.getElementById("version").innerText = "Version: v1";
document.getElementById("hostname").innerText = "Hostname: " + window.location.hostname;
document.getElementById("time").innerText = "Time: " + new Date().toLocaleString();

// particles
const container = document.querySelector('.particles');

for (let i = 0; i < 50; i++) {
  const dot = document.createElement('span');
  dot.style.position = 'absolute';
  dot.style.width = '5px';
  dot.style.height = '5px';
  dot.style.background = '#22c55e';
  dot.style.left = Math.random() * 100 + '%';
  dot.style.top = Math.random() * 100 + '%';
  container.appendChild(dot);
}