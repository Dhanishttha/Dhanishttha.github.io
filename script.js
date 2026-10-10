// Setup Canvas for Starry Background
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

let width, height, stars;

// Initialize canvas size and stars
function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    stars = [];
    
    // Create stars
    const numStars = Math.floor((width * height) / 2000); // Density of stars
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5,
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random()
        });
    }
}

// Animate Stars
function animate() {
    ctx.clearRect(0, 0, width, height);
    
    // Create sky gradient (very subtle)
    let gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#050508');
    gradient.addColorStop(1, '#0a0a14');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#c0c0c0'; // Silver stars
    
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        
        // Twinkling effect
        star.opacity += (Math.random() - 0.5) * 0.1;
        if (star.opacity < 0.2) star.opacity = 0.2;
        if (star.opacity > 1) star.opacity = 1;
        
        ctx.fillStyle = `rgba(192, 192, 192, ${star.opacity})`;
        ctx.fill();
        
        // Move stars upward slowly to simulate floating in space
        star.y -= star.speed;
        
        // Reset star to bottom if it goes off screen
        if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
        }
    });
    
    requestAnimationFrame(animate);
}

// Handle Resize
window.addEventListener('resize', () => {
    init();
});

// Start Animation
init();
animate();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
