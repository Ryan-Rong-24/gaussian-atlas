import { Button } from "@/components/ui/button";
import { ArrowRight, Github, FileText, Download as DownloadIcon, BookOpen, Quote } from "lucide-react";

interface HeroSectionProps {
  onEnterGallery: () => void;
}

export const HeroSection = ({ onEnterGallery }: HeroSectionProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="video/landing_page.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 px-6 py-12 max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <div className="animate-scale-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
            Gaussian Verse 1.5
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
          An open-source, large-scale, high-quality 3D Gaussian Splat dataset for accelerating your 3D generative modeling.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-3 justify-center items-center mb-6 animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('features')}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 transition-all duration-300 px-6 py-3 hover-scale"
            variant="outline"
          >
            <BookOpen className="mr-2 w-4 h-4" />
            Features
          </Button>
          
          <Button 
            size="lg" 
            onClick={() => scrollToSection('download')}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 transition-all duration-300 px-6 py-3 hover-scale"
            variant="outline"
          >
            <DownloadIcon className="mr-2 w-4 h-4" />
            Download
          </Button>
          
          <Button 
            size="lg" 
            onClick={() => window.open('https://cs.stanford.edu/~xtiange/projects/gaussianatlas/', '_blank')}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 transition-all duration-300 px-6 py-3 hover-scale"
            variant="outline"
          >
            <FileText className="mr-2 w-4 h-4" />
            Project
          </Button>
          
          <Button 
            size="lg" 
            onClick={() => scrollToSection('citation')}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 transition-all duration-300 px-6 py-3 hover-scale"
            variant="outline"
          >
            <Quote className="mr-2 w-4 h-4" />
            Citation
          </Button>
          
          <Button 
            size="lg" 
            onClick={onEnterGallery}
            className="bg-gradient-primary hover:shadow-glow text-white transition-all duration-300 px-6 py-3 hover-scale"
          >
            Gallery
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* The 3D Gen Playground - Featured Button */}
        <div className="flex justify-center mb-20 animate-scale-in" style={{ animationDelay: '0.5s' }}>
          <Button 
            size="lg" 
            onClick={() => window.open('https://github.com/tiangexiang/3DGen-Playground', '_blank')}
            className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 border-0 transition-all duration-300 px-10 py-6 text-lg hover-scale shadow-2xl hover:shadow-purple-500/50"
          >
            <Github className="mr-3 w-6 h-6 text-white" />
            <span className="font-bold tracking-wide text-white">
              The 3D Gen Playground
            </span>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};