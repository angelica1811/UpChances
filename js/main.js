// Find and assign your constant.
const hamburgerMenu = document.querySelector('.menu-icon');

// Create a click event for it that toggles a CSS class. 
hamburgerMenu.addEventListener('click', () => {
	document.querySelector('nav').classList.toggle('active-nav')
});