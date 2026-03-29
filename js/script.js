// =======================
// FADE-IN ANIMATION
// =======================

const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});


// =======================
// PARTICLE BACKGROUND (HERO ONLY)
// =======================

const canvas = document.createElement("canvas");
document.querySelector(".hero").appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    d: Math.random() * 0.7
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(147,51,234,0.5)";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });

  update();
}

function update() {
  particles.forEach(p => {
    p.y += p.d;
    if (p.y > canvas.height) p.y = 0;
  });
}

setInterval(draw, 30);
