'use client';

import { useRef, useState } from 'react';
import { Check, Copy, Gift, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const GIFT_CODE = 'THIENMADAO';
const DOG_TAUNTS = [
  'Bắt lấy',
  'Haha',
  'Đố anh bắt được em',
  'Tuổi gì',
  'Ta là hệ thống số 1',
] as const;

export function FlyingGiftDog() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [taps, setTaps] = useState(0);
  const [taunt, setTaunt] = useState<(typeof DOG_TAUNTS)[number]>('Bắt lấy');
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null,
  );
  const requiredTaps = useRef<number | null>(null);

  function catchDog() {
    if (requiredTaps.current === null) {
      requiredTaps.current = Math.floor(Math.random() * 6) + 5;
    }

    const nextTap = taps + 1;
    if (nextTap >= requiredTaps.current) {
      setOpen(true);
      return;
    }

    setTaps(nextTap);
    setPosition({ x: 6 + Math.random() * 78, y: 8 + Math.random() * 70 });
    const nextTaunts = DOG_TAUNTS.filter((item) => item !== taunt);
    setTaunt(nextTaunts[Math.floor(Math.random() * nextTaunts.length)]);
  }

  async function copyGiftCode() {
    await navigator.clipboard.writeText(GIFT_CODE);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <>
      <button
        type="button"
        className={`gift-dog-flight ${position ? 'is-relocated' : ''} ${open ? 'is-paused' : ''}`}
        style={
          position
            ? { left: `${position.x}vw`, top: `${position.y}vh` }
            : undefined
        }
        onClick={catchDog}
        aria-label={`Bắt Cẩu Hệ Thống để nhận giftcode${taps ? `, đã chạm ${taps} lần` : ''}`}
      >
        <span className="gift-dog-frame gift-dog-frame-down" aria-hidden="true">
          <img src="/images/cau-he-thong-spritesheet.png" alt="" />
        </span>
        <span className="gift-dog-frame gift-dog-frame-up" aria-hidden="true">
          <img src="/images/cau-he-thong-spritesheet.png" alt="" />
        </span>
        <span className="gift-dog-hint" aria-live="polite">
          {taunt}
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="gift-dialog overflow-hidden border-[#c89b49]/30 bg-[#fff9ea] p-0 sm:max-w-md">
          <div className="gift-dialog-top px-6 pb-6 pt-8 text-center">
            <span className="mx-auto grid size-14 place-items-center rounded-full bg-[#b84b3d] text-white shadow-lg shadow-[#b84b3d]/25">
              <Gift className="size-7" />
            </span>
            <DialogHeader className="mt-5 text-center">
              <DialogTitle className="font-serif text-3xl font-semibold text-[#29443a]">
                Cẩu Hệ Thống đã bị bắt!
              </DialogTitle>
              <DialogDescription className="mx-auto mt-2 max-w-xs leading-6 text-[#65766e]">
                Chúc mừng đạo hữu nhận được giftcode bí mật từ Cẩu Hệ Thống.
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className="border-t border-[#b7924f]/20 bg-[#f2e8cf] px-6 py-6">
            <p className="text-center text-[10px] font-semibold uppercase tracking-[.3em] text-[#9f493c]">
              Giftcode của bạn
            </p>
            <button
              type="button"
              onClick={copyGiftCode}
              className="mt-3 flex w-full items-center justify-between rounded-xl border border-dashed border-[#af8242]/45 bg-[#fffaf0] px-4 py-3.5 text-left transition hover:border-[#aa493c]"
              aria-label="Sao chép giftcode THIENMADAO"
            >
              <strong className="font-mono text-lg tracking-[.16em] text-[#29443a]">
                {GIFT_CODE}
              </strong>
              {copied ? (
                <Check className="size-5 text-[#3a765c]" />
              ) : (
                <Copy className="size-5 text-[#aa493c]" />
              )}
            </button>
            <Button
              onClick={copyGiftCode}
              className="mt-3 h-11 w-full rounded-xl bg-[#ad483a] text-white hover:bg-[#933b31]"
            >
              {copied ? 'Đã sao chép!' : 'Sao chép giftcode'}
              <Sparkles className="size-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
