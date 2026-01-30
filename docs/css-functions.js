"use strict";

// DOM CSS classes for easy access


// Pop up menu
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

// Pop up image 

// Get the modal
let windowModal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
img.onclick = function(){
  windowModal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}