let navBarBtn = document.getElementById("navbar-btn");
let navBar = document.querySelector("nav");
let navBarTitle = document.querySelector(".navigation-title");
let navList = document.querySelector(".navigation-list");
let helpList = document.querySelector(".help-list");
let main = document.querySelector("main");
let toggleIcon = document.querySelector(".toggle-icon");
navBarBtn.addEventListener("click", () => {
  main.classList.toggle("hidden");
  toggleIcon.classList.toggle("fa-chevron-right");
  toggleIcon.classList.toggle("fa-chevron-left");
  navBar.classList.toggle("open");
});
