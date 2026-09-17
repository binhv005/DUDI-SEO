import React, { useRef, useEffect, useState } from 'react';
import { Rocket, FileText, Sparkles, Cpu, BarChart3, Users } from 'lucide-react';

export default function DeliverablesSection() {
  const deliverables = [
    {
      step: '01',
      title: 'Kế hoạch từ khóa ưu tiên',
      desc: 'Danh sách truy vấn theo dõi (từ 5 đến 60 từ khóa tùy gói) bám sát ý định tìm kiếm và sản phẩm/dịch vụ cốt lõi.',
      icon: <Rocket size={26} className="deliverable-icon" />
    },
    {
      step: '02',
      title: 'Bài viết SEO theo brief',
      desc: 'Sản xuất từ 2 đến 20 bài/tháng (800 - 1500+ từ), có cấu trúc heading, nguồn uy tín và 1 vòng sửa đổi.',
      icon: <FileText size={26} className="deliverable-icon" />
    },
    {
      step: '03',
      title: 'Tối ưu On-page & Content',
      desc: 'Chuẩn hóa Title, Meta description, cấu trúc H1-H3, liên kết nội bộ và tối ưu trang đích theo chuyển đổi.',
      icon: <Sparkles size={26} className="deliverable-icon" />
    },
    {
      step: '04',
      title: 'Audit & Sửa lỗi kỹ thuật',
      desc: 'Kiểm tra và xử lý lỗi index, crawl, file sitemap, canonical, chuyển hướng redirect và tốc độ tải trang.',
      icon: <Cpu size={26} className="deliverable-icon" />
    },
    {
      step: '05',
      title: 'Báo cáo minh bạch tháng',
      desc: 'Tách bạch rõ ràng giữa khối lượng hoàn thành, dữ liệu thực tế từ GSC/GA4 và các đề xuất tối ưu tháng tới.',
      icon: <BarChart3 size={26} className="deliverable-icon" />
    },
    {
      step: '06',
      title: 'Họp đánh giá định kỳ',
      desc: 'Tổ chức họp báo cáo 30 - 60 phút mỗi tháng cùng chuyên gia để đối soát kết quả và thống nhất kế hoạch.',
      icon: <Users size={26} className="deliverable-icon" />
    }
  ];

  // Quadruple items so there's plenty of continuous track during dragging
  const marqueeItems = [...deliverables, ...deliverables, ...deliverables, ...deliverables];

  const trackRef = useRef(null);
  const posRef = useRef(0);
  const isDraggingRef = useRef(false);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const isHoveredRef = useRef(false);
  const [isGrabbing, setIsGrabbing] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const updateLoop = () => {
      if (trackRef.current) {
        const fullTrackWidth = trackRef.current.scrollWidth;
        const oneSetWidth = fullTrackWidth / 4; // 1 single cycle width

        if (!isDraggingRef.current) {
          // Friction / inertia deceleration
          velocityRef.current *= 0.94;

          // If velocity is negligible, settle to ambient scroll speed
          const isSettled = Math.abs(velocityRef.current) < 0.05;
          const ambientSpeed = isHoveredRef.current ? 0 : 0.95;
          const speed = isSettled 
            ? ambientSpeed 
            : velocityRef.current + (isHoveredRef.current ? 0 : ambientSpeed * 0.3);

          posRef.current += speed;

          // Seamless modulo wrap
          if (oneSetWidth > 0) {
            while (posRef.current >= oneSetWidth) {
              posRef.current -= oneSetWidth;
            }
            while (posRef.current < 0) {
              posRef.current += oneSetWidth;
            }
          }
        }

        trackRef.current.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateLoop);
    };

    animationFrameId = requestAnimationFrame(updateLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Drag & Swipe Event Handlers
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    setIsGrabbing(true);
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const now = performance.now();
    const delta = e.clientX - lastXRef.current;
    const dt = Math.max(1, now - lastTimeRef.current);

    posRef.current -= delta;
    // Calculate flick velocity
    velocityRef.current = -(delta / dt) * 18;

    lastXRef.current = e.clientX;
    lastTimeRef.current = now;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsGrabbing(false);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    isDraggingRef.current = true;
    setIsGrabbing(true);
    lastXRef.current = e.touches[0].clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    const now = performance.now();
    const delta = e.touches[0].clientX - lastXRef.current;
    const dt = Math.max(1, now - lastTimeRef.current);

    posRef.current -= delta;
    velocityRef.current = -(delta / dt) * 18;

    lastXRef.current = e.touches[0].clientX;
    lastTimeRef.current = now;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    setIsGrabbing(false);
  };

  const handleWheel = (e) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 1) {
      velocityRef.current += delta * 0.12;
      velocityRef.current = Math.max(-28, Math.min(28, velocityRef.current));
    }
  };

  return (
    <section id="s05-dau-ra" className="section-wrapper deliverables-light-section overflow-hidden">
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">HẠNG MỤC & ĐẦU RA BÀN GIAO</div>
          <h2 className="section-title">Đầu ra dịch vụ & Hạng mục doanh nghiệp nhận được</h2>
          <p className="section-desc">
            Mọi hạng mục công việc đều được định lượng rõ ràng về số lượng, tiêu chuẩn chất lượng và mốc bàn giao hàng tháng.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Interactive Light Carousel */}
      <div 
        className={`deliverables-marquee-wrapper ${isGrabbing ? 'is-grabbing' : ''}`}
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { 
          isHoveredRef.current = false; 
          if (isDraggingRef.current) handleMouseUp(); 
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      >
        <div ref={trackRef} className="deliverables-marquee-track">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="deliverable-card">
                {/* Top Number Badge */}
                <div className="deliverable-notch">
                  <div className="notch-outer-ring">
                    <div className="notch-inner-ring">
                      <span className="notch-number">{item.step.replace(/^0/, '')}</span>
                    </div>
                  </div>
                </div>

                {/* Card Inner Content */}
                <div className="deliverable-card-body">
                  <div className="deliverable-icon-wrap">
                    {item.icon}
                  </div>

                  <h3 className="deliverable-card-title">{item.title}</h3>
                  <p className="deliverable-card-desc">{item.desc}</p>
                </div>
              </div>

              {/* Inter-card Connector Node */}
              <div className="deliverable-connector">
                <div className="connector-line" />
                <div className="connector-dot">
                  <div className="dot-inner" />
                </div>
                <div className="connector-line" />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        .deliverables-light-section {
          position: relative;
          background-color: var(--bg-white);
          background-image: 
            radial-gradient(circle at 50% 0%, rgba(239, 68, 68, 0.04) 0%, transparent 60%),
            radial-gradient(circle at 90% 80%, rgba(239, 68, 68, 0.03) 0%, transparent 50%),
            linear-gradient(rgba(226, 232, 240, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(226, 232, 240, 0.4) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 32px 32px, 32px 32px;
          padding: 56px 0 46px 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          user-select: none;
        }

        .deliverables-marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 36px 0 24px 0;
          margin-top: 8px;
          cursor: grab;
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          touch-action: pan-y;
        }

        .deliverables-marquee-wrapper.is-grabbing {
          cursor: grabbing;
        }

        .deliverables-marquee-track {
          display: flex;
          align-items: center;
          gap: 0;
          width: max-content;
          will-change: transform;
        }

        /* Light Card Structure */
        .deliverable-card {
          position: relative;
          flex: 0 0 280px;
          width: 280px;
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: 20px;
          padding: 38px 20px 22px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
          transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
          pointer-events: auto;
        }

        .deliverable-card:hover {
          transform: translateY(-5px);
          border-color: rgba(211, 47, 47, 0.4);
          box-shadow: 0 14px 32px rgba(211, 47, 47, 0.1), 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        /* Top Notch with Number Ring */
        .deliverable-notch {
          position: absolute;
          top: -22px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
        }

        .notch-outer-ring {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(145deg, #DC2626 0%, #EF4444 100%);
          padding: 2.5px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(211, 47, 47, 0.35);
        }

        .notch-inner-ring {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .notch-number {
          font-family: var(--font-main);
          font-size: 1.05rem;
          font-weight: 800;
          color: #D32F2F;
        }

        /* Body Elements */
        .deliverable-card-body {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .deliverable-icon-wrap {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: #FFF5F5;
          border: 1px solid #FECDD3;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.28s ease, background-color 0.28s ease;
        }

        .deliverable-card:hover .deliverable-icon-wrap {
          transform: scale(1.08);
          background: #FEE2E2;
        }

        .deliverable-icon {
          color: #D32F2F;
        }

        .deliverable-card-title {
          font-size: 0.96rem;
          font-weight: 800;
          color: var(--secondary);
          margin-bottom: 0;
          line-height: 1.35;
          transition: color 0.2s ease, margin-bottom 0.25s ease;
        }

        .deliverable-card:hover .deliverable-card-title {
          color: var(--primary);
          margin-bottom: 6px;
        }

        .deliverable-card-desc {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transform: translateY(6px);
          transition: opacity 0.28s ease, transform 0.28s ease, max-height 0.28s ease, margin-top 0.28s ease;
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0;
          pointer-events: none;
        }

        .deliverable-card:hover .deliverable-card-desc {
          opacity: 1;
          max-height: 100px;
          transform: translateY(0);
          margin-top: 4px;
          pointer-events: auto;
        }

        /* Connecting Node between cards */
        .deliverable-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 10px;
          flex-shrink: 0;
        }

        .connector-line {
          width: 16px;
          height: 1.5px;
          background: #FECDD3;
        }

        .connector-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1.5px solid #EF4444;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 6px rgba(239, 68, 68, 0.25);
        }

        .dot-inner {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #EF4444;
        }

        @media (max-width: 640px) {
          .deliverable-card {
            flex: 0 0 250px;
            width: 250px;
            padding: 34px 16px 18px 16px;
          }
          .deliverable-connector {
            padding: 0 6px;
          }
        }
      `}</style>
    </section>
  );
}
