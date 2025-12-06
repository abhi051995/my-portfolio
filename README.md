# Abhishek Choudhary - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing your expertise as a Senior Java Backend Engineer.

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project" and import your repository
5. Vercel will automatically detect Vite and configure everything
6. Click "Deploy" - your site will be live in seconds!

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sign in with GitHub
4. Click "Add new site" → "Import an existing project"
5. Select your repository
6. Build command: `npm run build`
7. Publish directory: `dist`
8. Click "Deploy site"

### Option 3: GitHub Pages

1. Install GitHub Pages plugin:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Add to `vite.config.js`:
```js
base: '/your-repo-name/'
```

4. Deploy:
```bash
npm run deploy
```

### Option 4: Traditional Server (Apache/Nginx)

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes (for React Router support)

## 🎨 Customization

### Update Contact Information

Edit the contact section in `src/App.jsx`:
- Email address
- LinkedIn profile URL
- GitHub profile URL

### Update Resume Content

Edit the `resumeText` constant in `src/App.jsx` with your actual resume information.

### Update Projects

Modify the `projects` array in `src/App.jsx` with your actual GitHub repositories.

### Update Freelance Services

Edit the `gigs` array in `src/App.jsx` with your actual service offerings.

### Change Colors

The portfolio uses Tailwind CSS. You can customize colors in `tailwind.config.js` or modify the className attributes in `src/App.jsx`.

## 📁 Project Structure

```
Full_React_Portfolio/
├── index.html          # Entry HTML file
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── src/
│   ├── main.jsx        # React entry point
│   ├── App.jsx         # Main portfolio component
│   └── index.css       # Tailwind CSS imports
└── README.md           # This file
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## 📝 Notes

- The portfolio is fully responsive and works on all devices
- All sections are accessible via anchor links in the navigation
- Resume can be downloaded as a text file or copied to clipboard
- The site is optimized for SEO with proper meta tags (you can add more in `index.html`)

## 🤝 Support

For issues or questions, please open an issue on GitHub or contact via the contact section on the website.

---

Built with ❤️ by Abhishek Choudhary


