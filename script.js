const hamburger = document.getElementById("hamburger-icon");
const menu = document.querySelector(".mobile-menu");
let isOpen = false;

function toggleMenu() {
  isOpen = !isOpen; // Toggle the state on each click

  if (isOpen) {
    hamburger.src = "./assets/images/icon-menu-close.svg";
    menu.style.display = "block";
    menu.classList.add("animate__fadeIn");
    menu.classList.add("animate__animated");
  } else {
    hamburger.src = "./assets/images/icon-menu.svg";
    menu.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

// Function to handle window resize
function handleResize() {
  if (window.innerWidth > 768) {
    // Hide the menu if window width is greater than 768px
    menu.style.display = "none";
    hamburger.src = "./assets/images/icon-menu.svg";
  }
}

// Add event listener for window resize
window.addEventListener("resize", handleResize);

// Initial call to handleResize to set the initial state based on window width
handleResize();
