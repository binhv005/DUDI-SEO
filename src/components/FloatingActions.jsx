import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageCircle, Sparkles } from 'lucide-react';
import AIChatModal from './AIChatModal';

export default function FloatingActions({ onNotify }) {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const phoneNumber = '0909 163 821';
  const rawPhone = '0909163821';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePhoneClick = (e) => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    if (isMobile) {
      window.location.href = `tel:${rawPhone}`;
    } else {
      e.preventDefault();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(phoneNumber).then(() => {
          onNotify(`Đã sao chép số điện thoại ${phoneNumber} vào bộ nhớ tạm!`, 'copy');
        }).catch(() => {
          onNotify(`Số điện thoại: ${phoneNumber}`, 'info');
        });
      } else {
        onNotify(`Số điện thoại: ${phoneNumber}`, 'info');
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Floating AI Chatbot Modal */}
      <AIChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />

      <div className="floating-actions" aria-label="Kênh liên hệ và điều hướng">
        {/* 1. Nút Robot Mascot AI (Ở TRÊN CÙNG NHẤT) */}
        <button 
          type="button"
          data-chat-toggle="true"
          onClick={() => setIsChatOpen(prev => !prev)}
          className={`float-btn float-btn-ai ${isChatOpen ? 'active' : ''}`}
          title="Chat với Trợ lý AI SEO DUDI"
          aria-label="Mở Trợ lý AI SEO DUDI"
        >
          <div className="float-ai-img-wrapper">
            <img 
              src="/robot-mascot.webp" 
              alt="Trợ lý AI SEO DUDI" 
              className="float-ai-img"
            />
          </div>
          <span className="float-ai-online-dot" />
        </button>

        {/* 2. Nút Call */}
        <button 
          onClick={handlePhoneClick}
          className="float-btn float-btn-call"
          title="Gọi điện hoặc sao chép Hotline 0909 163 821"
          aria-label="Gọi điện Hotline 0909 163 821"
        >
          <Phone size={24} />
        </button>

        {/* 3. Nút Zalo */}
        <a 
          href={`https://zalo.me/${rawPhone}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="float-btn float-btn-zalo"
          title="Chat Zalo 0909 163 821"
          aria-label="Chat Zalo 0909 163 821"
        >
          <span style={{ fontWeight: 800, fontSize: '0.95rem', letterSpacing: '-0.2px' }}>Zalo</span>
        </a>

        {/* 4. Nút lên đầu trang */}
        <button 
          onClick={scrollToTop}
          className={`float-btn float-btn-top ${showTopBtn ? 'visible' : ''}`}
          title="Lên lại đầu trang"
          aria-label="Lên lại đầu trang"
        >
          <ArrowUp size={22} />
        </button>
      </div>
    </>
  );
}