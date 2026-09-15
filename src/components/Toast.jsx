import React from 'react';
import { CheckCircle, AlertCircle, Copy } from 'lucide-react';

export default function Toast({ message, type = 'info', isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className={`toast-notification ${isVisible ? 'active' : ''}`}>
      {type === 'success' && <CheckCircle size={18} color="#10B981" />}
      {type === 'copy' && <Copy size={18} color="#38BDF8" />}
      {type === 'error' && <AlertCircle size={18} color="#EF4444" />}
      <span>{message}</span>
    </div>
  );
}
