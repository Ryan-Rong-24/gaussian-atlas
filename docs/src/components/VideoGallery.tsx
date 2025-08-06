import { useEffect, useRef, useState } from 'react';

interface SimpleVideoProps {
  videoSrc: string;
  className?: string;
  style?: React.CSSProperties;
}

export const SimpleVideo = ({ videoSrc, className = "", style }: SimpleVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current && isLoaded) {
      const video = videoRef.current;
      
      if (isVisible) {
        // Use a more robust play approach
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            // Ignore play errors - they're usually due to user interaction requirements
            console.log('Video play prevented:', error);
          });
        }
      } else {
        // Pause the video when not visible
        try {
          video.pause();
        } catch (error) {
          // Ignore pause errors
          console.log('Video pause error:', error);
        }
      }
    }
  }, [isVisible, isLoaded]);

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`group relative overflow-hidden rounded-md bg-card/50 border border-border/50 ${className}`} style={style}>
      <div className="aspect-video relative">
        {/* Loading placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse rounded-md flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        <video
          ref={videoRef}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={handleVideoLoad}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/5 blur-sm -z-10" />
    </div>
  );
};