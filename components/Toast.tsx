import React, { useEffect } from 'react';

export interface ToastMessage {
  id: string;
  type: 'info' | 'success' | 'warning' | 'terminal';
  message: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({ toasts, onClose }) => {
  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        onClose(toasts[0].id);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toasts, onClose]);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[3000] flex flex-col gap-3 max-w-md w-full px-4 pointer-events-none">
      {toasts.map((toast) => {
        const getBorderColor = () => {
          switch (toast.type) {
            case 'success': return 'border-[var(--accent-yellow)] text-[var(--accent-yellow)]';
            case 'terminal': return 'border-[var(--accent-cyan)] text-[var(--accent-cyan)]';
            case 'warning': return 'border-[var(--accent-pink)] text-[var(--accent-pink)]';
            default: return 'border-[var(--accent-cyan)] text-[var(--accent-cyan)]';
          }
        };

        const getIcon = () => {
          switch (toast.type) {
            case 'success': return 'fa-check-circle';
            case 'terminal': return 'fa-terminal';
            case 'warning': return 'fa-exclamation-triangle';
            default: return 'fa-info-circle';
          }
        };

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto bg-[var(--bg-secondary)] border-2 ${getBorderColor()} p-4 clip-corner shadow-[0_0_20px_rgba(0,243,255,0.2)] flex items-center justify-between gap-3 animate-pulse-once backdrop-blur-md`}
          >
            <div className="flex items-center gap-3">
              <i className={`fas ${getIcon()} text-lg`}></i>
              <div className="font-mono text-sm tracking-wide text-[var(--text-primary)]">
                <span className="text-xs uppercase opacity-75 block font-bold">// SYSTEM_NOTIFICATION</span>
                {toast.message}
              </div>
            </div>
            <button
              onClick={() => onClose(toast.id)}
              className="text-[var(--text-muted)] hover:text-white transition-colors p-1"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
