// Get references to the menu toggle button and the mobile menu itself
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

// Toggle the 'active' class to show/hide the mobile menu
menuToggle.addEventListener('click', function() {
  // Toggle the 'active' class on the menu toggle button
  menuToggle.classList.toggle('active');
  
  // Check if the mobile menu is currently active (displayed)
  const isMenuActive = mobileMenu.classList.contains('active');

  // Toggle the 'active' class on the mobile menu
  if (isMenuActive) {
    // If the menu is active, remove the class to hide it
    mobileMenu.classList.remove('active');
  } else {
    // If the menu is inactive, add the class to display it
    mobileMenu.classList.add('active');
  }
});
