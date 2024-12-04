// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(2);
        const targetElement = document.getElementById(targetId);
        const offset = parseFloat(getComputedStyle(document.documentElement).fontSize) * 8; // 8rem in pixels

        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

// Toggle mobile menu
document.querySelector('.burger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.burger');
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('hidden', isOpen);
});

document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.burger');
    const masthead = document.querySelector('.masthead');
    const isClickInsideMast = masthead.contains(event.target);
  
    if (!isClickInsideMast) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('hidden');
    }
  });
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      const navLinks = document.querySelector('.nav-links');
      const hamburger = document.querySelector('.burger');
      navLinks.classList.remove('open');
      hamburger.classList.remove('hidden');
    });
  });