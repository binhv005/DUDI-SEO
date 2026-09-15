import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import ProblemsSection from './components/ProblemsSection';
import DeliverablesSection from './components/DeliverablesSection';
import PackagesSection from './components/PackagesSection';
import ProcessSection from './components/ProcessSection';
import ReportingCaseSection from './components/ReportingCaseSection';
import ScopeLimitsSection from './components/ScopeLimitsSection';
import FAQSection from './components/FAQSection';
import RequestFormSection from './components/RequestFormSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Toast from './components/Toast';
import Preloader from './components/Preloader';
import SectionNavigator from './components/SectionNavigator';

export default function App() {
  const [toastState, setToastState] = useState({
    isVisible: false,
    message: '',
    type: 'info'
  });
  const [selectedPkg, setSelectedPkg] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress & Section Reveal Observer
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Track scroll progress
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Intersection Observer for diverse scroll reveal animations
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elementsToReveal = document.querySelectorAll(
      '.reveal-item, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-flip, .reveal-pop, .section-wrapper, .custom-card, .price-card, .step-card-modern, .problem-item-box, .deliverable-box, .target-card, .faq-item, .final-cta-card'
    );

    elementsToReveal.forEach((el) => {
      if (!el.classList.contains('reveal-left') && 
          !el.classList.contains('reveal-right') && 
          !el.classList.contains('reveal-scale') && 
          !el.classList.contains('reveal-flip') && 
          !el.classList.contains('reveal-pop') && 
          !el.classList.contains('reveal-up')) {
        el.classList.add('reveal-up');
      }
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const showNotification = (message, type = 'info') => {
    setToastState({
      isVisible: true,
      message,
      type
    });

    setTimeout(() => {
      setToastState(prev => ({ ...prev, isVisible: false }));
    }, 3500);
  };

  const handleSelectPackage = (pkgName) => {
    setSelectedPkg(pkgName);
    showNotification(`Đã chọn gói dịch vụ: ${pkgName}`, 'info');
  };

  return (
    <div className="app-root page-fade-in">
      {/* 1. Cyber Initial Page Preloader Transition */}
      <Preloader />

      {/* 2. Top Scroll Progress Bar */}
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* 3. Floating HUD Quick Navigator & Laser Sweep Transition */}
      <SectionNavigator />

      {/* Toast Notification */}
      <Toast 
        isVisible={toastState.isVisible}
        message={toastState.message}
        type={toastState.type}
        onClose={() => setToastState(prev => ({ ...prev, isVisible: false }))}
      />

      {/* S01: Header */}
      <Header />

      {/* Main Landing Page Sections (S02 -> S12) */}
      <main>
        {/* S02: Hero (Nói rõ dịch vụ) */}
        <HeroSection />

        {/* S03: Đối tượng phù hợp (Giúp khách tự nhận diện) */}
        <TargetAudienceSection onSelectPackage={handleSelectPackage} />

        {/* S04: Vấn đề (Tạo nhu cầu thực tế) */}
        <ProblemsSection />

        {/* S05: Đầu ra (Nói rõ khách nhận gì) */}
        <DeliverablesSection />

        {/* S06: Bảng giá (So sánh & chọn 3 gói) */}
        <PackagesSection onSelectPackage={handleSelectPackage} />

        {/* S07: Quy trình (Giảm rủi ro mua hàng) */}
        <ProcessSection />

        {/* S08: Case hoặc mẫu (Báo cáo thực tế & độ tin cậy) */}
        <ReportingCaseSection />

        {/* S09: Giới hạn (Lọc sai nhu cầu & ngoài phạm vi) */}
        <ScopeLimitsSection />

        {/* S10: FAQ (Giải đáp phản đối) */}
        <FAQSection />

        {/* S11: Form (Thu lead đủ chuẩn) */}
        <RequestFormSection selectedPackage={selectedPkg} onNotify={showNotification} />

        {/* S12: CTA cuối (Chốt hành động với background robot 3D) */}
        <FinalCTASection onNotify={showNotification} />
      </main>

      {/* S13: Footer (Thông tin pháp lý) */}
      <Footer onNotify={showNotification} />

      {/* Floating Actions (Hotline Call, Zalo, Back to Top) */}
      <FloatingActions onNotify={showNotification} />
    </div>
  );
}
