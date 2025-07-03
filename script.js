const menu_button = document.querySelector(".menu-button");
const nav = document.querySelector("nav");
const show_nav = document.querySelector(".show-nav");
const close_nav = document.querySelector(".close-nav");
const overlay = document.querySelector(".overlay");
const navLinks = nav.querySelectorAll("a");

function setNavAccessibility(isOpen) {
  nav.setAttribute("aria-hidden", !isOpen);
  nav.setAttribute("tabindex", isOpen ? "0" : "-1");
  menu_button.setAttribute("aria-expanded", isOpen);
  close_nav.setAttribute("tabindex", isOpen ? "0" : "-1");
  overlay.setAttribute("aria-hidden", !isOpen);
  overlay.setAttribute("aria-modal", isOpen ? "true" : "false");
  overlay.setAttribute("role", isOpen ? "dialog" : "presentation");
  navLinks.forEach((link) =>
    link.setAttribute("tabindex", isOpen ? "0" : "-1")
  );
}

menu_button.addEventListener("click", () => {
  const isOpen = !nav.classList.contains("active");
  nav.classList.toggle("active");
  show_nav.classList.toggle("active");
  close_nav.style.display = nav.classList.contains("active") ? "flex" : "none";
  overlay.classList.toggle("active", nav.classList.contains("active"));
  setNavAccessibility(isOpen);
  if (isOpen) close_nav.focus();
});
close_nav.addEventListener("click", () => {
  nav.classList.remove("active");
  show_nav.classList.remove("active");
  close_nav.style.display = "none";
  overlay.classList.remove("active");
  setNavAccessibility(false);
  menu_button.focus();
});
overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  show_nav.classList.remove("active");
  close_nav.style.display = "none";
  overlay.classList.remove("active");
  setNavAccessibility(false);
  menu_button.focus();
});
