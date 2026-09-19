import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  RotateCcw, 
  Send, 
  Sparkles, 
  CheckCheck, 
  ChevronRight,
  MessageSquare,
  Search,
  TrendingUp
} from 'lucide-react';

const QUICK_SUGGESTIONS = [
  { id: 'pricing', label: '💰 Báo giá các gói dịch vụ SEO', query: 'Chi phí các gói dịch vụ SEO tại DUDI như thế nào?' },
  { id: 'process', label: '⚡ Quy trình triển khai SEO 4 giai đoạn', query: 'Quy trình triển khai dịch vụ SEO tại DUDI gồm những bước nào?' },
  { id: 'deliverables', label: '📦 Hạng mục bàn giao & Đo lường', query: 'Hàng tháng DUDI sẽ bàn giao và báo cáo những hạng mục gì?' },
  { id: 'audit', label: '🔍 Đăng ký Audit SEO website miễn phí', query: 'Tôi muốn đăng ký kiểm tra và Audit SEO website của mình' },
  { id: 'contact', label: '📞 Gặp chuyên viên SEO tư vấn', query: 'Tôi muốn gặp chuyên viên tư vấn SEO trực tiếp' }
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: `Xin chào! 👋\nTôi là Trợ lý AI Chuyên gia SEO DUDI.\nWebsite của bạn đang cần tăng trưởng traffic tự nhiên hay tối ưu thứ hạng từ khóa?`,
    time: '10:30',
    type: 'text'
  }
];

