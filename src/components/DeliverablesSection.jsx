import React, { useRef, useEffect, useState } from 'react';
import { Rocket, FileText, Sparkles, Cpu, BarChart3, Users } from 'lucide-react';

export default function DeliverablesSection() {
  const deliverables = [
    {
      step: '01',
      title: 'Kế hoạch từ khóa ưu tiên',
      desc: 'Danh sách truy vấn theo dõi (từ 5 đến 60 từ khóa tùy gói) bám sát ý định tìm kiếm và sản phẩm/dịch vụ cốt lõi.',
      icon: <Rocket size={28} className="cyber-icon" />
    },
    {
      step: '02',
      title: 'Bài viết SEO theo brief',
      desc: 'Sản xuất từ 2 đến 20 bài/tháng (800 - 1500+ từ), có cấu trúc heading, nguồn uy tín và 1 vòng sửa đổi.',
      icon: <FileText size={28} className="cyber-icon" />
    },
    {
      step: '03',
      title: 'Tối ưu On-page & Content',
      desc: 'Chuẩn hóa Title, Meta description, cấu trúc H1-H3, liên kết nội bộ và tối ưu trang đích theo chuyển đổi.',
      icon: <Sparkles size={28} className="cyber-icon" />
    },
    {
      step: '04',
      title: 'Audit & Sửa lỗi kỹ thuật',
      desc: 'Kiểm tra và xử lý lỗi index, crawl, file sitemap, canonical, chuyển hướng redirect và tốc độ tải trang.',
      icon: <Cpu size={28} className="cyber-icon" />
    },
    {
      step: '05',
      title: 'Báo cáo minh bạch tháng',
      desc: 'Tách bạch rõ ràng giữa khối lượng hoàn thành, dữ liệu thực tế từ GSC/GA4 và các đề xuất tối ưu tháng tới.',
      icon: <BarChart3 size={28} className="cyber-icon" />
    },
    {
      step: '06',
      title: 'Họp đánh giá định kỳ',
      desc: 'Tổ chức họp báo cáo 30 - 60 phút mỗi tháng cùng chuyên gia để đối soát kết quả và thống nhất kế hoạch.',
      icon: <Users size={28} className="cyber-icon" />
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
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      setIsGrabbing(true);
      lastXRef.current = e.touches[0].clientX;
      lastTimeRef.current = performance.now();
      velocityRef.current = 0;
    }
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    const now = performance.now();
    const currentX = e.touches[0].clientX;
    const delta = currentX - lastXRef.current;
    const dt = Math.max(1, now - lastTimeRef.current);

    posRef.current -= delta;
    velocityRef.current = -(delta / dt) * 18;

    lastXRef.current = currentX;
    lastTimeRef.current = now;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    setIsGrabbing(false);
  };

  const handleWheel = (e) => {
    // Wheel acceleration
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 1) {
      velocityRef.current += delta * 0.12;
      velocityRef.current = Math.max(-28, Math.min(28, velocityRef.current));
    }
  };

  return (
    <section id="s05-dau-ra" className="section-wrapper cyber-deliverables-section overflow-hidden">
      <div className="container">
        <div className="cyber-sec-header">
          <div className="cyber-badge">HẠNG MỤC & ĐẦU RA BÀN GIAO</div>
          <h2 className="cyber-section-title">Đầu ra dịch vụ & Hạng mục doanh nghiệp nhận được</h2>
          <p className="cyber-section-desc">
            Mọi hạng mục công việc đều được định lượng rõ ràng về số lượng, tiêu chuẩn chất lượng và mốc bàn giao hàng tháng.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Interactive Cyber Carousel */}
      <div 
        className={`cyber-marquee-wrapper ${isGrabbing ? 'is-grabbing' : ''}`}
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
        <div ref={trackRef} className="cyber-marquee-track">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="cyber-card">
                {/* Lateral Edge Neon Glow Bars */}
                <div className="card-glow-left" />
                <div className="card-glow-right" />

                {/* Top Notch with Concentric Number Ring */}
                <div className="cyber-notch">
                  <div className="notch-outer-ring">
                    <div className="notch-inner-ring">
                      <span className="notch-number">{item.step.replace(/^0/, '')}</span>
                    </div>
                  </div>
                </div>

                {/* Card Inner Content */}
                <div className="cyber-card-body">
                  <div className="cyber-icon-wrap">
                    {item.icon}
                  </div>

                  <h3 className="cyber-card-title">{item.title}</h3>
                  <p className="cyber-card-desc">{item.desc}</p>
                </div>
              </div>

              {/* Inter-card Futuristic Connector Node */}
              <div className="cyber-connector">
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
        .cyber-deliverables-section {
          position: relative;
          background-color: #070D18;
          background-image: 
            radial-gradient(circle at 50% 15%, rgba(56, 189, 248, 0.14) 0%, transparent 55%),
            radial-gradient(circle at 85% 75%, rgba(239, 68, 68, 0.08) 0%, transparent 45%),
            radial-gradient(circle at 15% 85%, rgba(56, 189, 248, 0.07) 0%, transparent 45%),
            linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 100% 100%, 36px 36px, 36px 36px;
          padding: 60px 0 50px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          user-select: none;
        }

        .cyber-sec-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 12px auto;
        }

        .cyber-badge {
          display: inline-block;
          font-family: 'Chakra Petch', sans-serif;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: #38BDF8;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.3);
          padding: 4px 14px;
          border-radius: 9999px;
          margin-bottom: 10px;
          box-shadow: 0 0 14px rgba(56, 189, 248, 0.2);
        }

        .cyber-section-title {
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.4rem, 2.4vw, 1.95rem);
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6);
        }

        .cyber-section-desc {
          font-size: 0.88rem;
          color: #94A3B8;
          line-height: 1.55;
          margin: 0 auto;
        }

        .cyber-marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 40px 0 26px 0;
          margin-top: 6px;
          margin-bottom: 6px;
          cursor: grab;
          mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
          touch-action: pan-y;
        }

        .cyber-marquee-wrapper.is-grabbing {
          cursor: grabbing;
        }

        .cyber-marquee-track {
          display: flex;
          align-items: center;
          gap: 0;
          width: max-content;
          will-change: transform;
        }

        /* Futuristic Cyber Card Structure */
        .cyber-card {
          position: relative;
          flex: 0 0 280px;
          width: 280px;
          background: linear-gradient(180deg, #132034 0%, #0B1322 100%);
          border: 1px solid rgba(56, 189, 248, 0.25);
          border-radius: 24px;
          padding: 46px 20px 24px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.55), inset 0 0 20px rgba(56, 189, 248, 0.05);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          pointer-events: auto;
        }

        .cyber-card:hover {
          transform: translateY(-6px);
          border-color: rgba(56, 189, 248, 0.75);
          box-shadow: 0 22px 50px rgba(56, 189, 248, 0.22), 0 0 35px rgba(56, 189, 248, 0.3), inset 0 0 24px rgba(56, 189, 248, 0.1);
        }

        /* Lateral Neon Glow Stripes */
        .card-glow-left, .card-glow-right {
          position: absolute;
          top: 25%;
          height: 50%;
          width: 2px;
          border-radius: 2px;
          pointer-events: none;
        }

        .card-glow-left {
          left: -1px;
          background: linear-gradient(180deg, transparent, #38BDF8 50%, transparent);
          box-shadow: -2px 0 14px #38BDF8;
        }

        .card-glow-right {
          right: -1px;
          background: linear-gradient(180deg, transparent, #38BDF8 50%, transparent);
          box-shadow: 2px 0 14px #38BDF8;
        }

        /* Top Notch with Concentric Rings */
        .cyber-notch {
          position: absolute;
          top: -24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
        }

        .notch-outer-ring {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(180deg, #38BDF8 0%, #1E3A5F 100%);
          padding: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 18px rgba(56, 189, 248, 0.5);
        }

        .notch-inner-ring {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #0B1321;
          border: 2px solid rgba(56, 189, 248, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .notch-number {
          font-family: 'Chakra Petch', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          color: #FFFFFF;
          text-shadow: 0 0 10px rgba(56, 189, 248, 0.85);
        }

        /* Body Elements */
        .cyber-card-body {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cyber-icon-wrap {
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 12px rgba(56, 189, 248, 0.6));
          transition: transform 0.3s ease;
        }

        .cyber-card:hover .cyber-icon-wrap {
          transform: scale(1.12);
        }

        .cyber-icon {
          color: #38BDF8;
        }

        .cyber-card-title {
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          font-size: 0.96rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 8px;
          line-height: 1.35;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        .cyber-card-desc {
          font-size: 0.78rem;
          color: #94A3B8;
          line-height: 1.5;
          margin: 0;
        }

        /* Cyber Connecting Node */
        .cyber-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 12px;
          opacity: 0.85;
          flex-shrink: 0;
        }

        .connector-line {
          width: 16px;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, #38BDF8, transparent);
        }

        .connector-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1.5px solid #38BDF8;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.7);
        }

        .dot-inner {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #FFFFFF;
          box-shadow: 0 0 6px #38BDF8;
        }

        @media (max-width: 640px) {
          .cyber-card {
            flex: 0 0 250px;
            width: 250px;
            padding: 40px 16px 20px 16px;
          }
          .cyber-connector {
            padding: 0 6px;
          }
        }
      `}</style>
    </section>
  );
}




