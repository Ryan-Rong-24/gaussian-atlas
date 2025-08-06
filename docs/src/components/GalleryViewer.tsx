import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface GalleryViewerProps {
  onBackToLanding: () => void;
}

export const GalleryViewer = ({ onBackToLanding }: GalleryViewerProps) => {
  useEffect(() => {
    // Load the 3D gallery HTML content
    const loadGallery = async () => {
      // Create iframe to contain the 3D gallery
      const iframe = document.createElement('iframe');
      iframe.style.width = '100%';
      iframe.style.height = '100vh';
      iframe.style.border = 'none';
      iframe.src = '/index.html'; // Point to the actual index.html file
      
      // Clear existing content and add iframe
      const container = document.getElementById('gallery-container');
      if (container) {
        container.innerHTML = '';
        container.appendChild(iframe);
      }
    };

    loadGallery();
  }, []);

  return (
    <div className="relative w-full h-screen bg-background">
      {/* Back button */}
      <Button
        onClick={onBackToLanding}
        variant="outline"
        className="absolute top-6 left-6 z-50 bg-background/80 backdrop-blur border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Landing
      </Button>
      
      {/* 3D Gallery Container */}
      <div id="gallery-container" className="w-full h-full" />
    </div>
  );
};