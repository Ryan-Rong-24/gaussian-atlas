# Gaussian Atlas - 3D Object Gallery

A standalone web application for viewing 3D Gaussian Splat objects from the 1918 collection.

## Quick Start

### Method 1: Using Python (Recommended for local testing)
```bash
cd gaussianatlas
python3 serve.py
```
Then open http://localhost:8000 in your browser.

### Method 2: Using any HTTP server
You can use any static file server:
```bash
# Python (alternative)
python3 -m http.server 8000

# Node.js (if you have it)
npx http-server -p 8000

# PHP (if you have it)
php -S localhost:8000
```

### Method 3: Web deployment
Upload all files to any web hosting service (GitHub Pages, Netlify, Vercel, etc.)

## Files Structure

- **index.html** - Main interactive gallery with object showcase
- **objects.js** - Configuration for all 3D objects
- **objects-style.css** - Styles for the main gallery
- **style.css** - Additional styles
- **dist/spark.module.js** - Spark 3D engine
- **js/** - Utility scripts (preloader, asset loading)
- **data/1918/** - 3D object data files (.ply format)
- **serve.py** - Simple Python server for local testing

## Usage

- Open `index.html` in a web browser for the main gallery
- Click on object names in the menu to switch between different 3D objects
- Use mouse to orbit around the objects
- Mobile-friendly responsive design

## Requirements

- Modern web browser with WebGL2 support
- HTTP server (required for loading assets - won't work from file:// protocol)
- Python 3 (for local testing with serve.py)

## Asset Sources

The 3D objects are loaded from the local `data/1918/` directory. Each object includes:
- Point cloud data (.ply files)
- Captions and metadata
- Scaling and positioning information

## Troubleshooting

- **Can't load assets**: Make sure you're running from an HTTP server, not opening the file directly
- **Objects not showing**: Check browser console for errors, ensure all files are present
- **Slow loading**: Large PLY files may take time to load on first visit 