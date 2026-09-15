import React, { useState, useEffect, useRef } from 'react';
import { BarChart3 } from 'lucide-react';

function Counter({ target, duration = 1600, prefix = '', suffix = '', formatValue }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const spanRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (spanRef.current) {
      observer.observe(spanRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Ease out quartic for natural deceleration
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, target, duration]);

  const displayVal = formatValue ? formatValue(count) : `${prefix}${count}${suffix}`;

  return <span ref={spanRef} className="counter-number">{displayVal}</span>;
}

export default function ReportingCaseSection() {
  const sampleMetrics = [
    { 
      label: 'Tổng lượt hiển thị (Impressions)', 
      target: 142, 
      prefix: '+', 
      suffix: '%', 
      period: 'So với chu kỳ trước'
    },
    { 
      label: 'Tổng lượt nhấp chuột (Clicks)', 
      target: 86, 
      prefix: '+', 
      suffix: '%', 
      period: 'Đo lường từ Google Search'
    },
    { 
      label: 'Từ khóa ưu tiên vào Top', 
      target: 18, 
      formatValue: (v) => `${v} / 25`, 
      period: 'Theo kế hoạch tháng chốt'
    },
    { 
      label: 'Số bài viết & SLA hoàn tất', 
      target: 100, 
      suffix: '%', 
      period: 'Đã nghiệm thu đúng hạn'
    }
  ];

  const reportStructure = [
    {
      title: '1. Khối lượng công việc đã làm',
      desc: 'Danh sách chi tiết các bài viết chuẩn SEO đã đăng tải, link bài, các lỗi kỹ thuật on-page / schema đã sửa chữa trong tháng.'
    },
    {
      title: '2. Dữ liệu quan sát thực tế (GSC & GA4)',
      desc: 'Trích xuất biểu đồ xu hướng hiển thị, click chuột, số trang được index và luồng chuyển đổi từ tài khoản đo lường chính thức.'
    },
    {
      title: '3. Phân tích & Backlog kỹ thuật',
      desc: 'Nhận định chuyên môn, phân tích các biến động thuật toán và danh sách công việc cần tối ưu hóa cho chu kỳ tiếp theo.'
    }
  ];

  return (
    <section id="s08-case" className="section-wrapper bg-white reporting-case-section">
      <div className="container">
        <div className="reporting-sec-header">
          <div className="section-badge">BÁO CÁO & ĐO LƯỜNG</div>
          <h2 className="section-title">Báo cáo mẫu & Dữ liệu đo lường định kỳ</h2>
          <p className="section-desc">
            Minh bạch giữa số liệu đo lường khách quan từ Google Search Console, Google Analytics 4 và các đề xuất chuyên môn.
          </p>
        </div>

        {/* 4 Minimal Soft Pastel Cards matching Reference Sample */}
        <div className="clean-stats-grid">
          {sampleMetrics.map((m, idx) => (
            <div key={idx} className={`clean-stat-card reveal-scale stagger-${idx + 1}`}>
              <div className="clean-stat-num">
                <Counter 
                  target={m.target}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  formatValue={m.formatValue}
                  duration={1400 + idx * 150}
                />
              </div>
              <div className="clean-stat-label">{m.label}</div>
              <div className="clean-stat-period">{m.period}</div>
            </div>
          ))}
        </div>

        {/* Report 3-Part Structure Red Card */}
        <div className="report-struct-red-card reveal-up">
          <div className="report-card-header">
            <div className="report-icon-badge">
              <BarChart3 size={18} color="#FFFFFF" />
            </div>
            <h3 className="report-card-title">Cấu trúc báo cáo SEO chuẩn hóa 3 phần</h3>
          </div>

          <div className="struct-grid">
            {reportStructure.map((part, i) => (
              <div key={i} className="struct-item">
                <h4 className="struct-title">{part.title}</h4>
                <p className="struct-desc">{part.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .reporting-case-section {
          padding-top: 50px !important;
          padding-bottom: 50px !important;
        }

        .reporting-sec-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 28px auto;
        }

        /* 4 Minimal Soft Pastel Cards Matching Sample */
        .clean-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 24px;
        }

        @media (max-width: 992px) {
          .clean-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 540px) {
          .clean-stats-grid {
            grid-template-columns: 1fr;
          }
        }

        .clean-stat-card {
          background: #F1F4FD;
          border-radius: 20px;
          padding: 34px 20px 28px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: all 0.25s ease;
          border: 1px solid rgba(67, 97, 238, 0.06);
          box-shadow: 0 4px 16px rgba(67, 97, 238, 0.04);
        }

        .clean-stat-card:hover {
          transform: translateY(-5px);
          background: #EEF2FC;
          box-shadow: 0 12px 28px rgba(67, 97, 238, 0.12);
          border-color: rgba(67, 97, 238, 0.18);
        }

        .clean-stat-num {
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(2rem, 2.5vw, 2.45rem);
          font-weight: 800;
          color: #4361EE;
          line-height: 1.1;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .clean-stat-label {
          font-size: 0.86rem;
          font-weight: 600;
          color: #475569;
          line-height: 1.38;
          margin-bottom: 4px;
        }

        .clean-stat-period {
          font-size: 0.74rem;
          color: #94A3B8;
          font-weight: 500;
        }

        /* 3-Part Report Structure Red Card */
        .report-struct-red-card {
          padding: 24px 26px;
          background: linear-gradient(135deg, #C62828 0%, #B71C1C 45%, #8E0000 100%);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          box-shadow: 0 14px 36px rgba(183, 28, 28, 0.28), 0 2px 10px rgba(0, 0, 0, 0.06);
          color: #FFFFFF;
        }

        .report-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .report-icon-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          flex-shrink: 0;
        }

        .report-card-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          letter-spacing: 0.01em;
        }

        .struct-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @media (max-width: 768px) {
          .struct-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .report-struct-red-card {
            padding: 20px 18px;
          }
        }

        .struct-item {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 12px;
          padding: 16px 18px;
          backdrop-filter: blur(6px);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .struct-item:hover {
          background: rgba(255, 255, 255, 0.16);
          transform: translateY(-2px);
        }

        .struct-title {
          font-size: 0.9rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 6px;
          line-height: 1.35;
        }

        .struct-desc {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          margin: 0;
        }
      `}</style>
    </section>
  );
}


