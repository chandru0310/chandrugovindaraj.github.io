# Chandru Govindaraj — Portfolio Website

A complete, animated portfolio website with an admin panel, ready to deploy to GitHub Pages.

---

## 🚀 Deploy to GitHub Pages (5 minutes)

### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com) → **New Repository**
2. Name it exactly: `chandru-govindaraj.github.io`
   - (Or any name, e.g. `portfolio` — the URL will be `username.github.io/portfolio`)
3. Set it to **Public**
4. Click **Create repository**

### Step 2: Upload the Files
**Option A — Drag & Drop (easiest):**
1. Open your repository on GitHub
2. Click **Add file → Upload files**
3. Drag the entire contents of this folder (all files and folders)
4. Click **Commit changes**

**Option B — Git CLI:**
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select `main` branch → `/ (root)`
3. Click **Save**
4. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

## 📁 File Structure

```
portfolio/
├── index.html          ← Main portfolio website
├── css/
│   └── style.css       ← All styles + animations
├── js/
│   ├── data.js         ← All your content (edit here or via Admin)
│   └── main.js         ← Animations, rendering, interactions
├── admin/
│   ├── index.html      ← Admin panel
│   ├── admin.css       ← Admin styles
│   └── admin.js        ← Admin CRUD logic
└── README.md           ← This file
```

---

## 🔧 How to Edit Content

### Option 1: Admin Panel (No Code)
- Visit `your-site.com/admin/index.html`
- Edit Profile, Skills, Projects, Certifications
- Click **Save Changes** (or press `Ctrl+S`)
- Changes save to browser localStorage and are live immediately

> ⚠️ **Note:** Admin panel uses localStorage. Changes made on one device stay on that device. To make changes permanent for all visitors, use Option 2.

### Option 2: Edit `js/data.js` Directly
Open `js/data.js` and edit the `DEFAULT_DATA` object. Changes committed to GitHub will be visible to all visitors.

---

## ✨ Features

- 🎨 Dark, modern design with yellow accent (`#e8ff47`)
- 🖱️ Custom animated cursor
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Scroll-reveal animations on all sections
- 📊 Animated skill bars and counter stats
- 🌊 Floating hero elements with CSS animations
- 📬 Contact form (client-side)
- 🔑 Admin panel for editing all content without coding
- 🔄 Reset button to restore defaults

---

## 📮 Contact Form

The contact form currently shows a success message after 1.5 seconds (demo mode). To make it actually send emails, integrate a free service:
- **Formspree.io** — Free email forwarding
- **EmailJS** — Free email sending from JavaScript

Replace the `handleContactForm` function in `js/main.js` with the service's snippet.

---

Made with ❤️ for Chandru Govindaraj
