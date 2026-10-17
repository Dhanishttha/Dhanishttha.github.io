/* ==========================================================================
   Dhanishtha Bhangale - Personal Portfolio Scripts
   ========================================================================== */

// --- 1. Typing Effect in Hero Section ---
const typingTextElement = document.getElementById('typing-text');
const phrases = [
  'Data Science Student 🌸',
  'Frontend Web Explorer 💻',
  'Passionate AI Enthusiast 🤖',
  'Lifelong Curious Learner ✨',
  'Effective Communicator 💬'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 100;
const erasingDelay = 50;
const newPhraseDelay = 1800;

function typePhrase() {
  if (!typingTextElement) return;

  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typePhrase, newPhraseDelay);
      return;
    }
    setTimeout(typePhrase, typingDelay);
  } else {
    typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typePhrase, 400);
      return;
    }
    setTimeout(typePhrase, erasingDelay);
  }
}

// --- 2. Ambient Floating Sparkles Canvas ---
const canvas = document.getElementById('ambient-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let particles = [];

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Sparkle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * (canvas ? canvas.width : window.innerWidth);
    this.y = Math.random() * (canvas ? canvas.height : window.innerHeight);
    this.size = Math.random() * 3 + 1.2;
    this.speedY = Math.random() * 0.4 + 0.15;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.opacity = Math.random() * 0.5 + 0.2;
    this.color = Math.random() > 0.4 ? 'rgba(244, 114, 182, ' : 'rgba(251, 207, 232, ';
  }

  update() {
    this.y -= this.speedY;
    this.x += this.speedX;

    if (this.y < 0 || this.x < 0 || (canvas && this.x > canvas.width)) {
      this.reset();
      this.y = canvas ? canvas.height : window.innerHeight;
    }
  }

  draw() {
    if (!ctx) return;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `${this.color}${this.opacity})`;
    ctx.shadowBlur = 8;
    ctx.shadowColor = 'rgba(244, 114, 182, 0.4)';
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

function initCanvasAnimation() {
  if (!canvas || !ctx) return;
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const particleCount = window.innerWidth < 768 ? 20 : 40;
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Sparkle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// --- 3. Navbar Scrolling & Mobile Menu ---
const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

window.addEventListener('scroll', () => {
  if (!navbar) return;
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  highlightNavOnScroll();
});

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    mobileToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars-staggered"></i>';
  });

  // Close menu when clicking any nav link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      mobileToggle.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
    });
  });
}

function highlightNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');
    const correspondingLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

    if (correspondingLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        correspondingLink.classList.add('active');
      } else {
        correspondingLink.classList.remove('active');
      }
    }
  });
}

