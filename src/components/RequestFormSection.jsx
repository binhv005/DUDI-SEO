import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, RotateCcw } from 'lucide-react';

export default function RequestFormSection({ selectedPackage, onNotify }) {
  const [formData, setFormData] = useState({
    website: '',
    fullName: '',
    phone: '',
    industry: '',
    location: '',
    goals: ['Hiển thị', 'Traffic'],
    primaryGoal: 'Traffic',
    budget: '',
    description: '',
    packageInterest: selectedPackage || ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedInfo, setSubmittedInfo] = useState({ leadId: '', fullName: '', phone: '', website: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goalOptions = ['Hiển thị', 'Traffic', 'Lead', 'Bán hàng'];
  const budgetOptions = [
    { value: '', label: '-- Chọn ngân sách (Không bắt buộc) --' },
    { value: 'Dưới 5', label: 'Dưới 5 triệu' },
    { value: '5 đến 15', label: '5 đến 15 triệu' },
    { value: 'Trên 15 triệu', label: 'Trên 15 triệu' }
  ];

  const handleGoalToggle = (goal) => {
    let newGoals;
    if (formData.goals.includes(goal)) {
      newGoals = formData.goals.filter(g => g !== goal);
      if (formData.primaryGoal === goal) {
        setFormData({
          ...formData,
          goals: newGoals,
          primaryGoal: newGoals[0] || ''
        });
        return;
      }
    } else {
      newGoals = [...formData.goals, goal];
      if (!formData.primaryGoal) {
        setFormData({
          ...formData,
          goals: newGoals,
          primaryGoal: goal
        });
        return;
      }
    }
    setFormData({ ...formData, goals: newGoals });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      website: '',
      fullName: '',
      phone: '',
      industry: '',
      location: '',
      goals: ['Hiển thị', 'Traffic'],
      primaryGoal: 'Traffic',
      budget: '',
      description: '',
      packageInterest: selectedPackage || ''
    });
    setErrors({});
  };

  const validate = () => {
    const errs = {};
    const websiteTrimmed = formData.website.trim();
    if (!websiteTrimmed) {
      errs.website = 'Vui lòng nhập URL website';
    } else if (!/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/i.test(websiteTrimmed) && !/^https?:\/\//i.test(websiteTrimmed)) {
      errs.website = 'Vui lòng nhập đúng dạng website (Ví dụ: example.com hoặc https://example.com)';
    }

    if (!formData.fullName.trim()) {
      errs.fullName = 'Vui lòng nhập họ và tên';
    } else if (formData.fullName.trim().length < 2 || formData.fullName.trim().length > 80) {
      errs.fullName = 'Họ và tên từ 2 đến 80 ký tự';
    }

    const phoneClean = formData.phone.replace(/[\s.-]/g, '');
    if (!phoneClean) {
      errs.phone = 'Vui lòng nhập số điện thoại hoặc Zalo';
    } else if (!/^\d{9,12}$/.test(phoneClean)) {
      errs.phone = 'Số điện thoại từ 9 đến 12 chữ số';
    }

    if (!formData.industry.trim()) {
      errs.industry = 'Vui lòng nhập ngành nghề';
    } else if (formData.industry.trim().length < 2 || formData.industry.trim().length > 120) {
      errs.industry = 'Ngành nghề từ 2 đến 120 ký tự';
    }

    if (formData.goals.length === 0) {
      errs.goals = 'Vui lòng chọn ít nhất 1 mục tiêu SEO';
    }

    if (!formData.description.trim()) {
      errs.description = 'Vui lòng mô tả ít nhất 10 ký tự về nhu cầu hoặc tình trạng web';
    } else if (formData.description.trim().length < 10) {
      errs.description = 'Mô tả quá ngắn, vui lòng nhập tối thiểu 10 ký tự';
    } else if (formData.description.trim().length > 500) {
      errs.description = 'Mô tả tối đa 500 ký tự';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      if (onNotify) {
        onNotify('Vui lòng kiểm tra lại các trường thông tin có dấu đỏ!', 'warning');
      }
      return;
    }

    setIsSubmitting(true);
    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
    const goalsText = formData.goals.join(', ') + (formData.primaryGoal ? ` (Ưu tiên: ${formData.primaryGoal})` : '');

    const randSuffix = Math.floor(100000 + Math.random() * 900000);
    const fbLeadId = 'DUDI-' + randSuffix;

    const currentSub = {
      leadId: fbLeadId,
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      website: formData.website.trim()
    };

    try {
      const fbPayload = {
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        website: formData.website.trim(),
        industry: formData.industry.trim() || 'Chưa cung cấp',
        location: formData.location.trim() || 'Chưa cung cấp',
        selectedPackage: formData.packageInterest || selectedPackage || 'Tư vấn SEO tổng thể',
        goals: goalsText,
        budget: formData.budget || 'Chưa xác định',
        description: formData.description.trim(),
        status: 'new',
        source: 'DUDI SEO Landing Page',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const fbUrl = 'https://dudi-f5a6b-default-rtdb.firebaseio.com/leads/' + fbLeadId + '.json';
      const fbRes = await fetch(fbUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fbPayload)
      });
      console.log('🔥 [Firebase Live] Lead synced to Dashboard:', fbLeadId, fbRes.status);
    } catch (fbErr) {
      console.error('⚠️ Firebase realtime sync warning:', fbErr);
    }

    const payload = {
      lead_id: fbLeadId,
      ...formData,
      goals: goalsText,
      submittedAt: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })
    };

    try {
      if (scriptUrl) {
        const postData = new URLSearchParams();
        Object.entries(payload).forEach(([key, val]) => {
          postData.append(key, val ?? '');
        });

        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          body: postData
        });
      }
      setSubmittedInfo(currentSub);
      setSubmitted(true);
      if (onNotify) {
        onNotify('DUDI đã nhận website và sẽ liên hệ để xác nhận mục tiêu trước khi audit.', 'success');
      }
    } catch (err) {
      console.error('Error submitting form to Google Script:', err);
      setSubmittedInfo(currentSub);
      setSubmitted(true);
      if (onNotify) {
        onNotify('DUDI đã nhận website và sẽ liên hệ sớm nhất!', 'success');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="s11-form" className="section-wrapper bg-white form-section-wrapper">
      <div className="container">
        <div className="form-banner-card reveal-scale">
          <div className="form-left-wrapper">
            
            {submitted ? (
              /* BẢNG THÔNG BÁO GỬI THÀNH CÔNG */
              <div className="red-form-card success-card-container">
                <div className="success-icon-wrap">
                  <div className="success-icon-circle">
                    <CheckCircle2 size={42} color="#FFFFFF" />
                  </div>
                </div>

                <div className="success-header-wrap">
                  <span className="success-badge-id">Mã tiếp nhận: #{submittedInfo.leadId || 'DUDI-SEO'}</span>
                  <h3 className="success-title">Đã Gửi Yêu Cầu Thành Công! 🎉</h3>
                  <p className="success-message">
                    Cảm ơn <strong>{submittedInfo.fullName}</strong>! DUDI đã tiếp nhận website <strong style={{ color: '#FEF08A' }}>{submittedInfo.website}</strong> và thông tin mục tiêu SEO của bạn.
                  </p>
                </div>

                {/* Summary Info Box */}
                <div className="success-summary-box">
                  <div className="summary-row">
                    <span>Số điện thoại / Zalo:</span>
                    <strong>{submittedInfo.phone}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Thời gian phản hồi:</span>
                    <strong style={{ color: '#4ADE80' }}>Trong vòng 15 - 30 phút</strong>
                  </div>
                  <div className="summary-row">
                    <span>Đơn vị đối soát:</span>
                    <strong>Chuyên gia SEO DUDI</strong>
                  </div>
                </div>

                <div className="success-btn-group">
                  <a
                    href="https://zalo.me/0909163821"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-zalo-direct"
                  >
                    <MessageSquare size={16} />
                    <span>Nhắn Zalo Tư Vấn Ngay</span>
                  </a>

                  <button onClick={handleReset} className="btn btn-form-reset">
                    <RotateCcw size={14} />
                    <span>Gửi lại website khác</span>
                  </button>
                </div>
              </div>
            ) : (
              /* FORM NHẬP LIỆU GỐC */
              <div className="red-form-card">
                <h2 className="form-card-title">
                  Gửi website để nhận đánh giá <span className="title-accent-badge">SEO</span>
                </h2>
                <p className="form-card-sub">
                  DUDI sẽ liên hệ trực tiếp để xác nhận mục tiêu và gửi bản phân tích kỹ thuật chi tiết.
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-grid">
                    {/* Website */}
                    <div className="form-group col-span-2">
                      <label htmlFor="input-website" className="form-label">
                        Website (Bắt buộc) <span style={{ color: '#FEF08A' }}>*</span>
                      </label>
                      <input
                        id="input-website"
                        type="url"
                        placeholder="https://example.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className={`form-input ${errors.website ? 'is-invalid' : ''}`}
                      />
                      {errors.website && <span className="error-text">{errors.website}</span>}
                    </div>

                    {/* Họ và tên */}
                    <div className="form-group">
                      <label htmlFor="input-name" className="form-label">
                        Họ và tên <span style={{ color: '#FEF08A' }}>*</span>
                      </label>
                      <input
                        id="input-name"
                        type="text"
                        placeholder="Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`form-input ${errors.fullName ? 'is-invalid' : ''}`}
                      />
                      {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                    </div>

                    {/* Số điện thoại / Zalo */}
                    <div className="form-group">
                      <label htmlFor="input-phone" className="form-label">
                        Số điện thoại / Zalo <span style={{ color: '#FEF08A' }}>*</span>
                      </label>
                      <input
                        id="input-phone"
                        type="tel"
                        placeholder="0909 163 821"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`form-input ${errors.phone ? 'is-invalid' : ''}`}
                      />
                      {errors.phone && <span className="error-text">{errors.phone}</span>}
                    </div>

                    {/* Ngành nghề */}
                    <div className="form-group">
                      <label htmlFor="input-industry" className="form-label">
                        Ngành nghề / Dịch vụ chính <span style={{ color: '#FEF08A' }}>*</span>
                      </label>
                      <input
                        id="input-industry"
                        type="text"
                        placeholder="Ví dụ: Mỹ phẩm, Luật, Xây dựng..."
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className={`form-input ${errors.industry ? 'is-invalid' : ''}`}
                      />
                      {errors.industry && <span className="error-text">{errors.industry}</span>}
                    </div>

                    {/* Địa bàn */}
                    <div className="form-group">
                      <label htmlFor="input-location" className="form-label">
                        Địa bàn mục tiêu
                      </label>
                      <input
                        id="input-location"
                        type="text"
                        placeholder="Toàn quốc hoặc TP.HCM, Hà Nội..."
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    {/* Mục tiêu SEO */}
                    <div className="form-group col-span-2">
                      <label className="form-label">
                        Mục tiêu SEO (Chọn các mục phù hợp) <span style={{ color: '#FEF08A' }}>*</span>
                      </label>
                      <div className="goals-options-grid">
                        {goalOptions.map((goal) => {
                          const isSelected = formData.goals.includes(goal);
                          return (
                            <label
                              key={goal}
                              className={`goal-checkbox-label ${isSelected ? 'active' : ''}`}
                            >
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => handleGoalToggle(goal)}
                                style={{ display: 'none' }}
                              />
                              <span>{goal}</span>
                            </label>
                          );
                        })}
                      </div>
                      {errors.goals && <span className="error-text">{errors.goals}</span>}
                    </div>

                    {/* Ngân sách */}
                    <div className="form-group col-span-2">
                      <label htmlFor="select-budget" className="form-label">
                        Ngân sách dự kiến / tháng (Không bắt buộc)
                      </label>
                      <select
                        id="select-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="form-input form-select"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} style={{ color: '#0F172A' }}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Mô tả */}
                    <div className="form-group col-span-2">
                      <label htmlFor="input-desc" className="form-label">
                        Mô tả nhu cầu / Tình trạng website hiện tại <span style={{ color: '#FEF08A' }}>*</span>
                      </label>
                      <textarea
                        id="input-desc"
                        rows={3}
                        placeholder="Ví dụ: Web mới làm chưa có traffic, từ khóa tụt hạng, cần lên top ngành..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className={`form-input form-textarea ${errors.description ? 'is-invalid' : ''}`}
                      />
                      {errors.description && <span className="error-text">{errors.description}</span>}
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn btn-submit-white" disabled={isSubmitting}>
                      <span>{isSubmitting ? 'Đang gửi yêu cầu...' : 'Gửi website để nhận đánh giá SEO'}</span>
                      <Send size={15} className={isSubmitting ? 'animate-spin' : ''} />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .form-section-wrapper {
          background-color: #FFFFFF !important;
          padding-top: 50px !important;
          padding-bottom: 50px !important;
          position: relative;
        }

        .form-banner-card {
          position: relative;
          background-image: url('/form-bg.webp');
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
          border-radius: 28px;
          padding: 0 !important;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.06);
          overflow: hidden;
          max-width: 1200px;
          min-height: 580px;
          margin: 0 auto;
          display: flex;
          align-items: stretch;
        }

        .form-left-wrapper {
          max-width: 580px;
          width: 100%;
          position: relative;
          z-index: 2;
          display: flex;
        }

        /* Red Theme Form Card */
        .red-form-card {
          width: 100%;
          background: linear-gradient(145deg, rgba(198, 40, 40, 0.98) 0%, rgba(183, 28, 28, 0.98) 45%, rgba(142, 0, 0, 0.99) 100%);
          border-radius: 0;
          padding: 32px 36px;
          box-shadow: 6px 0 30px rgba(0, 0, 0, 0.18);
          color: #FFFFFF;
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-card-title {
          font-family: 'Chakra Petch', 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.2rem, 1.8vw, 1.45rem);
          font-weight: 800;
          letter-spacing: 0.02em;
          color: #FFFFFF;
          margin-bottom: 4px;
          line-height: 1.25;
        }

        .title-accent-badge {
          background: #FFFFFF;
          color: #B71C1C;
          padding: 2px 8px;
          border-radius: 6px;
          font-weight: 900;
          font-size: 0.9em;
          display: inline-block;
          margin-left: 4px;
        }

        .form-card-sub {
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.88);
          margin-bottom: 14px;
          line-height: 1.4;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px 12px;
        }

        @media (max-width: 560px) {
          .form-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }

        .col-span-2 {
          grid-column: 1 / -1;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .form-label {
          font-size: 0.76rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0px;
        }

        .form-input {
          width: 100%;
          padding: 7px 11px;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.35);
          background: rgba(255, 255, 255, 0.96);
          color: #0F172A;
          font-size: 0.82rem;
          transition: all 0.2s ease;
          outline: none;
          box-sizing: border-box;
        }

        .form-input:focus {
          background: #FFFFFF;
          border-color: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.35);
        }

        .form-input.is-invalid {
          border-color: #FCA5A5;
          background: #FFF5F5;
        }

        .form-select {
          cursor: pointer;
        }

        .error-text {
          font-size: 0.72rem;
          color: #FEE2E2;
          font-weight: 600;
          margin-top: 1px;
        }

        .goals-options-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
          margin-top: 2px;
        }

        @media (max-width: 560px) {
          .goals-options-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .goal-checkbox-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 5px 8px;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: var(--radius-md);
          cursor: pointer;
          font-size: 0.76rem;
          font-weight: 600;
          color: #FFFFFF;
          transition: all 0.2s ease;
        }

        .goal-checkbox-label:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        .goal-checkbox-label.active {
          background: #FFFFFF;
          border-color: #FFFFFF;
          color: #B71C1C;
          font-weight: 700;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        .form-actions {
          margin-top: 14px;
          display: flex;
          justify-content: center;
        }

        .btn-submit-white {
          background: #FFFFFF;
          color: #B71C1C;
          font-weight: 800;
          font-size: 0.88rem;
          padding: 10px 24px;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .btn-submit-white:hover {
          background: #FFF5F5;
          color: #9A0007;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
        }

        /* Success Card Styles */
        .success-card-container {
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
        }

        .success-icon-wrap {
          display: flex;
          justify-content: center;
        }

        .success-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.1);
        }

        .success-badge-id {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.18);
          color: #FFFFFF;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .success-title {
          font-size: clamp(1.2rem, 1.6vw, 1.5rem);
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 6px;
        }

        .success-message {
          font-size: 0.86rem;
          color: rgba(255, 255, 255, 0.92);
          max-width: 440px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .success-summary-box {
          width: 100%;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          padding: 12px 16px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          flex-direction: column;
          gap: 6px;
          text-align: left;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.85);
        }

        .summary-row strong {
          color: #FFFFFF;
        }

        .success-btn-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 4px;
        }

        .btn-zalo-direct {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: var(--radius-full);
          background: #0068FF;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.88rem;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(0, 104, 255, 0.4);
          transition: all 0.2s ease;
        }

        .btn-zalo-direct:hover {
          background: #0056D2;
          transform: translateY(-1px);
        }

        .btn-form-reset {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: #FFFFFF;
          color: #B71C1C;
          font-weight: 700;
          font-size: 0.82rem;
          padding: 8px 18px;
          border-radius: var(--radius-full);
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-form-reset:hover {
          background: #FFF5F5;
        }

        @media (max-width: 900px) {
          .form-banner-card {
            background-position: right 30%;
            padding: 0 !important;
            border-radius: 20px;
            flex-direction: column;
          }
          .form-left-wrapper {
            max-width: 100%;
          }
          .red-form-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  );
}
