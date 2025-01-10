import React, { useState, useEffect } from 'react';

const IntroVideo = ({ children }) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);

  // Handle video end
  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  // Handle video loaded
  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  // Handle video error
  const handleVideoError = () => {
    setVideoError(true);
    setVideoEnded(true); // Skip to content if video fails
  };

  if (!videoEnded) {
    return (
      <div className="fixed inset-0 bg-black z-50">
        {/* Loading spinner shown while video loads */}
        {/* {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )} */}

        {/* Intro video */}
        <video
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          onLoadedData={handleVideoLoaded}
          onError={handleVideoError}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <source src="/Intri-video-trans.mov" type="video/mp4" />
          {/* Add additional video sources for different formats if needed */}
          <source src="/Intri-video-trans.mov" type="video/webm" />
        </video>

        {/* Skip button */}
        <button
          onClick={() => setVideoEnded(true)}
          className="absolute bottom-8 right-8 px-6 py-2 bg-white/20 hover:bg-white/30 
                     text-white rounded-full backdrop-blur-sm transition-all duration-300
                     font-medium text-sm uppercase tracking-wider"
        >
          Skip Intro
        </button>
      </div>
    );
  }

  // Render main content with fade-in animation
  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
};

export default IntroVideo;

// Add necessary CSS animations
const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
  }
`;