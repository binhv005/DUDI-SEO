import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goalOptions = ['Hiển thị', 'Traffic', 'Lead', 'Bán hàng'];
  const budgetOptions = [
    { value: '', label: '-- Chọn ngân sách (Không bắt buộc) --' },
    { value: 'Dưới 5', label: 'Dưới 5 triệu' },
    { value: '5 đến 15', label: '5 đến 15 triệu' },
    { value: 'trên 15 triệu', label: 'Trên 15 triệu' }
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
      errs.fullName = '2 đến 80 ký tự';
    }

    const phoneClean = formData.phone.replace(/[\s.-]/g, '');
    if (!phoneClean) {
      errs.phone = 'Vui lòng nhập số điện thoại hoặc Zalo';
    } else if (!/^\d{9,12}$/.test(phoneClean)) {
      errs.phone = '9 đến 12 chữ số';
    }

    if (!formData.industry.trim()) {
      errs.industry = 'Vui lòng nhập ngành nghề';
    } else if (formData.industry.trim().length < 2 || formData.industry.trim().length > 120) {
      errs.industry = '2 đến 120 ký tự';
    }

    if (formData.location && formData.location.length > 100) {
      errs.location = 'Tối đa 100 ký tự';
    }

    if (formData.goals.length === 0) {
      errs.goals = 'Hiển thị, traffic, lead hoặc bán hàng';
    } else if (!formData.primaryGoal) {
      errs.primaryGoal = 'Vui lòng chọn 1 mục tiêu ưu tiên';
    }

    if (!formData.description.trim()) {
      errs.description = 'Vui lòng nhập mô tả';
    } else if (formData.description.trim().length < 10 || formData.description.trim().length > 1000) {
      errs.description = '10 đến 1000 ký tự';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    const payload = {
      ...formData,
      goals: formData.goals.join(', '),
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
      setSubmitted(true);
      if (onNotify) {
        onNotify('DUDI đã nhận website và sẽ liên hệ để xác nhận mục tiêu trước khi audit.', 'success');
      }
    } catch (err) {
      console.error('Error submitting form to Google Script:', err);
      // Still show success if network error with no-cors or notify
      setSubmitted(true);
      if (onNotify) {
        onNotify('DUDI đã nhận website và sẽ liên hệ sớm nhất!', 'success');
      }
    } finally {
      setIsSubmitting(false);
    }
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
      packageInterest: ''
    });
    setErrors({});
  };

  return (
    <section id="s11-form" className="section-wrapper bg-white form-section-wrapper">
      <div className="container">
        <div className="form-banner-card reveal-scale">
          <div className="form-left-wrapper">
            {/* Form Interactive Card with Red Background */}
            <div className="red-form-card">
            <h2 className="form-card-title">
              Gửi website để nhận đánh giá <span className="title-accent-badge">SEO</span>
            </h2>
            <p className="form-card-sub">
              DUDI sẽ liên hệ trực tiếp để xác nhận mục tiêu và gửi bản phân tích kỹ thuật chi tiết.
            </p>

            {submitted ? (
              <div className="success-state">
                <div className="success-icon-wrap">
                  <CheckCircle size={44} color="#FFFFFF" />
                </div>
                <h3 className="success-title">Đã gửi yêu cầu thành công!</h3>
                <p className="success-message">
                  DUDI đã nhận website và sẽ liên hệ với quý khách trong thời gian sớm nhất.
                </p>
                <button onClick={handleReset} className="btn btn-form-reset">
                  Gửi lại yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-grid">
                  {/* Website */}
                  <div className="form-group col-span-2">
                    <label htmlFor="input-website" className="form-label">
                      Website (Bắt buộc)
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
                      Họ và tên (Bắt buộc)
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      placeholder="2 đến 80 ký tự"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`form-input ${errors.fullName ? 'is-invalid' : ''}`}
                    />
                    {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                  </div>

                  {/* Điện thoại hoặc Zalo */}
                  <div className="form-group">
                    <label htmlFor="input-phone" className="form-label">
                      Điện thoại / Zalo (Bắt buộc)
                    </label>
                    <input
                      id="input-phone"
                      type="tel"
                      placeholder="9 đến 12 chữ số"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`form-input ${errors.phone ? 'is-invalid' : ''}`}
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>

                  {/* Ngành nghề */}
                  <div className="form-group">
                    <label htmlFor="input-industry" className="form-label">
                      Ngành nghề (Bắt buộc)
                    </label>
                    <input
                      id="input-industry"
                      type="text"
                      placeholder="2 đến 120 ký tự"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className={`form-input ${errors.industry ? 'is-invalid' : ''}`}
                    />
                    {errors.industry && <span className="error-text">{errors.industry}</span>}
                  </div>

                  {/* Khu vực */}
                  <div className="form-group">
                    <label htmlFor="input-location" className="form-label">
                      Khu vực (Không bắt buộc)
                    </label>
                    <input
                      id="input-location"
                      type="text"
                      placeholder="Tối đa 100 ký tự"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="form-input"
                    />
                    {errors.location && <span className="error-text">{errors.location}</span>}
                  </div>

                  {/* Mục tiêu */}
                  <div className="form-group col-span-2">
                    <label className="form-label">
                      Mục tiêu (Hiển thị, Traffic, Lead, Bán hàng)
                    </label>
                    <div className="goals-options-grid">
                      {goalOptions.map((goal) => {
                        const isChecked = formData.goals.includes(goal);
                        return (
                          <label key={goal} className={`goal-checkbox-label ${isChecked ? 'active' : ''}`}>
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleGoalToggle(goal)}
                            />
                            <span>{goal}</span>
                          </label>
                        );
                      })}
                    </div>
                    {errors.goals && <span className="error-text">{errors.goals}</span>}

                    {/* Mục tiêu ưu tiên */}
                    {formData.goals.length > 0 && (
                      <div className="primary-goal-selector">
                        <span className="selector-title">Ưu tiên:</span>
                        <div className="radio-group">
                          {formData.goals.map((g) => (
                            <label key={g} className="radio-label">
                              <input
                                type="radio"
                                name="primaryGoal"
                                value={g}
                                checked={formData.primaryGoal === g}
                                onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                              />
                              <span>{g}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                    {errors.primaryGoal && <span className="error-text">{errors.primaryGoal}</span>}
                  </div>

                  {/* Ngân sách */}
                  <div className="form-group col-span-2">
                    <label htmlFor="select-budget" className="form-label">
                      Ngân sách (Không bắt buộc)
                    </label>
                    <select
                      id="select-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="form-input form-select"
                    >
                      {budgetOptions.map((b, idx) => (
                        <option key={idx} value={b.value}>
                          {b.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mô tả */}
                  <div className="form-group col-span-2">
                    <label htmlFor="input-desc" className="form-label">
                      Mô tả (Bắt buộc: 10 đến 1000 ký tự)
                    </label>
                    <textarea
                      id="input-desc"
                      rows={2}
                      placeholder="Mô tả chi tiết nhu cầu..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className={`form-input ${errors.description ? 'is-invalid' : ''}`}
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
            )}
          </div>
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
          background: linear-gradient(145deg, #C62828 0%, #B71C1C 45%, #8E0000 100%);
          border-radius: 0;
          padding: 28px 32px;
          box-shadow: 4px 0 24px rgba(0, 0, 0, 0.12);
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
          margin-bottom: 3px;
          line-height: 1.25;
        }

        .title-accent-badge {
          background: #FFFFFF;
          color: #B71C1C;
          padding: 2px 8px;
          border-radius: 6px;
          font-weight: 900;
          font-size: 0.9em;
          margin-left: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .form-card-sub {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.35;
          margin-bottom: 12px;
          white-space: nowrap;
        }

        @media (max-width: 600px) {
          .form-card-sub {
            white-space: normal;
          }
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px 12px;
        }

        @media (max-width: 560px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .form-group.col-span-2 {
            grid-column: span 1;
          }
        }

        .col-span-2 {
          grid-column: span 2;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .form-label {
          font-size: 0.76rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
        }

        .form-input {
          width: 100%;
          padding: 7px 11px;
          font-size: 0.84rem;
          font-family: inherit;
          color: #0F172A;
          background: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: var(--radius-md);
          outline: none;
          transition: all 0.2s ease;
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

        .primary-goal-selector {
          margin-top: 5px;
          padding: 5px 10px;
          background: rgba(0, 0, 0, 0.15);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .selector-title {
          font-size: 0.74rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
        }

        .radio-group {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .radio-label {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.76rem;
          font-weight: 600;
          color: #FFFFFF;
          cursor: pointer;
        }

        .form-actions {
          margin-top: 12px;
          display: flex;
          justify-content: center;
        }

        .btn-submit-white {
          background: #FFFFFF;
          color: #B71C1C;
          font-weight: 800;
          font-size: 0.88rem;
          padding: 9px 24px;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
        }

        .btn-submit-white:hover {
          background: #FFF5F5;
          color: #9A0007;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
        }

        .success-state {
          text-align: center;
          padding: 24px 16px;
        }

        .success-icon-wrap {
          margin-bottom: 8px;
        }

        .success-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 6px;
        }

        .success-message {
          font-size: 0.86rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 440px;
          margin: 0 auto 16px auto;
          line-height: 1.5;
        }

        .btn-form-reset {
          background: #FFFFFF;
          color: #B71C1C;
          font-weight: 700;
          padding: 8px 18px;
          border-radius: var(--radius-md);
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
            padding: 22px 18px;
          }
        }
      `}</style>
    </section>
  );
}
