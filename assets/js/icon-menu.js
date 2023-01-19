const burger = document.querySelector(".menu-b");
const navLinks = document.querySelector(".nav-bar");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});
