import { useState } from 'react';
import { LandingPage } from '@/components/LandingPage';
import { GalleryViewer } from '@/components/GalleryViewer';

const Index = () => {
  const [showGallery, setShowGallery] = useState(false);

  const handleEnterGallery = () => {
    setShowGallery(true);
  };

  const handleBackToLanding = () => {
    setShowGallery(false);
  };

  if (showGallery) {
    return <GalleryViewer onBackToLanding={handleBackToLanding} />;
  }

  return <LandingPage onEnterGallery={handleEnterGallery} />;
};

export default Index;
