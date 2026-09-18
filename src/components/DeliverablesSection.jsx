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
          min-height: auto !important;
          background: linear-gradient(180deg, #BA1C1C 0%, #A81B1B 45%, #941717 100%) !important;
          padding: 32px 0 26px 0 !important;
          border-top: 1px solid rgba(255, 255, 255, 0.25);
          border-bottom: 1px solid rgba(255, 255, 255, 0.25);
          user-select: none;
        }

        .deliverables-light-section .section-badge {
          background: #FFFFFF !important;
          color: #B91C1C !important;
          border: 1px solid rgba(255, 255, 255, 0.8) !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          margin-bottom: 8px;
        }

        .deliverables-light-section .section-title {
          color: #FFFFFF !important;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
        }

        .deliverables-light-section .section-desc {
          color: rgba(255, 255, 255, 0.92) !important;
        }

        .deliverables-marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 16px 0 16px 0;
          margin-top: 4px;
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

        /* Light Card Structure on Red Background */
        .deliverable-card {
          position: relative;
          flex: 0 0 280px;
          width: 280px;
          background: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 20px;
          padding: 22px 20px 20px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          pointer-events: auto;
        }

        .deliverable-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
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
          transition: transform 0.28s ease, background-color 0.28s ease, box-shadow 0.28s ease;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.1);
        }

        .deliverable-card:hover .deliverable-icon-wrap {
          transform: scale(1.08);
          background: #DC2626;
          box-shadow: 0 4px 14px rgba(220, 38, 38, 0.35);
        }

        .deliverable-icon {
          color: #DC2626;
          transition: color 0.25s ease;
        }

        .deliverable-card:hover .deliverable-icon {
          color: #FFFFFF;
        }

        .deliverable-card-title {
          font-size: 0.96rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 0;
          line-height: 1.35;
          transition: color 0.2s ease, margin-bottom 0.25s ease;
        }

        .deliverable-card:hover .deliverable-card-title {
          color: #DC2626;
          margin-bottom: 6px;
        }

        .deliverable-card-desc {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transform: translateY(6px);
          transition: opacity 0.28s ease, transform 0.28s ease, max-height 0.28s ease, margin-top 0.28s ease;
          font-size: 0.82rem;
          color: #475569;
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
          height: 2px;
          background: rgba(255, 255, 255, 0.65);
        }

        .connector-dot {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          border: 1.5px solid #FFFFFF;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
        }

        .dot-inner {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #B91C1C;
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
