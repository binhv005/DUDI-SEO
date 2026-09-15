import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function RoadmapSection() {
  const roadmap = [
    { day: 'Ngày 1', task: 'Chốt phạm vi gói, thông điệp, dữ liệu pháp lý và kênh nhận lead', output: 'Nội dung và wireframe' },
    { day: 'Ngày 2', task: 'Thiết kế giao diện máy tính và điện thoại', output: 'Bản thiết kế để duyệt' },
    { day: 'Ngày 3', task: 'Dựng Header, Hero, đối tượng, vấn đề và đầu ra', output: 'Frontend phần một' },
    { day: 'Ngày 4', task: 'Dựng bảng giá, quy trình, case, giới hạn và FAQ', output: 'Frontend phần hai' },
    { day: 'Ngày 5', task: 'Tích hợp form, lead, tracking, SEO và schema', output: 'Bản test hoàn chỉnh' },
    { day: 'Ngày 6', task: 'Kiểm tra responsive, trình duyệt, nội dung, link, form và tốc độ', output: 'Danh sách lỗi và bản sửa' },
    { day: 'Ngày 7', task: 'Nghiệm thu, deploy, gửi lead test và bàn giao', output: 'Bản production' },
  ];

  const initialChecklist = {
    'Nội dung': [
      { text: 'Tên pháp nhân đúng', checked: true },
      { text: 'Giá và đơn vị đúng', checked: true },
      { text: 'Không dùng từ không giới hạn', checked: true },
      { text: 'Không cam kết kết quả tuyệt đối', checked: true }
    ],
    'Phạm vi': [
      { text: 'Bảng gói khớp tài liệu', checked: true },
      { text: 'Thuật ngữ có định nghĩa', checked: true },
      { text: 'Việc ngoài phạm vi được công khai', checked: true }
    ],
    'CTA và link': [
      { text: 'CTA đúng đích', checked: true },
      { text: 'Gói tự điền đúng', checked: true },
      { text: 'Zalo gọi email hoạt động', checked: true },
      { text: 'Không còn link rỗng', checked: true }
    ],
    'Form': [
      { text: 'Kiểm tra dữ liệu đúng', checked: true },
      { text: 'Không gửi trùng', checked: true },
      { text: 'Chống spam', checked: true },
      { text: 'Lead và nguồn lead được nhận', checked: true }
    ],
    'Responsive': [
      { text: '360', checked: true },
      { text: '390', checked: true },
      { text: '768', checked: true },
      { text: '1024', checked: true },
      { text: '1440', checked: true },
      { text: 'Không tràn', checked: true },
      { text: 'Nút dễ chạm', checked: true }
    ],
    'SEO và truy cập': [
      { text: 'Title meta H1', checked: true },
      { text: 'Canonical OG schema', checked: true },
      { text: 'Label focus alt contrast', checked: true },
      { text: 'FAQ có trong HTML', checked: true }
    ],
    'Kỹ thuật': [
      { text: 'HTTPS', checked: true },
      { text: 'Không lộ secret', checked: true },
      { text: 'Không lỗi 404', checked: true },
      { text: 'Không lỗi console', checked: true },
      { text: 'Event hoạt động', checked: true }
    ],
    'Bàn giao': [
      { text: 'Deploy', checked: true },
      { text: 'Lead test', checked: true },
      { text: 'Tài liệu cấu hình', checked: true },
      { text: 'Danh sách việc ngoài phạm vi', checked: true }
    ]
  };

  const [checklist, setChecklist] = useState(initialChecklist);

  const toggleCheck = (group, index) => {
    setChecklist(prev => ({
      ...prev,
      [group]: prev[group].map((item, i) => i === index ? { ...item, checked: !item.checked } : item)
    }));
  };

  return (
    <section id="s-roadmap" className="section-wrapper bg-white">
      <div className="container">
        {/* Phần 8 */}
        <div className="roadmap-block mb-12">
          <h2 className="section-title">8 Kế hoạch triển khai landing page</h2>

          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th style={{ width: '15%' }}>Mốc</th>
                  <th style={{ width: '55%' }}>Công việc</th>
                  <th style={{ width: '30%' }}>Đầu ra</th>
                </tr>
              </thead>
              <tbody>
                {roadmap.map((item, idx) => (
                  <tr key={idx}>
                    <td className="highlight-cell">
                      <span className="badge-day">{item.day}</span>
                    </td>
                    <td>{item.task}</td>
                    <td>{item.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Phần 9 */}
        <div id="s-checklist" className="checklist-block" style={{ marginTop: '48px' }}>
          <h2 className="section-title">9 Checklist nghiệm thu</h2>

          <div className="table-container">
            <table className="custom-table checklist-table">
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Nhóm</th>
                  <th>Điều kiện</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(checklist).map(([group, items]) => (
                  <tr key={group}>
                    <td className="highlight-cell">{group}</td>
                    <td>
                      <div className="checklist-items-row">
                        {items.map((it, i) => (
                          <label key={i} className={`check-pill ${it.checked ? 'is-checked' : ''}`}>
                            <input
                              type="checkbox"
                              checked={it.checked}
                              onChange={() => toggleCheck(group, i)}
                            />
                            <span className="checkbox-custom">
                              {it.checked && <Check size={12} />}
                            </span>
                            <span className="check-text">{it.text}</span>
                          </label>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>{`
        .mb-12 {
          margin-bottom: 24px;
        }

        .badge-day {
          display: inline-block;
          font-weight: 700;
          color: var(--primary);
        }

        .checklist-items-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .check-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: #F8FAFC;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          color: var(--text-muted);
          cursor: pointer;
          user-select: none;
          transition: all 0.2s ease;
        }

        .check-pill input {
          display: none;
        }

        .checkbox-custom {
          width: 16px;
          height: 16px;
          border-radius: 4px;
          border: 1.5px solid #94A3B8;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: transparent;
        }

        .check-pill.is-checked {
          background: #F0FDF4;
          border-color: #86EFAC;
          color: #166534;
          font-weight: 600;
        }

        .check-pill.is-checked .checkbox-custom {
          background: #22C55E;
          border-color: #22C55E;
        }
      `}</style>
    </section>
  );
}
