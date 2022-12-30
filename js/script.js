const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const mobileMenu=document.getElementById('mobile-menu');

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  mobileMenu.classList.toggle('show-menu');
  document.body.classList.toggle("stop-scrolling");
}
