"use strict";

// DOM CSS classes for easy access


const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("#menu-open");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent click from triggering document click
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});

// Close menu if clicking outside links
document.addEventListener("click", (e) => {
  // If click is inside the menu but not on a link
  if (menu.style.display === "flex") {
    if (!e.target.closest("#menu-open a") && !hamburger.contains(e.target)) {
      menu.style.display = "none";
    }
  }
});