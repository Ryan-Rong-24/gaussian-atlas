import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { SimpleVideo } from './VideoGallery';

interface HeroSectionProps {
  onEnterGallery: () => void;
}

export const HeroSection = ({ onEnterGallery }: HeroSectionProps) => {
  // 15 video samples for the background showcase - using boomerang videos
  // Use relative paths for GitHub Pages compatibility
  const videoSamples = [
    "video/object1_boomerang.mp4",
    "video/object2_boomerang.mp4", 
    "video/object3_boomerang.mp4",
    "video/object4_boomerang.mp4",
    "video/object5_boomerang.mp4",
    "video/object6_boomerang.mp4",
    "video/object7_boomerang.mp4",
    "video/object8_boomerang.mp4",
    "video/object9_boomerang.mp4",
    "video/object10_boomerang.mp4",
    "video/object11_boomerang.mp4",
    "video/object12_boomerang.mp4",
    "video/object13_boomerang.mp4",
    "video/object14_boomerang.mp4",
    "video/object15_boomerang.mp4",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20 animate-fade-in" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 px-6 py-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Floating icon */}
          <div className="mb-8 inline-flex items-center justify-center animate-scale-in">
            <div className="relative">
              <Sparkles className="w-16 h-16 text-primary animate-float" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-glow-pulse" />
            </div>
          </div>

          {/* Main heading with zoom animation */}
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Gaussian Verse
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            3D Objects Dataset
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Explore an immersive collection of 3D gaussian splats from the Atlas Dataset. 
            Experience cutting-edge 3D visualization technology in your browser.
          </p>
        </div>

        {/* Video Grid - Clean showcase without titles */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 animate-scale-in" style={{ animationDelay: '0.8s' }}>
            {videoSamples.map((videoSrc, index) => (
              <SimpleVideo
                key={index}
                videoSrc={videoSrc}
                className="animate-scale-in hover-scale"
                style={{ animationDelay: `${1 + index * 0.05}s` }}
              />
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '1.8s' }}>
          <Button 
            size="lg" 
            onClick={onEnterGallery}
            className="group relative bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold hover-scale"
          >
            Enter Gallery
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 px-8 py-6 text-lg hover-scale"
          >
            Learn More
          </Button>
        </div>

        {/* Simple tagline */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '2s' }}>
          <p className="text-muted-foreground">
            High-fidelity 3D objects • Real-time interaction • Browser native
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '2.2s' }}>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};