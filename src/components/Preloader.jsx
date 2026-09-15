import React, { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Fast simulated progress to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const jump = Math.floor(Math.random() * 25) + 15;
        return Math.min(prev + jump, 100);
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFading(true);
        if (onComplete) onComplete();
        const hideTimer = setTimeout(() => {
          setIsHidden(true);
        }, 600);
        return () => clearTimeout(hideTimer);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  if (isHidden) return null;

  return (
    <div className={`preloader-overlay ${isFading ? 'preloader-fade-out' : ''}`} aria-hidden="true">
      {/* Background Tech Grid & Glow */}
      <div className="preloader-bg-grid" />
      <div className="preloader-ambient-glow" />

      {/* Center Core Box */}
      <div className="preloader-core">
        {/* Robot Head Mascot with Tech Glow */}
        <div className="preloader-mascot-wrap">
          <div className="preloader-ring-pulse" />
          <div className="preloader-ring-outer" />
          <img 
            src="/logo.webp" 
            alt="DUDI Software" 
            className="preloader-logo-img"
          />
        </div>

        {/* Brand Name */}
        <div className="preloader-brand">
          <span className="brand-dudi">DUDI</span>
          <span className="brand-seo">SEO</span>
        </div>

        {/* Status Text & Percentage */}
        <div className="preloader-status-row">
          <span className="preloader-status-text">INITIALIZING SEO PLATFORM...</span>
          <span className="preloader-pct">{progress}%</span>
        </div>

        {/* Tech Progress Bar */}
        <div className="preloader-bar-track">
          <div 
            className="preloader-bar-fill" 
            style={{ width: `${progress}%` }}
          />
          <div 
            className="preloader-bar-laser"
            style={{ left: `${progress}%` }}
          />
        </div>

        {/* Tech Sub-labels */}
        <div className="preloader-subtext">
          <span>SYS // READY</span>
          <span>EST. 2026</span>
        </div>
      </div>

      <style>{`
        .preloader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #070B12;
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: all;
        }

        .preloader-fade-out {
          opacity: 0;
          transform: scale(1.04);
          pointer-events: none;
        }

        .preloader-bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(239, 68, 68, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.05) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .preloader-ambient-glow {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(239, 68, 68, 0.18) 0%, rgba(220, 38, 38, 0.05) 50%, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
          animation: preloaderPulse 2.5s ease-in-out infinite alternate;
        }

        @keyframes preloaderPulse {
          0% { transform: scale(0.85); opacity: 0.6; }
          100% { transform: scale(1.15); opacity: 1; }
        }

        .preloader-core {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 90%;
          max-width: 320px;
        }

        .preloader-mascot-wrap {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .preloader-logo-img {
          width: 52px;
          height: 52px;
          object-fit: contain;
          position: relative;
          z-index: 3;
          filter: drop-shadow(0 0 12px rgba(239, 68, 68, 0.7));
          animation: preloaderLogoBounce 1.5s ease-in-out infinite alternate;
        }

        @keyframes preloaderLogoBounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-4px); }
        }

        .preloader-ring-pulse {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid rgba(239, 68, 68, 0.4);
          animation: ringPulse 1.8s ease-out infinite;
        }

        .preloader-ring-outer {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px dashed rgba(239, 68, 68, 0.5);
          animation: ringRotate 8s linear infinite;
        }

        @keyframes ringPulse {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        @keyframes ringRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .preloader-brand {
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          font-size: 1.45rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .brand-dudi {
          color: #FFFFFF;
        }

        .brand-seo {
          color: #EF4444;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          padding: 1px 8px;
          border-radius: 6px;
          font-size: 0.85em;
        }

        .preloader-status-row {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Chakra Petch', monospace;
          font-size: 0.68rem;
          color: #94A3B8;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .preloader-pct {
          color: #EF4444;
          font-weight: 700;
          font-size: 0.78rem;
        }

        .preloader-bar-track {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          position: relative;
          overflow: visible;
          margin-bottom: 12px;
        }

        .preloader-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #DC2626 0%, #EF4444 70%, #F87171 100%);
          border-radius: 9999px;
          transition: width 0.15s ease;
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.8);
        }

        .preloader-bar-laser {
          position: absolute;
          top: -2px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #FFFFFF;
          box-shadow: 0 0 12px #EF4444, 0 0 4px #FFFFFF;
          transform: translateX(-50%);
          transition: left 0.15s ease;
        }

        .preloader-subtext {
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-family: 'Chakra Petch', monospace;
          font-size: 0.6rem;
          color: rgba(148, 163, 184, 0.5);
          letter-spacing: 0.06em;
        }
      `}</style>
    </div>
  );
}
