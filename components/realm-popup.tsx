'use client';

import { useCallback, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { RealmInfo } from '@/lib/realms-data';

const PHASE_COLORS: Record<string, { accent: string; glow: string; badge: string }> = {
  'ha-gioi': { accent: '#8b6914', glow: 'rgba(196, 164, 80, 0.12)', badge: '#a08030' },
  'tien-giai': { accent: '#2d8a6e', glow: 'rgba(45, 138, 110, 0.12)', badge: '#2d8a6e' },
  'dai-dao': { accent: '#9b3dcc', glow: 'rgba(155, 61, 204, 0.12)', badge: '#9b3dcc' },
};

interface RealmPopupProps {
  realm: RealmInfo | null;
  index: number;
  onClose: () => void;
}

export function RealmPopup({ realm, index, onClose }: RealmPopupProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!realm) return;
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [realm, handleKeyDown]);

  if (!realm) return null;

  const colors = PHASE_COLORS[realm.phase] ?? PHASE_COLORS['ha-gioi'];
  const realmNum = String(index + 1).padStart(2, '0');

  return (
    <div
      ref={overlayRef}
      className="realm-popup-overlay"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Chi tiết cảnh giới ${realm.name}`}
    >
      <div ref={panelRef} className="realm-popup-panel">
        {/* Decorative top border */}
        <div className="realm-popup-border-top" style={{ background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)` }} />

        {/* Close button */}
        <button className="realm-popup-close" onClick={onClose} aria-label="Đóng">
          <X className="size-5" />
        </button>

        {/* Header */}
        <div className="realm-popup-header">
          <span className="realm-popup-phase" style={{ color: colors.badge }}>
            {realm.phaseLabel}
          </span>
          <div className="realm-popup-title-row">
            <span className="realm-popup-number" style={{ color: colors.accent }}>
              {realmNum}
            </span>
            <div>
              <h3 className="realm-popup-name font-serif">{realm.name}</h3>
              <p className="realm-popup-subtitle">{realm.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="realm-popup-divider" style={{ borderColor: `${colors.accent}30` }}>
          <span style={{ color: colors.accent }}>道</span>
        </div>

        {/* Content */}
        <div className="realm-popup-body">
          {/* Bản chất */}
          <div className="realm-popup-section">
            <h4 className="realm-popup-label" style={{ color: colors.accent }}>
              <span className="realm-popup-label-icon">◈</span> Bản Chất
            </h4>
            <p>{realm.description}</p>
          </div>

          {/* Đặc điểm */}
          <div className="realm-popup-section">
            <h4 className="realm-popup-label" style={{ color: colors.accent }}>
              <span className="realm-popup-label-icon">◈</span> Đặc Điểm
            </h4>
            <p>{realm.traits}</p>
          </div>

          {/* Thần thông */}
          <div className="realm-popup-section">
            <h4 className="realm-popup-label" style={{ color: colors.accent }}>
              <span className="realm-popup-label-icon">◈</span> Thần Thông · Năng Lực
            </h4>
            <p>{realm.abilities}</p>
          </div>
        </div>

        {/* Decorative bottom */}
        <div className="realm-popup-footer">
          <span style={{ color: `${colors.accent}60` }}>── ✦ ──</span>
        </div>
      </div>
    </div>
  );
}
