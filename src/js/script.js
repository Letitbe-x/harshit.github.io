// Get references to the menu toggle button and the mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

// Add a click event listener to the menu toggle button
menuToggle.addEventListener('click', function() {
  // Check if the mobile menu is currently active
  if (mobileMenu.classList.contains('active')) {
    // If active, close the mobile menu
    closeMobileMenu();
  } else {
    // If not active, open the mobile menu
    openMobileMenu();
  }
});

// Function to open the mobile menu
function openMobileMenu() {
  // Add the 'active' class to the menu toggle button
  menuToggle.classList.add('active');
  // Delay adding the 'clicked' class for a smoother transition
  setTimeout(() => {
    menuToggle.classList.add('clicked');
  }, 50); // Adjust the delay time as needed
  // Add the 'active' class to the mobile menu
  mobileMenu.classList.add('active');
}

// Function to close the mobile menu
function closeMobileMenu() {
  // Add the 'closing' class to initiate the closing animation
  mobileMenu.classList.add('closing');
  // Remove classes and reset the menu toggle after the closing animation duration
  setTimeout(() => {
    mobileMenu.classList.remove('active');
    mobileMenu.classList.remove('closing');
    menuToggle.classList.remove('active');
    menuToggle.classList.remove('clicked');
  }, 300); // Duration of the slideToBottom animation
}
