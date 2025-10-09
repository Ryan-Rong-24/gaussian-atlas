#!/bin/bash

# Deployment script for own server
# Usage: ./deploy-server.sh [optional-server-path]

set -e

echo "🔨 Building the project..."
npm run build

echo "✅ Build completed!"
echo ""
echo "📁 Your website is ready in the 'dist/' folder"
echo ""
echo "📋 Next steps:"
echo "   1. Upload the contents of 'dist/' to your web server"
echo "   2. Make sure your server is configured for SPA routing (see SERVER_DEPLOYMENT.md)"
echo ""

# If server path provided, offer to copy files
if [ -n "$1" ]; then
    echo "🚀 Server path detected: $1"
    read -p "Do you want to copy files to $1? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "📤 Copying files to $1..."
        rsync -avz --delete dist/ "$1/"
        echo "✅ Files copied successfully!"
    fi
else
    echo "💡 Tip: Run with server path to auto-deploy:"
    echo "   ./deploy-server.sh /var/www/html"
    echo "   ./deploy-server.sh user@server:/var/www/html"
fi

echo ""
echo "🎉 Done!"

