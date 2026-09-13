'use client';

import { useState } from 'react';
import { REALM_DATA } from '@/lib/realms-data';
import { RealmPopup } from '@/components/realm-popup';

export function RealmGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <ol className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {REALM_DATA.map((realm, i) => {
          const col = i % 6;
          const row = Math.floor(i / 6);
          return (
            <li
              key={realm.name}
              className="realm-card"
              onClick={() => setSelectedIndex(i)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedIndex(i);
                }
              }}
            >
              <div
                className="realm-icon"
                style={{ backgroundPosition: `${col * 20}% ${row * 50}%` }}
                role="img"
                aria-label={`Minh họa cảnh giới ${realm.name}`}
              />
              <span className="mt-4 block text-[10px] font-semibold tracking-[.22em] text-[#ad4b3e]/60">
                CẢNH {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-1 min-h-12 font-serif text-xl font-semibold leading-tight text-black">
                {realm.name}
              </h3>
            </li>
          );
        })}
      </ol>

      <RealmPopup
        realm={selectedIndex !== null ? REALM_DATA[selectedIndex] : null}
        index={selectedIndex ?? 0}
        onClose={() => setSelectedIndex(null)}
      />
    </>
  );
}
