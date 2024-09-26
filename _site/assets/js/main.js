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
