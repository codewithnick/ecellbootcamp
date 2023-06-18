const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".link-container");
const links = document.querySelectorAll(".nav-items");

let navBarToggle = () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("show");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
};

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("show");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});
