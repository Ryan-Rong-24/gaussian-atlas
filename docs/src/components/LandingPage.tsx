import { HeroSection } from './HeroSection';

interface LandingPageProps {
  onEnterGallery: () => void;
}

export const LandingPage = ({ onEnterGallery }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection onEnterGallery={onEnterGallery} />
    </div>
  );
};