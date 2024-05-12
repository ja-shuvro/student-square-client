// Nav Bar Start

import { initializeNavBar } from "./nav-bar.js";

// For a browser
window.addEventListener("DOMContentLoaded", (event) => {
  initializeNavBar();
});

// Nav Bar End

// Search box
const searchButton = document.querySelectorAll(".search-button");
const searchContent = document.getElementById("search-content");
const crossButton = document.querySelector(".cross-btn");

searchButton.forEach((element) => {
  element.addEventListener("click", () => {
    searchContent.style.display = "flex";
  });
});

crossButton.addEventListener("click", () => {
  searchContent.style.display = "none";
});
// Search box end
{
  let insCard = document.querySelector('.ins-card');
  let cardDis = insCard.querySelectorAll('.dis');

  cardDis.forEach(dis => {
    let text = dis.textContent.trim();
    if (text.length > 100) {
      dis.textContent = text.slice(0, 100) + '...';
    }
  });

}

