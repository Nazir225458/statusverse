// main.js - StatusVerse ka heart 💓

console.log("🚀 StatusVerse JavaScript Loaded Successfully!");

// 🔁 Smooth Scroll for internal links
document.querySelectorAll('a[href^=".html"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ✨ Reveal on Scroll Effect (add .reveal class in HTML)
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);

// 🌙 Optional: Auto Dark Mode toggle (based on time)
const hour = new Date().getHours();
if (hour >= 18 || hour <= 5) {
  document.body.classList.add("dark-mode");
}

// 🔝 Back to Top Button (show after scroll)
const backToTop = document.createElement("div");
backToTop.innerHTML = "⬆️";
backToTop.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #00ffd5;
  color: #000;
  padding: 10px 12px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(17, 9, 9, 0.92);
  z-index: 999;
  display: none;
`;
document.body.appendChild(backToTop);

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 400 ? "block" : "none";
});

// 🪄 3D Tilt Effect on Cards (add .tilt class to elements)
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (x - centerX) / 10;
    card.style.transform = `rotateX(${ -rotateX }deg) rotateY(${ rotateY }deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

// 📋 Copy to Clipboard (for captions)
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const text = btn.getAttribute("data-text");
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = "✅ Copied!";
      setTimeout(() => (btn.textContent = "📋 Copy"), 2000);
    });
  });
});

// 🧊 Ice Smooth Fade Effect on Load
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 0.7s ease-in-out";
    document.body.style.opacity = 1;
  }, 100);
});
