const ham = document.querySelector(".ham");
const navbar = document.querySelector(".navlinks");
const link = document.querySelectorAll(".navlink");
const header = document.querySelector(".headTitle");
const section = document.querySelector(".text");

ham.addEventListener("click", () => {
  navbar.classList.toggle("open");
  header.classList.toggle("hidden");
  header;
  link.forEach((link) => {
    link.classList.toggle("fade");
  });
});