// --- 4. Interactive Blog Articles & Modal ---
const blogPostsData = {
  'post-1': {
    category: 'College Life',
    readTime: '3 min read',
    date: 'October 2024',
    title: 'Stepping into UMIT: My First Year in Data Science 🎓',
    content: `
      <p>Stepping through the gates of <strong>Usha Mittal College of Engineering (UMIT)</strong> on my very first day was a whirlpool of excitement, anticipation, and slight nervousness. Transitioning from school to an engineering college is a significant milestone, and choosing <strong>Data Science</strong> felt like choosing to explore the future itself.</p>
      
      <blockquote>"Data is the new language of the world, and learning to speak it is an incredible privilege."</blockquote>

      <p>During my first few weeks, I was introduced to foundational engineering principles, algorithms, and logical problem solving. I discovered that Data Science isn't merely about writing scripts; it's about asking the right questions, finding hidden stories in numbers, and building technology that genuinely assists people.</p>

      <p>From collaborating with classmates on assignments to setting up my first GitHub repository, every single day at UMIT brings something new. I'm eager to absorb every lesson, participate in hackathons, and grow into a thoughtful tech professional!</p>
    `
  },
  'post-2': {
    category: 'Web Development',
    readTime: '4 min read',
    date: 'November 2024',
    title: 'Building My Very First Website from Scratch 🌸',
    content: `
      <p>Every developer remembers the moment they write their very first lines of <code>HTML</code> and <code>CSS</code> and see a live webpage pop up in their browser. For me, creating this portfolio website wasn't just another homework assignment—it was crafting my personal digital haven.</p>

      <p>I wanted this space to mirror my personality: modern, minimal, warm, and girlish. Too often, tech websites look identical—dark mode, neon green fonts, and cold layouts. I deliberately chose a soft blush pink palette, playful typography, and clean glassmorphism to show that code and aesthetics can harmonize delightfully.</p>

      <blockquote>"Your personal website is your digital home. Decorate it with the colors that make you feel inspired."</blockquote>

      <p>Through this project, I deepened my understanding of CSS Flexbox and Grid, semantic markup, and JavaScript DOM manipulation. Getting the typing animation and the article reading modal to work seamlessly taught me patience and debugging discipline. This is just the beginning of my web journey!</p>
    `
  },
  'post-3': {
    category: 'Perspective',
    readTime: '3 min read',
    date: 'December 2024',
    title: 'Why Communication is a Superpower in Tech & AI 💬',
    content: `
      <p>When most people think of computer science and artificial intelligence, they picture solitary programmers typing lines of code late at night. But as a first-year student diving into team discussions and collaborative projects, I've realized something essential: <strong>Communication is just as powerful as code.</strong></p>

      <p>Artificial Intelligence models and Data Science models don't exist in a vacuum. A machine learning model is useless if its findings cannot be communicated clearly to stakeholders, medical professionals, teachers, or everyday users.</p>

      <blockquote>"Code tells computers what to do. Clear communication tells people why it matters."</blockquote>

      <p>Being able to articulate complex ideas simply, write clean documentation, listen actively, and speak with empathy are skills I intentionally cultivate every day. As I advance in my Data Science degree at UMIT, I am committed to being both a technically skilled engineer and an articulate communicator.</p>
    `
  }
};

const blogModal = document.getElementById('blog-modal');
const modalContentArea = document.getElementById('modal-content-area');

function openBlogModal(postId) {
  const post = blogPostsData[postId];
  if (!post || !modalContentArea || !blogModal) return;

  modalContentArea.innerHTML = `
    <div class="modal-article-meta">
      <span class="blog-category">${post.category}</span>
      <span class="blog-read-time"><i class="fa-regular fa-clock"></i> ${post.readTime}</span>
      <span class="blog-date" style="margin-left:auto;">${post.date}</span>
    </div>
    <h2 class="modal-article-title">${post.title}</h2>
    <div class="modal-article-body">
      ${post.content}
    </div>
  `;

  blogModal.classList.add('active');
  document.body.style.overflow = 'hidden'; // prevent background scrolling
}

function closeBlogModal() {
  if (!blogModal) return;
  blogModal.classList.remove('active');
  document.body.style.overflow = '';
}

function closeBlogModalOnBackdrop(event) {
  if (event.target === blogModal) {
    closeBlogModal();
  }
}

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && blogModal && blogModal.classList.contains('active')) {
    closeBlogModal();
  }
});

// --- 5. Toast Notification Helper ---
const toastElement = document.getElementById('toast-notification');
const toastTextElement = document.getElementById('toast-text');
let toastTimeout;

function openToast(message) {
  if (!toastElement || !toastTextElement) return;
  toastTextElement.textContent = message;
  toastElement.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastElement.classList.remove('show');
  }, 3500);
}

// --- 6. Contact Form Submission Handler ---
function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    openToast('Please fill in all required fields 🌸');
    return;
  }

  // Pre-fill mailto link so user can send direct email easily
  const mailtoLink = `mailto:dhanishthabhangale@gmail.com?subject=${encodeURIComponent(subject || 'Message from Portfolio')}&body=${encodeURIComponent(`Hi Dhanishtha,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
  
  // Show sweet confirmation toast
  openToast(`Thank you ${name}! Opening mail to connect with Dhanishtha 💖`);

  setTimeout(() => {
    window.location.href = mailtoLink;
  }, 1000);

  // Reset form
  document.getElementById('contact-form').reset();
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  typePhrase();
  initCanvasAnimation();
});
