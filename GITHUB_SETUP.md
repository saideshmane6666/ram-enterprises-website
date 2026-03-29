# 🚀 Hosting Ram Enterprises Website on GitHub Pages

Your Ram Enterprises website is ready to host on GitHub! Follow these steps to deploy it live.

---

## 📋 Prerequisites

1. **GitHub Account** - Create one at https://github.com (free)
2. **Git Installed** - Download from https://git-scm.com/

---

## 🔧 Setup Instructions

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `ram-enterprises-website`
3. Choose **Public** (so it's accessible to everyone)
4. Click **"Create repository"**

### Step 2: Initialize Git in Your Project

Open PowerShell/Command Prompt and navigate to your project folder:

```powershell
cd "c:\Users\saide\sai deshmane python\ram-enterprises-website"
```

Initialize git:

```powershell
git init
```

Add all files:

```powershell
git add .
```

Create first commit:

```powershell
git commit -m "Initial commit: Ram Enterprises website with animations and multi-language support"
```

### Step 3: Connect to GitHub

Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME`:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/ram-enterprises-website.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Go to **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select `main` and `/(root)`
5. Click **Save**

🎉 **Your website is now live!**

Your site will be available at: `https://YOUR_USERNAME.github.io/ram-enterprises-website`

---

## 📝 Included Features (All Preserved)

✅ **Animations** - All 13+ CSS keyframe animations working perfectly  
✅ **Dark Mode** - Toggle button with localStorage persistence  
✅ **Multi-Language** - English, Hindi (हिंदी), Marathi (मराठी)  
✅ **Professional Logo** - Ram Enterprises branding  
✅ **Form Labels** - All labeled with "Ram Enterprises" prefix  
✅ **Visual Effects** - Ripple, glow, shimmer, mouse tracking effects  
✅ **Responsive Design** - Works on mobile, tablet, and desktop  
✅ **Color Scheme** - All colors and layout exactly as designed  

---

## 🔄 Making Updates

After making changes to your local files:

```powershell
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically update your live website within 1-2 minutes!

---

## 📱 Testing Your Live Site

1. Visit: `https://YOUR_USERNAME.github.io/ram-enterprises-website`
2. Test all features:
   - Navigation between pages ✓
   - Dark mode toggle 🌙
   - Language switcher 🌍
   - Animations (scroll down to see) ✨
   - Form submission 📋
   - Mobile responsiveness 📱

---

## 🎯 Custom Domain (Optional)

Want to use your own domain like `www.ramenterprises.com`?

1. Purchase a domain from GoDaddy, Namecheap, etc.
2. Go to your repository **Settings > Pages**
3. Add your custom domain under "Custom domain"
4. Configure your domain provider's DNS records to point to GitHub Pages

---

## ❓ Troubleshooting

**Website not showing?**
- Wait 2-5 minutes for GitHub Pages to build
- Check the "Actions" tab to see deployment status

**Assets (CSS/JS) not loading?**
- Verify relative paths in HTML files
- Check browser console for errors (F12)

**Changes not updating?**
- Clear browser cache (Ctrl+Shift+Delete)
- Wait for GitHub to rebuild (check Actions tab)

---

## 📞 Support

For GitHub Pages help: https://docs.github.com/en/pages

Your website is production-ready! 🚀

---

**Repository Structure:**
```
ram-enterprises-website/
├── index.html              # Homepage
├── about.html              # About page
├── services.html           # Services page
├── contact.html            # Contact page
├── privacy-policy.html     # Privacy policy
├── terms-conditions.html   # Terms & conditions
├── sitemap.html            # Sitemap
├── css/
│   └── style.css          # All animations & styling
├── js/
│   ├── script.js          # Core functionality
│   └── theme-language.js  # Dark mode & language support
├── images/                # Service images
└── logo.svg               # Ram Enterprises logo
```
