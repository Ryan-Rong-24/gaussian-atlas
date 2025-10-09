#!/bin/bash

# Deploy script for GitHub Pages
# This script builds the project and deploys it to gh-pages branch

set -e

echo "🏗️  Building the project..."
cd "$(dirname "$0")"
npm run build

echo "📝 Creating .nojekyll file..."
touch dist/.nojekyll

echo "✅ Build complete! The dist folder is ready for deployment."
echo ""
echo "📦 To deploy to GitHub Pages, you have two options:"
echo ""
echo "Option 1: Using GitHub Actions (Recommended)"
echo "  - The workflow is already set up in .github/workflows/deploy.yml"
echo "  - Just commit and push your changes to the main branch"
echo "  - Go to GitHub Settings > Pages and set:"
echo "    - Source: GitHub Actions"
echo ""
echo "Option 2: Manual deployment using gh-pages branch"
echo "  Run these commands from the repository root:"
echo "  git add docs/dist -f"
echo "  git commit -m 'Build and deploy'"
echo "  git subtree push --prefix docs/dist origin gh-pages"
echo ""
echo "🌐 Your site will be available at: https://ryan-rong-24.github.io/gaussian-atlas/"

