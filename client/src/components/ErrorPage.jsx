// src/components/ErrorPage.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  // Fun error messages
  const errorMessages = [
    "Oops! The hamsters powering our servers are on coffee break! ☕",
    "Houston, we have a problem! Our pixels got mixed up! 🚀",
    "Error 404: Page went on vacation without leaving a forwarding address! 🏖️",
    "Looks like our code took a detour to Narnia! 🦁",
    "Our servers are doing the macarena instead of their job! 💃"
  ];

  // Fun error images (using placeholder URLs - replace with your actual images)
  const errorImages = [
    "/errorImages/404.jpg", // Replace with actual funny error images
    "/errorImages/blanker.jpg",
    "/errorImages/pug.jpg",
    "/errorImages/red.jpg",
    "/errorImages/retriver.jpg",
    "/errorImages/404.jpg", // Replace with actual funny error images
    "/errorImages/blanker.jpg",
    "/errorImages/pug.jpg",
    "/errorImages/red.jpg",
    "/errorImages/retriver.jpg"
  ];

  // Randomly change image every 3 seconds
  useEffect(() => {
    const randomImage = Math.floor(Math.random() * 10);
     console.log("randomImage: ", randomImage);
     
    return setCurrentImage(randomImage)

  }, []);

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="card bg-base-100 shadow-xl">
          <figure className="relative pt-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-base-100 opacity-30" />
            <img
              src={errorImages[currentImage]}
              alt="Error Illustration"
              className=" h-72 object-contain animate-bounce-slow"
              style={{ 
                animation: 'floating 3s ease-in-out infinite',
              }}
            />
          </figure>
          
          <div className="card-body text-center">
            <h2 className="card-title text-3xl font-bold justify-center mb-4">
              <span className="text-error">Whoopsie!</span> 🙈
            </h2>
            
            <p className="text-lg mb-6 animate-fade-in">
              {errorMessages[currentImage]}
            </p>
            
            {/* {error && (
              <div className="alert alert-error mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error.message || 'An unexpected error occurred'}</span>
              </div>
            )} */}
            
            <div className="card-actions justify-center gap-4">
              <button 
                className="btn btn-primary"
                onClick={() => navigate(-1)}
              >
                ← Go Back
              </button>
              
              <button 
                className="btn btn-secondary"
                onClick={() => navigate('/')}
              >
                Go Home 🏠
              </button>
              
              <button 
                className="btn btn-accent"
                onClick={() => window.location.reload()}
              >
                Try Again 🔄
              </button>
            </div>
            
            <div className="mt-6 text-sm opacity-70 animate-pulse">
              Don't worry, our tech ninjas are already on the case! 🥷
            </div>
          </div>
        </div>
      </div>
      
    
    </div>
  );
};

export default ErrorPage;