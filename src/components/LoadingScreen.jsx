import { useEffect, useState } from 'react';
import logo from '../assets/nse-logo.jpeg';
import './LoadingScreen.css';

function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 800);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${isExiting ? 'exiting' : ''}`}>
      <div className="loading-content">
        <div className="logo-container">
          <div className="logo-circle">
            <div className="logo-inner">
              <img
                src={logo}
                alt="NSE Logo"
                className="loading-logo-image"
              />
            </div>
            <div className="orbit orbit-1"></div>
            <div className="orbit orbit-2"></div>
            <div className="orbit orbit-3"></div>
          </div>
        </div>

        <h1 className="loading-title">
          <span className="letter">N</span>
          <span className="letter">S</span>
          <span className="letter">E</span>
          <span className="spacer"></span>
          <span className="letter">D</span>
          <span className="letter">i</span>
          <span className="letter">g</span>
          <span className="letter">i</span>
          <span className="letter">t</span>
          <span className="letter">a</span>
          <span className="letter">l</span>
          <span className="spacer"></span>
          <span className="letter">L</span>
          <span className="letter">i</span>
          <span className="letter">b</span>
          <span className="letter">r</span>
          <span className="letter">a</span>
          <span className="letter">r</span>
          <span className="letter">y</span>
        </h1>

        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}>
              <div className="progress-glow"></div>
            </div>
          </div>
          <p className="progress-text">{progress}%</p>
        </div>

        <p className="loading-subtitle">Preparing your knowledge hub...</p>
      </div>

      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}></div>
        ))}
      </div>
    </div>
  );
}

export default LoadingScreen;
