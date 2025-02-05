// header scroll
const header = document.getElementById('header');

// Function to handle scroll event
function handleScroll() {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);
