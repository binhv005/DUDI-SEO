import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Đối tượng', href: '#s03-doi-tuong' },
    { name: 'Vấn đề', href: '#s04-van-de' },
    { name: 'Đầu ra', href: '#s05-dau-ra' },
    { name: 'Bảng giá', href: '#s06-bang-gia' },
    { name: 'Quy trình', href: '#s07-quy-trinh' },
    { name: 'Báo cáo mẫu', href: '#s08-case' },
    { name: 'Giới hạn', href: '#s09-gioi-han' },
    { name: 'FAQ', href: '#s10-faq' },
  ];

  return (
    <header className="header-root">
      <div className="container header-container">
        {/* Logo & Brand */}
        <a href="#s02-hero" className="brand-logo-link">
          <img src="/logo.webp" alt="DUDI SOFTWARE Logo" className="brand-logo" />
          <span className="brand-text">
            DUDI <span className="brand-highlight">SOFTWARE</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Menu chính">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* CTA Button to Form */}
          <a href="#s11-form" className="btn btn-primary btn-sm header-cta">
            <span>Gửi website để nhận đánh giá SEO</span>
            <ArrowRight size={14} />
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Đóng/Mở menu điều hướng"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="mobile-nav-menu">
          <div className="mobile-nav-inner">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                className="mobile-nav-item"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-nav-footer">
              <a 
                href="#s11-form" 
                className="btn btn-primary btn-full"
                onClick={() => setMenuOpen(false)}
              >
                Gửi website để nhận đánh giá SEO
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .header-root {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-subtle);
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 24px;
          height: 68px;
        }

        .brand-logo-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--secondary);
          font-weight: 800;
          font-size: 1.15rem;
          letter-spacing: -0.5px;
          flex-shrink: 0;
        }

        .brand-logo {
          height: 38px;
          width: auto;
          object-fit: contain;
        }

        .brand-highlight {
          color: var(--primary);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 1;
        }

        @media (max-width: 1200px) {
          .desktop-nav {
            gap: 8px;
          }
        }

        @media (max-width: 1040px) {
          .desktop-nav {
            display: none;
          }
        }

        .nav-link {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s ease;
          padding: 6px 6px;
          white-space: nowrap;
          display: inline-block;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .header-cta {
          font-size: 0.88rem;
          padding: 8px 16px;
          white-space: nowrap;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--secondary);
          cursor: pointer;
          padding: 4px;
        }

        @media (max-width: 1040px) {
          .mobile-menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-cta {
            display: none;
          }
        }

        .mobile-nav-menu {
          position: absolute;
          top: 68px;
          left: 0;
          right: 0;
          background: #FFFFFF;
          border-bottom: 2px solid var(--border-subtle);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          padding: 16px 24px;
          z-index: 99;
          animation: slideDown 0.25s ease forwards;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-nav-inner {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-nav-item {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--secondary);
          text-decoration: none;
          padding: 6px 0;
          border-bottom: 1px dashed var(--border-subtle);
        }

        .mobile-nav-item:hover {
          color: var(--primary);
        }

        .mobile-nav-footer {
          margin-top: 12px;
        }

        .btn-full {
          width: 100%;
        }
      `}</style>
    </header>
  );
}
