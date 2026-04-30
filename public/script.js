// Dynamic info
document.getElementById("version").innerText = "Version: v1";
document.getElementById("hostname").innerText = "Hostname: " + window.location.hostname;
document.getElementById("time").innerText = "Time: " + new Date().toLocaleString();

// Live time update
setInterval(() => {
  document.getElementById("time").innerText =
    "Time: " + new Date().toLocaleString();
}, 1000);

// 🎇 Particles
const container = document.querySelector('.particles');
for (let i = 0; i < 100; i++) {
  const dot = document.createElement('span');
  dot.style.left = Math.random() * 100 + '%';
  dot.style.animationDuration = (5 + Math.random()*10) + 's';
  container.appendChild(dot);
}

// 🤖 Lottie animation
lottie.loadAnimation({
  container: document.getElementById('lottie'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json'
});

// 🔊 Sound effect
const sound = new Audio('https://www.soundjay.com/buttons/sounds/button-3.mp3');

document.getElementById("soundBtn").addEventListener("click", () => {
  sound.play();
});