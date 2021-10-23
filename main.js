const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");
const menuIcon = document.querySelectorAll(".menu-icon");
const menuOpen = document.getElementById("menu-open");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
  menuIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});
window.addEventListener("resize", () => {
  if (document.body.clientWidth > 799) {
    nav.classList.remove("show");
    menuIcon.forEach((icon) => {
      icon.classList.add("hidden");
    });
    menuOpen.classList.remove("hidden");
  }
});
