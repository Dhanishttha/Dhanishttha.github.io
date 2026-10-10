// Generate Silver Stars for Midnight Dark Sky
function createStars() {
    const numStars = 200;
    const container = document.getElementById('star-container');
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random positioning
        const x = Math.random() * 100; // vw
        const y = Math.random() * 100; // vh
        
        // Random size - mostly small, some bigger silver stars
        const size = Math.random() * 2.5;
        
        // Animation config
        const delay = Math.random() * 5;
        const duration = 2 + Math.random() * 3;

        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;

        container.appendChild(star);
    }
}

// Initial setup
createStars();

// Recreate stars on resize for better coverage
window.addEventListener('resize', () => {
    const container = document.getElementById('star-container');
    container.innerHTML = '';
    createStars();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