export default function AIChatModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth > 768) {
        setTimeout(() => inputRef.current?.focus(), 300);
      }
    }
  }, [messages, isTyping, isOpen]);

  // Click outside and Escape key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      const isToggleBtn = event.target.closest('[data-chat-toggle="true"]');
      if (isToggleBtn) return;

      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset conversation
  const handleReset = () => {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: `Xin chào! 👋\nTôi là Trợ lý AI Chuyên gia SEO DUDI.\nWebsite của bạn đang cần tăng trưởng traffic tự nhiên hay tối ưu thứ hạng từ khóa?`,
        time: timeStr,
        type: 'text'
      }
    ]);
  };

  // Smart Response Engine for SEO Services
  const generateBotResponse = (userText) => {
    const query = userText.toLowerCase().trim();

    if (query.includes('giá') || query.includes('chi phí') || query.includes('bao nhiêu') || query.includes('gói') || query.includes('báo giá')) {
      return {
        text: `DUDI cung cấp 3 gói dịch vụ SEO chuyên sâu, minh bạch chi phí theo tháng:\n\n` +
          `• 🎯 **Gói Cơ bản (4.000.000đ/tháng)**: Phù hợp web mới — 5-10 từ khóa, 2-4 bài viết chuẩn SEO, tối ưu Onpage kỹ thuật & GSC.\n` +
          `• ⭐ **Gói Tiêu chuẩn (12.000.000đ/tháng)**: Được chọn nhiều nhất — 10-30 từ khóa, 6-10 bài viết chuyên sâu, audit kỹ thuật, phân tích GA4 định kỳ.\n` +
          `• 🏆 **Gói Cao cấp (25.000.000đ/tháng)**: Dành cho ngành cạnh tranh cao — 30-60+ từ khóa, SEO tổng thể toàn diện, tối ưu tỷ lệ chuyển đổi (CRO).\n\n` +
          `💡 Bạn có thể bấm nút bên dưới để xem bảng so sánh tính năng chi tiết!`,
        actionType: 'pricing'
      };
    }

    if (query.includes('quy trình') || query.includes('bước') || query.includes('triển khai') || query.includes('thời gian') || query.includes('lộ trình')) {
      return {
        text: `Quy trình triển khai SEO 4 giai đoạn chuẩn mực tại DUDI:\n\n` +
          `1. **Giai đoạn 1: Audit & Nghiên cứu**: Phân tích hiện trạng website, cấu trúc từ khóa và đối thủ cạnh tranh.\n` +
          `2. **Giai đoạn 2: Tối ưu On-page & Kỹ thuật**: Tối ưu Title, Meta, Heading, Schema JSON-LD và Core Web Vitals.\n` +
          `3. **Giai đoạn 3: Content & Thúc đẩy Index**: Sáng tạo nội dung chất lượng cao, chuẩn E-E-A-T và tăng trưởng backlink tự nhiên.\n` +
          `4. **Giai đoạn 4: Đo lường & Tối ưu chuyển đổi**: Theo dõi thứ hạng Google Search Console, GA4 và tối ưu form lead.`,
        actionType: 'process'
      };
    }

    if (query.includes('bàn giao') || query.includes('hạng mục') || query.includes('nhận được') || query.includes('báo cáo') || query.includes('đầu ra')) {
      return {
        text: `Hàng tháng DUDI bàn giao minh bạch đến quý khách:\n\n` +
          `✅ Bảng theo dõi thứ hạng từ khóa (Ranking Tracker) cập nhật liên tục\n` +
          `✅ Báo cáo chi tiết lượng truy cập (Traffic, Clicks, Impressions từ Google Search Console & GA4)\n` +
          `✅ Danh sách bài viết Content chuẩn SEO đã đăng tải kèm tài liệu bàn giao\n` +
          `✅ Đề xuất cải tiến kỹ thuật cho tháng tiếp theo`,
        actionType: 'deliverables'
      };
    }

    if (query.includes('kiểm tra') || query.includes('audit') || query.includes('chẩn đoán') || query.includes('từ khóa') || query.includes('thứ hạng')) {
      return {
        text: `DUDI cung cấp chương trình **Audit SEO Website Miễn Phí** trị giá 2.000.000đ:\n\n` +
          `🔍 Đánh giá sức khỏe Technical SEO (tốc độ, index, lỗi 404, robots.txt, sitemap)\n` +
          `📊 Gợi ý bộ 20 từ khóa tiềm năng có tỷ lệ chuyển đổi cao theo ngành của bạn\n\n` +
          `📝 Bạn hãy điền thông tin vào form bên dưới, chuyên gia SEO DUDI sẽ gửi báo cáo phân tích chi tiết trong vòng 2 giờ!`,
        actionType: 'audit'
      };
    }

    if (query.includes('liên hệ') || query.includes('tư vấn') || query.includes('số điện thoại') || query.includes('gặp') || query.includes('hotline') || query.includes('zalo')) {
      return {
        text: `Chuyên gia SEO DUDI luôn sẵn sàng tư vấn chiến lược tăng trưởng cho bạn:\n\n` +
          `📞 Hotline / Zalo: **0909 163 821**\n` +
          `💬 Nhắn Zalo: Bấm nút bên dưới để gửi link website cần SEO\n` +
          `🏢 Địa chỉ: 49/2 Đường 14, P. Tăng Nhơn Phú B, TP. Thủ Đức, TP.HCM`,
        actionType: 'contact'
      };
    }

    // Default response
    return {
      text: `Cảm ơn bạn đã quan tâm đến giải pháp SEO của DUDI! Chúng tôi giúp website tăng trưởng traffic bền vững và tối ưu doanh thu chuyển đổi.\n\n` +
        `Bạn muốn tìm hiểu về **Bảng giá các gói**, **Quy trình triển khai** hay cần **Đăng ký Audit SEO miễn phí**?`,
      actionType: 'general'
    };
  };

  // Send message
  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newUserMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: timeStr,
      type: 'text'
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = generateBotResponse(text);
      const botTime = new Date();
      const botTimeStr = `${String(botTime.getHours()).padStart(2, '0')}:${String(botTime.getMinutes()).padStart(2, '0')}`;

      const newBotMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReply.text,
        time: botTimeStr,
        actionType: botReply.actionType
      };

      setMessages((prev) => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      style={styles.modalOverlay}
      role="dialog"
      aria-modal="true"
      aria-label="Cửa sổ trò chuyện với Trợ lý AI SEO DUDI"
    >
      {/* Backdrop for mobile */}
      <div 
        style={styles.mobileBackdrop}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Chatbox Window */}
      <div 
        ref={modalRef}
        style={styles.chatWindow}
      >
        
        {/* 1. Header */}
        <div style={styles.header}>
          <div style={styles.headerInfo}>
            {/* Robot Mascot Avatar */}
            <div style={styles.avatarWrapper}>
              <img 
                src="/robot-mascot.webp" 
                alt="Trợ lý AI SEO DUDI" 
                style={styles.avatarImg}
              />
              <span style={styles.onlineDot} />
            </div>

            <div>
              <h3 style={styles.title}>
                <span>Trợ lý AI SEO DUDI</span>
                <Sparkles style={{ width: 14, height: 14, color: '#F59E0B' }} />
              </h3>
              <p style={styles.subtitle}>
                <span style={styles.pulseDot} />
                <span>Tăng trưởng Traffic & Top Google</span>
              </p>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <button
              onClick={handleReset}
              title="Làm mới cuộc trò chuyện"
              style={styles.iconBtn}
            >
              <RotateCcw style={{ width: 16, height: 16 }} />
            </button>
            <button
              onClick={onClose}
              title="Đóng cửa sổ chat"
              style={styles.iconBtn}
            >
              <X style={{ width: 18, height: 18 }} />
            </button>
          </div>
        </div>

        {/* 2. Messages List */}
        <div style={styles.messageList}>
          {messages.map((msg) => {
            const isBot = msg.sender === 'bot';

            return (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: isBot ? 'flex-start' : 'flex-end',
                  marginBottom: 12
                }}
              >
                <div style={{ display: 'flex', gap: 8, maxWidth: '88%', flexDirection: isBot ? 'row' : 'row-reverse' }}>
                  {isBot && (
                    <div style={styles.botIconWrapper}>
                      <img 
                        src="/robot-mascot.webp" 
                        alt="Bot" 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </div>
                  )}

                  <div>
                    {/* Message Bubble */}
                    <div
                      style={{
                        padding: '11px 15px',
                        fontSize: '13.5px',
                        lineHeight: '1.6',
                        borderRadius: '16px',
                        borderTopLeftRadius: isBot ? '4px' : '16px',
                        borderTopRightRadius: isBot ? '16px' : '4px',
                        background: isBot ? '#FFFFFF' : 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
                        color: isBot ? '#0F172A' : '#FFFFFF',
                        border: isBot ? '1px solid #E2E8F0' : 'none',
                        boxShadow: isBot ? '0 2px 8px rgba(0,0,0,0.06)' : '0 4px 14px rgba(220, 38, 38, 0.35)'
                      }}
                    >
                      <p style={{ margin: 0, whiteSpace: 'pre-line', color: isBot ? '#0F172A' : '#FFFFFF', fontWeight: isBot ? 400 : 500 }}>
                        {msg.text.split('\n').map((line, i) => {
                          const parts = line.split(/(\*\*.*?\*\*)/g);
                          return (
                            <React.Fragment key={i}>
                              {parts.map((part, pIdx) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return (
                                    <strong key={pIdx} style={{ fontWeight: 700, color: isBot ? '#0F172A' : '#FFFFFF' }}>
                                      {part.slice(2, -2)}
                                    </strong>
                                  );
                                }
                                return (
                                  <span key={pIdx} style={{ color: isBot ? '#0F172A' : '#FFFFFF' }}>
                                    {part}
                                  </span>
                                );
                              })}
                              {i < msg.text.split('\n').length - 1 && <br />}
                            </React.Fragment>
                          );
                        })}
                      </p>

                      {/* Bot Quick Actions / Shortcuts */}
                      {isBot && msg.actionType && (
                        <div style={styles.actionButtonsRow}>
                          {msg.actionType === 'pricing' && (
                            <button
                              onClick={() => scrollToSection('s06-bang-gia')}
                              style={styles.actionBtnRed}
                            >
                              <span>Xem Bảng giá 3 gói SEO</span>
                              <ChevronRight style={{ width: 14, height: 14 }} />
                            </button>
                          )}
                          {msg.actionType === 'process' && (
                            <button
                              onClick={() => scrollToSection('s07-quy-trinh')}
                              style={styles.actionBtnRed}
                            >
                              <span>Xem Quy trình 4 giai đoạn</span>
                              <ChevronRight style={{ width: 14, height: 14 }} />
                            </button>
                          )}
                          {msg.actionType === 'deliverables' && (
                            <button
                              onClick={() => scrollToSection('s05-dau-ra')}
                              style={styles.actionBtnRed}
                            >
                              <span>Hạng mục đầu ra & Báo cáo</span>
                              <ChevronRight style={{ width: 14, height: 14 }} />
                            </button>
                          )}
                          {msg.actionType === 'audit' && (
                            <button
                              onClick={() => scrollToSection('s11-form')}
                              style={styles.actionBtnGreen}
                            >
                              <Search style={{ width: 14, height: 14 }} />
                              <span>Điền Form Audit SEO</span>
                            </button>
                          )}
                          {msg.actionType === 'contact' && (
                            <>
                              <a
                                href="https://zalo.me/0909163821"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.actionBtnZalo}
                              >
                                <MessageSquare style={{ width: 14, height: 14 }} />
                                <span>Nhắn Zalo</span>
                              </a>
                              <button
                                onClick={() => scrollToSection('s11-form')}
                                style={styles.actionBtnGrey}
                              >
                                <span>Gửi yêu cầu tư vấn</span>
                              </button>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Timestamp */}
                    <div style={{
                      fontSize: '11px',
                      color: '#94A3B8',
                      marginTop: 4,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      justifyContent: isBot ? 'flex-start' : 'flex-end'
                    }}>
                      <span>{msg.time}</span>
                      {!isBot && <CheckCheck style={{ width: 14, height: 14, color: '#DC2626' }} />}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={styles.botIconWrapper}>
                <img 
                  src="/robot-mascot.webp" 
                  alt="Bot" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div style={{
                padding: '10px 14px',
                background: '#FFFFFF',
                borderRadius: '16px',
                borderTopLeftRadius: '4px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                gap: 5
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#DC2626', animation: 'bounce 1s infinite' }} />
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#DC2626', animation: 'bounce 1s infinite 0.2s' }} />
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#DC2626', animation: 'bounce 1s infinite 0.4s' }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* 3. Quick Suggestions Chips (Pure white background + Hidden scrollbar) */}
        <div style={styles.suggestionsContainer}>
          <div className="no-scrollbar" style={styles.suggestionsTrack}>
            {QUICK_SUGGESTIONS.map((chip) => (
              <button
                key={chip.id}
                onClick={() => handleSendMessage(chip.query)}
                style={styles.suggestionChip}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Footer Input Container */}
        <div style={styles.footer}>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            style={styles.inputForm}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập câu hỏi hoặc nhu cầu SEO..."
              style={styles.inputField}
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              aria-label="Gửi tin nhắn"
              style={{
                ...styles.sendBtn,
                background: inputValue.trim() ? 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)' : '#E2E8F0',
                color: inputValue.trim() ? '#FFFFFF' : '#94A3B8',
                cursor: inputValue.trim() ? 'pointer' : 'not-allowed'
              }}
            >
              <Send style={{ width: 15, height: 15 }} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

const styles = {
  modalOverlay: {
    position: 'fixed',
    bottom: 'clamp(18px, 2.5vh, 32px)',
    right: 'clamp(80px, 8vw, 100px)',
    zIndex: 10000,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    animation: 'pageFadeIn 0.2s ease'
  },
  mobileBackdrop: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(4px)',
    zIndex: -1,
    display: typeof window !== 'undefined' && window.innerWidth > 768 ? 'none' : 'block'
  },
  chatWindow: {
    width: 'min(410px, 92vw)',
    height: '520px',
    maxHeight: 'calc(100dvh - 4.5rem)',
    background: '#FFFFFF',
    borderRadius: '24px',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
    border: '1px solid #E2E8F0',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    color: '#0F172A',
    fontFamily: 'inherit'
  },
  header: {
    padding: '12px 18px',
    background: '#FFFFFF',
    borderBottom: '1px solid #F1F5F9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10
  },
  headerInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  avatarWrapper: {
    position: 'relative',
    width: '42px',
    height: '42px',
    borderRadius: '14px',
    background: '#FFF1F2',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #FFE4E6'
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  onlineDot: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 11,
    height: 11,
    background: '#10B981',
    border: '2px solid #FFFFFF',
    borderRadius: '50%'
  },
  title: {
    fontSize: '15.5px',
    fontWeight: 700,
    color: '#0F172A',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: 6
  },
  subtitle: {
    fontSize: '12px',
    color: '#64748B',
    margin: 0,
    marginTop: 2,
    display: 'flex',
    alignItems: 'center',
    gap: 6
  },
  pulseDot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: '#10B981'
  },
  iconBtn: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    background: 'transparent',
    border: 'none',
    color: '#94A3B8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  messageList: {
    flex: 1,
    overflowY: 'auto',
    padding: '16px 18px',
    background: '#F8FAFC'
  },
  botIconWrapper: {
    width: 28,
    height: 28,
    borderRadius: '10px',
    background: '#FFF1F2',
    padding: 2,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #FFE4E6',
    marginTop: 4
  },
  actionButtonsRow: {
    marginTop: 10,
    paddingTop: 8,
    borderTop: '1px solid #F1F5F9',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6
  },
  actionBtnRed: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding: '6px 10px',
    borderRadius: '8px',
    background: '#FFF1F2',
    color: '#DC2626',
    fontSize: '12px',
    fontWeight: 700,
    border: 'none',
    cursor: 'pointer'
  },
  actionBtnGreen: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding: '6px 10px',
    borderRadius: '8px',
    background: '#F0FDF4',
    color: '#16A34A',
    fontSize: '12px',
    fontWeight: 700,
    border: '1px solid #DCFCE7',
    cursor: 'pointer'
  },
  actionBtnZalo: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding: '6px 10px',
    borderRadius: '8px',
    background: '#0068FF',
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: 700,
    textDecoration: 'none'
  },
  actionBtnGrey: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding: '6px 10px',
    borderRadius: '8px',
    background: '#F1F5F9',
    color: '#334155',
    fontSize: '12px',
    fontWeight: 700,
    border: 'none',
    cursor: 'pointer'
  },
  suggestionsContainer: {
    padding: '8px 14px',
    background: '#FFFFFF',
    borderTop: '1px solid #F1F5F9'
  },
  suggestionsTrack: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    paddingBottom: 2,
    scrollbarWidth: 'none',
    msOverflowStyle: 'none'
  },
  suggestionChip: {
    fontSize: '12px',
    fontWeight: 600,
    padding: '6px 12px',
    borderRadius: '999px',
    background: '#FFFFFF',
    color: '#334155',
    border: '1px solid #E2E8F0',
    flexShrink: 0,
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
  },
  footer: {
    padding: '12px 16px',
    background: '#FFFFFF',
    borderTop: '1px solid #F1F5F9'
  },
  inputForm: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: '#F1F5F9',
    borderRadius: '999px',
    border: '1px solid #E2E8F0',
    padding: '4px 6px 4px 14px'
  },
  inputField: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontSize: '13.5px',
    color: '#0F172A'
  },
  sendBtn: {
    width: 34,
    height: 34,
    borderRadius: '50%',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s'
  }
};