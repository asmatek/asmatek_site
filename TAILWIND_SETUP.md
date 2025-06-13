# Tailwind CSS Integration Steps for Django

1. Install Node.js and npm if not already installed.
2. In your project root, run:
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
3. Create a `tailwind.config.js` and configure paths to your templates:
   module.exports = {
     content: [
       './website/templates/**/*.html',
       './static/js/**/*.js',
     ],
     theme: { extend: {} },
     plugins: [],
   }
4. Create a CSS file (e.g., static/css/tailwind.css) with:
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
5. Add a build script to package.json:
   "build:css": "tailwindcss -i ./static/css/tailwind.css -o ./static/css/styles.css --minify"
6. Run npm run build:css to generate your Tailwind CSS.
7. Replace Bootstrap classes in your templates with Tailwind classes as you modernize the UI.

# Next Steps
- Update meta tags and add structured data to index.html for SEO.
- Optimize images and enable lazy loading for performance.
- Add/modernize contact form and product showcase sections.
