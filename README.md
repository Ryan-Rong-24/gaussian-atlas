# Gaussian Verse • 3D Gaussian Atlas Dataset

Project [website](https://cs.stanford.edu/~xtiange/projects/gaussianatlas/).

## Integration

This project integrates two components:

1. **React Landing Page** (`docs/`): Modern landing page with video previews
2. **Interactive 3D Gallery**: Full 3D viewer with gaussian splat rendering

### Gallery Integration
- "Enter Gallery" button loads the interactive 3D viewer in an iframe
- The 3D viewer uses gaussian splat technology to render high-fidelity 3D objects
- Users can orbit around objects and switch between different 3D models

## Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
cd docs
npm install
npm run dev
```

The application will be available at `http://localhost:8080`

### Project Structure

```
docs/
├── src/
│   ├── components/
│   │   ├── LandingPage.tsx      # Main landing page
│   │   ├── HeroSection.tsx       # Hero with video grid
│   │   ├── GalleryViewer.tsx     # 3D gallery iframe wrapper
│   │   └── VideoGallery.tsx      # Video preview components
│   └── pages/
│       └── Index.tsx             # Main page routing
├── public/
│   ├── video/                    # 15 object preview videos (boomerang)
│   ├── data/                     # 3D model data files
│   ├── index.html                # Interactive 3D gallery
│   ├── objects.js                # Object definitions
│   ├── objects-style.css         # Gallery styling
│   └── spark.module.js           # 3D rendering library
```

## Technologies Used

- **Rendering** [Spark](https://github.com/sparkjsdev/spark?tab=readme-ov-file#getting-started)
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **3D Rendering**: Three.js, Spark.js (gaussian splats)
- **Video**: HTML5 video with intersection observer for performance
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages

## Assets

- **Videos**: 15 `.mp4` boomerang files showing rotating 3D object examples
- **3D Models**: Point cloud files (`.ply`) for gaussian splat rendering
- **Gallery**: Interactive HTML viewer with Spark adn Three.js integration

## License