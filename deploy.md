# 🚀 Deployment Guide: Wedding Terminal (React + Vite)

This guide outlines the steps to build and deploy the Wedding Terminal project to GitHub Pages.

---

## 🛠 Prerequisites

- Node.js and npm installed
- GitHub repository created and pushed (e.g., `https://github.com/kumarsgoyal/wedding-site`)
- Project setup using React, Vite, and TypeScript

---

## 📁 1. Set Vite `base` Path

In `vite.config.ts`, set the correct base path:

```ts
export default defineConfig({
  base: "/wedding-site/", // <-- must match your repo name
  ...
});
```


## 🔑 2. Set Environment Variables
Create a .env file at the root if needed:
```
VITE_APP_EVENT_DATE="2025-10-11"
```

## 🧱 3. Build the Project
```
npm install
npm run build
```
This generates a dist/ folder with your production-ready files.


## 🚀 4. Deploy to GitHub Pages
``` npm install --save-dev gh-pages ```

``` npm run deploy ```

## 🌐 5. Configure GitHub Pages

Go to your repository on GitHub:
- Settings → Pages
- Under Source, choose:
- Branch: gh-pages
- Folder: / (root)
- Click Save

## ✅ 6. Done!
Your website will be live at:
https://kumarsgoyal.github.io/wedding-site/ 
