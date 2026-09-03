import type { Metadata } from 'next';
import { Cormorant_Garamond, Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});
const sans = Be_Vietnam_Pro({
  variable: '--font-sans',
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Thiên Ma Đạo — Tiên ma do tâm',
  description:
    'Chọn tu tiên hoặc tu ma, trùng sinh vô hạn và chinh phục 18 cảnh giới trong Thiên Ma Đạo.',
  openGraph: {
    title: 'Thiên Ma Đạo — Tiên ma do tâm',
    description:
      'Chọn tu tiên hoặc tu ma, trùng sinh vô hạn và chinh phục 18 cảnh giới.',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Thiên Ma Đạo — Tiên ma do tâm',
    description:
      'Chọn tu tiên hoặc tu ma, trùng sinh vô hạn và chinh phục 18 cảnh giới.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
