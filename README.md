# 🌸 Dhanishtha Bhangale - Personal Portfolio & Blog

A personal portfolio website with a modern, girlish, minimal pink aesthetic designed for **Dhanishtha Bhangale**, first-year Data Science student at **Usha Mittal College of Engineering (UMIT)**.

Built with clean **HTML5, CSS3, and JavaScript** (no external framework required!).

---

## ✨ Features Included

- **🌸 Girlish & Minimalist Pink Aesthetic**: Soft blush gradients, delicate shadows, glassmorphism cards, and modern typography.
- **✨ Ambient Sparkle Effect**: A lightweight, floating sparkles canvas in the background.
- **⌨️ Dynamic Typing Hero Subtitle**: Cycles through roles like Data Science Student, Web Explorer, and AI Enthusiast.
- **👩‍💻 About Me & Education**: Highlighting your college, branch, and values.
- **🛠️ Interactive Skills Grid**: Categorized cards for Web (HTML, CSS, JS), AI & Data, Git/GitHub, and Communication.
- **💻 Projects Showcase**: Clean cards with code & demo buttons, badges, and responsive tags.
- **📖 Interactive Blog Section**:
  - Pre-loaded with 3 relatable first-year articles.
  - Interactive popup modal to read the complete article without page reloads.
- **💌 Connect & Contact**:
  - One-click links to GitHub, LinkedIn, and Email.
  - Integrated contact form with toast notification and direct `mailto` trigger.
- **📱 100% Mobile & Tablet Responsive**: Smooth navigation hamburger menu and fluid grid layouts.

---

## 📁 File Structure

```
dhanishtha-portfolio/
│
├── index.html        # Main HTML structure & semantic layout
├── style.css         # Pastel pink theme, glassmorphism, responsive styles
├── script.js         # Typing effect, modal logic, canvas sparkles, form handler
└── README.md         # Guide & documentation
```

---

## 🚀 How to Run & View

### Option 1: Direct Browser Open
1. Navigate to `C:\Users\INDIA\.gemini\antigravity\scratch\dhanishtha-portfolio\`.
2. Double-click `index.html` to open it in your web browser (Chrome, Edge, Firefox, Brave, etc.).

### Option 2: Live Server in VS Code
1. Open this folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click on `index.html` and select **"Open with Live Server"**.

---

## 🌐 How to Publish for Free on GitHub Pages

Since your GitHub username is `Dhanishttha`, you can publish this for free in just 2 minutes:

1. Create a new repository on GitHub named `portfolio` (or `Dhanishttha.github.io`).
2. Push or upload these files (`index.html`, `style.css`, `script.js`) to the repository.
3. In your GitHub repository:
   - Go to **Settings** > **Pages** (under the "Code and automation" section).
   - Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
   - Click **Save**.
4. In about a minute, your website will be live at:
   `https://dhanishttha.github.io/portfolio/` (or `https://dhanishttha.github.io/`)!

---

## 🎀 How to Add New Blog Posts

In `script.js`, locate the `blogPostsData` object. You can add a new article like this:

```javascript
'post-4': {
  category: 'AI Exploration',
  readTime: '3 min read',
  date: 'January 2025',
  title: 'My First Hands-on Machine Learning Model 🤖',
  content: `
    <p>Write your story here...</p>
  `
}
```

Then add a matching `<article class="blog-card" onclick="openBlogModal('post-4')">` in `index.html`!
