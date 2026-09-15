import React, { useState, useEffect } from 'react';

export default function SectionNavigator() {
  const [activeSection, setActiveSection] = useState('s02-hero');
  const [isLaserFlashing, setIsLaserFlashing] = useState(false);

  const sections = [
    { id: 's02-hero', name: 'Đầu trang' },
    { id: 's03-doi-tuong', name: 'Đối tượng' },
    { id: 's04-van-de', name: 'Vấn đề' },
    { id: 's05-dau-ra', name: 'Đầu ra' },
    { id: 's06-bang-gia', name: 'Bảng giá' },
    { id: 's07-quy-trinh', name: 'Quy trình' },
    { id: 's08-case', name: 'Báo cáo mẫu' },
    { id: 's09-gioi-han', name: 'Giới hạn' },
    { id: 's10-faq', name: 'FAQ' },
    { id: 's11-form', name: 'Đăng ký nhận đánh giá' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const targetEl = document.getElementById(id);
    if (!targetEl) return;

    // Trigger laser flash transition effect
    setIsLaserFlashing(true);
    setTimeout(() => {
      setIsLaserFlashing(false);
    }, 450);

    const headerOffset = 64;
    const elementPosition = targetEl.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Laser Transition Sweep Flash */}
      <div className={`laser-transition-flash ${isLaserFlashing ? 'is-active' : ''}`} aria-hidden="true" />

      {/* Floating HUD Section Indicator on Desktop */}
      <nav className="hud-section-nav" aria-label="Điều hướng nhanh các phần">
        <div className="hud-nav-inner">
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => handleNavClick(e, sec.id)}
                className={`hud-dot-item ${isActive ? 'is-active' : ''}`}
                title={sec.name}
              >
                <span className="hud-dot-circle" />
                <span className="hud-dot-label">{sec.name}</span>
              </a>
            );
          })}
        </div>
      </nav>

      <style>{`
        /* Laser Sweep Transition Flash */
        .laser-transition-flash {
          position: fixed;
          top: 0;
          left: -100vw;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(239, 68, 68, 0.08) 40%, 
            rgba(239, 68, 68, 0.25) 50%, 
            rgba(239, 68, 68, 0.08) 60%, 
            transparent 100%);
          z-index: 99998;
          pointer-events: none;
          opacity: 0;
        }

        .laser-transition-flash.is-active {
          opacity: 1;
          animation: laserSweep 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes laserSweep {
          0% {
            left: -100vw;
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            left: 100vw;
            opacity: 0;
          }
        }

        /* Floating HUD Navigator */
        .hud-section-nav {
          position: fixed;
          right: 18px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 999;
          display: flex;
          flex-direction: column;
          pointer-events: none;
        }

        @media (max-width: 1200px) {
          .hud-section-nav {
            display: none;
          }
        }

        .hud-nav-inner {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: rgba(14, 22, 38, 0.6);
          padding: 10px 7px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          pointer-events: auto;
        }

        .hud-dot-item {
          display: flex;
          align-items: center;
          position: relative;
          text-decoration: none;
          padding: 3px;
        }

        .hud-dot-circle {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hud-dot-item:hover .hud-dot-circle {
          background: #EF4444;
          transform: scale(1.4);
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.8);
        }

        .hud-dot-item.is-active .hud-dot-circle {
          background: #EF4444;
          transform: scale(1.5);
          box-shadow: 0 0 12px #EF4444, 0 0 4px #FFFFFF;
        }

        /* Hover Tooltip Label */
        .hud-dot-label {
          position: absolute;
          right: 22px;
          top: 50%;
          transform: translateY(-50%) translateX(8px);
          background: #0E1626;
          color: #FFFFFF;
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          white-space: nowrap;
          padding: 3px 8px;
          border-radius: 6px;
          border: 1px solid rgba(239, 68, 68, 0.4);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
          opacity: 0;
          pointer-events: none;
          transition: all 0.2s ease;
        }

        .hud-dot-item:hover .hud-dot-label {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
      `}</style>
    </>
  );
}
