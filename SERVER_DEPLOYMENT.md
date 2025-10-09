# Deploying to Your Own Server

This guide explains how to deploy the Gaussian Atlas website to your own server (not GitHub Pages).

## Quick Start

### 1. Build the Project

```bash
cd /vision/u/xtiange/gaussianatlas/gaussianverse/webpage/gaussian-atlas/docs
npm install
npm run build
```

This will create a `dist/` folder with all the static files ready for deployment.

### 2. Upload to Your Server

The `dist/` directory contains everything needed for your website. Upload its **contents** to your web server's public directory (e.g., `/var/www/html`, `public_html`, or your server's document root).

**Important:** Upload the **contents** of the `dist/` folder, not the folder itself.

Your server directory should look like this:
```
/var/www/html/                    (or your web server root)
├── index.html                    ← Main React app
├── assets/                       ← CSS, JS bundles
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
├── gallery/                      ← 3D viewer
│   ├── gallery.html
│   ├── objects.js
│   ├── objects-style.css
│   └── data/                     ← 3D model files (.ply)
├── video/                        ← Preview videos
│   ├── landing_page.mp4
│   ├── object1_boomerang.mp4
│   └── ...
├── js/                           ← Helper scripts
└── spark/                        ← 3D rendering library
```

### 3. Server Configuration (Important!)

Since this is a Single Page Application (SPA), you need to configure your web server to handle client-side routing.

#### Apache (.htaccess)

Create a `.htaccess` file in your web root:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx

Add this to your Nginx server block:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Optional: Enable gzip compression for better performance
    gzip on;
    gzip_types text/css application/javascript application/json;
}
```

## File Structure Overview

### Built Output (`dist/`)

After running `npm run build`, the `dist/` folder contains:

- **index.html** - Entry point for the React app
- **assets/** - Bundled and minified JavaScript and CSS files
- **All contents from `public/`** - Copied as-is:
  - `gallery/` - Interactive 3D viewer with Gaussian Splat rendering
  - `video/` - Video previews of 3D objects
  - `js/` - Helper scripts
  - `style.css`, `robots.txt`, `favicon.ico`, etc.

## Deployment Commands

### One-Line Build and Copy

If you have direct access to your server, you can build and copy in one command:

```bash
cd /vision/u/xtiange/gaussianatlas/gaussianverse/webpage/gaussian-atlas/docs
npm run build
rsync -avz --delete dist/ your-server:/var/www/html/
```

### Using SCP

```bash
cd /vision/u/xtiange/gaussianatlas/gaussianverse/webpage/gaussian-atlas/docs
npm run build
scp -r dist/* user@your-server:/var/www/html/
```

### Using FTP/SFTP

1. Build the project: `npm run build`
2. Connect to your server using an FTP client (FileZilla, Cyberduck, etc.)
3. Upload all files from the `dist/` folder to your server's web root

## Testing Locally Before Upload

Test the built version locally to make sure everything works:

```bash
npm run preview
```

This will serve the built files at `http://localhost:4173/`

## Updating the Website

Whenever you make changes to the source code:

1. Make your changes in the `src/` folder
2. Run `npm run build` to rebuild
3. Upload the new `dist/` contents to your server (this will overwrite old files)

## File Sizes

Note: The 3D model files (`.ply` files) are quite large. Your `dist/` folder will be approximately:
- Total size: ~200-500 MB (depending on number of 3D models)
- Make sure your server has enough storage and bandwidth

## Troubleshooting

### Issue: Blank page or 404 errors
**Solution:** Make sure your web server is configured for SPA routing (see Server Configuration above)

### Issue: Videos not loading
**Solution:** Ensure all files in `public/video/` are included in the build and uploaded correctly

### Issue: 3D Gallery not working
**Solution:** Check that the `gallery/` folder with all `.ply` files is uploaded correctly

### Issue: Asset paths broken
**Solution:** Make sure `base: '/'` in `vite.config.ts` (already configured)

## Performance Optimization

For better performance on your server:

1. **Enable gzip compression** in your web server config
2. **Set cache headers** for static assets (JS, CSS, videos)
3. **Use a CDN** for large video files if available
4. **Enable HTTP/2** if your server supports it

## Security

- The `robots.txt` file is included to control search engine indexing
- Consider adding HTTPS/SSL certificate for secure access
- Set appropriate CORS headers if accessing from other domains

## Questions?

If you need the site to be in a subdirectory (e.g., `https://yourserver.com/gaussian-atlas/`), you'll need to:
1. Change `base: '/'` to `base: '/gaussian-atlas/'` in `vite.config.ts`
2. Rebuild: `npm run build`
3. Upload to the subdirectory on your server

