import React, { useState, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 220);
  };

  const navLinks = [
    { name: 'Đối tượng', href: '#s03-doi-tuong' },
    { name: 'Vấn đề', href: '#s04-van-de' },
    { name: 'Đầu ra', href: '#s05-dau-ra' },
    { name: 'Bảng giá', href: '#s06-bang-gia' },
    { name: 'Quy trình', href: '#s07-quy-trinh' },
    { name: 'Báo cáo mẫu', href: '#s08-case' },
    { name: 'Giới hạn', href: '#s09-gioi-han' },
  ];

  const webSystemLinks = [
    { name: 'Cập nhật', href: 'https://dudi-page.vercel.app/' },
    { name: 'Đơn giá', href: 'https://dudi-dongia.vercel.app/' },
    { name: 'Bán hàng', href: 'https://dudi-banhang.vercel.app/' },
    { name: 'Dịch vụ', href: 'https://dudi-dichvu.vercel.app/' },
    { name: 'Bảo trì', href: 'https://dudi-baotri.vercel.app/' },
    { name: 'Giới thiệu', href: 'https://dudi-gioithieu.vercel.app/' },
    { name: 'Tổng hợp', href: 'https://dudi-tonghop.vercel.app/' },
  ];

  return (
    <header className="header-root">
      <div className="container header-container">
        {/* Logo & Brand */}
        <a href="#s02-hero" className="brand-logo-link">
          <div className="brand-text-logo">
            <div className="brand-main-row">
              <span className="brand-dudi">DUDI</span>
              <span className="brand-software">SOFTWARE</span>
            </div>
            <div className="brand-sub-tagline">TECHNOLOGY SOLUTIONS HUB</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Menu chính">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}

          {/* Hệ thống web Dropdown Menu (trước FAQ) */}
          <div 
            className="nav-dropdown-wrapper"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <button 
              className={`nav-dropdown-btn ${dropdownOpen ? 'active' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              type="button"
              aria-expanded={dropdownOpen}
            >
              <span>Hệ thống web</span>
              {dropdownOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {dropdownOpen && (
              <div 
                className="nav-dropdown-menu"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="nav-dropdown-inner">
                  {webSystemLinks.map((item, idx) => (
                    <a 
                      key={idx} 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="nav-dropdown-item"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="#s10-faq" className="nav-link">
            FAQ
          </a>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* CTA Button to Form */}
          <a href="#s11-form" className="btn btn-primary btn-sm header-cta">
            <span>Nhận đánh giá SEO</span>
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

            {/* Mobile Dropdown for Hệ thống web */}
            <div className="mobile-dropdown-group">
              <button 
                type="button"
                className="mobile-nav-item mobile-dropdown-header"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                <span className="mobile-badge-text">Hệ thống web</span>
                {mobileDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {mobileDropdownOpen && (
                <div className="mobile-sublinks">
                  {webSystemLinks.map((item, idx) => (
                    <a 
                      key={idx} 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mobile-sublink-item"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="#s10-faq" 
              className="mobile-nav-item"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </a>

            <div className="mobile-nav-footer">
              <a 
                href="#s11-form" 
                className="btn btn-primary btn-full"
                onClick={() => setMenuOpen(false)}
              >
                Nhận đánh giá SEO
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
          width: 100%;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-subtle);
          z-index: 1000;
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
          text-decoration: none;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .brand-logo-link:hover {
          transform: translateY(-1px);
        }

        .brand-text-logo {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .brand-main-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 1.32rem;
          font-weight: 900;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        .brand-dudi {
          color: #0F172A;
          font-weight: 900;
        }

        .brand-software {
          color: #EF4444;
          font-weight: 900;
        }

        .brand-sub-tagline {
          font-size: 0.62rem;
          font-weight: 700;
          color: #94A3B8;
          letter-spacing: 0.16em;
          margin-top: 2px;
          text-transform: uppercase;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 1;
        }

        @media (max-width: 1240px) {
          .desktop-nav {
            gap: 6px;
          }
        }

        @media (max-width: 1080px) {
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

        /* Hệ thống web Dropdown */
        .nav-dropdown-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 8px 0;
        }

        .nav-dropdown-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: transparent;
          color: var(--text-muted);
          border: none;
          padding: 6px 6px;
          font-size: 0.88rem;
          font-weight: 600;
          font-family: var(--font-main);
          cursor: pointer;
          transition: color 0.2s ease;
          white-space: nowrap;
        }

        .nav-dropdown-btn:hover,
        .nav-dropdown-btn.active {
          color: var(--primary);
          background: transparent;
          box-shadow: none;
          border-color: transparent;
        }

        .nav-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          padding-top: 6px;
          z-index: 250;
          animation: dropFadeIn 0.18s ease forwards;
        }

        /* Invisible Hover Bridge connecting button and dropdown */
        .nav-dropdown-menu::before {
          content: '';
          position: absolute;
          top: -12px;
          left: -10px;
          right: -10px;
          height: 20px;
          background: transparent;
        }

        .nav-dropdown-inner {
          background: #FFFFFF;
          border-radius: 18px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.14), 0 2px 10px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(226, 232, 240, 0.9);
          min-width: 175px;
          overflow: hidden;
        }

        @keyframes dropFadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -6px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        .nav-dropdown-item {
          display: block;
          padding: 11px 20px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #0F172A;
          text-decoration: none;
          border-bottom: 1px solid #F1F5F9;
          transition: all 0.18s ease;
          white-space: nowrap;
        }

        .nav-dropdown-item:last-child {
          border-bottom: none;
        }

        .nav-dropdown-item:hover {
          background-color: #FFF5F5;
          color: #E11D48;
          padding-left: 24px;
        }

        /* Header Actions */
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

        @media (max-width: 1080px) {
          .mobile-menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-cta {
            display: none;
          }
        }

        /* Mobile Menu */
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
          padding: 8px 0;
          border-bottom: 1px dashed var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          text-align: left;
          background: none;
          border-top: none;
          border-left: none;
          border-right: none;
          cursor: pointer;
          font-family: var(--font-main);
        }

        .mobile-nav-item:hover {
          color: var(--primary);
        }

        .mobile-badge-text {
          color: var(--secondary);
          font-weight: 600;
        }

        .mobile-sublinks {
          display: flex;
          flex-direction: column;
          background: #F8FAFC;
          border-radius: 12px;
          padding: 8px 12px;
          margin: 4px 0 8px 0;
          gap: 6px;
        }

        .mobile-sublink-item {
          font-size: 0.9rem;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          padding: 6px 8px;
          border-radius: 6px;
          transition: background 0.15s ease;
        }

        .mobile-sublink-item:hover {
          background: #FFF1F2;
          color: #E11D48;
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
