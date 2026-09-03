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
  title: 'Vấn Thiên — Nhất niệm nhập tiên đồ',
  description:
    'Bước vào thế giới tu tiên Vấn Thiên. Tự viết thiên mệnh, khai tông lập phái và chinh phục cửu trọng thiên.',
  openGraph: {
    title: 'Vấn Thiên — Nhất niệm nhập tiên đồ',
    description:
      'Tự viết thiên mệnh, khai tông lập phái và chinh phục cửu trọng thiên.',
    images: [
      {
        url: '/og.png',
        width: 1792,
        height: 1024,
        alt: 'Vấn Thiên — Nhất niệm nhập tiên đồ',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vấn Thiên — Nhất niệm nhập tiên đồ',
    description:
      'Tự viết thiên mệnh, khai tông lập phái và chinh phục cửu trọng thiên.',
    images: ['/og.png'],
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
