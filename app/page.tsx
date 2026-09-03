import Image from 'next/image';
import {
  Apple,
  Download,
  Menu,
  Sparkles,
  Swords,
  Mountain,
  Gem,
  Users,
  ArrowUpRight,
  ChevronDown,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { GAME_DOWNLOADS } from '@/lib/game-config';

const features = [
  {
    icon: Mountain,
    number: '01',
    title: 'Tu luyện phá cảnh',
    text: 'Từ Luyện Khí đến Độ Kiếp, mỗi lựa chọn đều định hình con đường đại đạo.',
  },
  {
    icon: Swords,
    number: '02',
    title: 'Đấu pháp tự do',
    text: 'Kết hợp công pháp, linh căn và pháp bảo để tạo nên lối chiến đấu của riêng ngươi.',
  },
  {
    icon: Users,
    number: '03',
    title: 'Khai tông lập phái',
    text: 'Chiêu mộ đồng đạo, tranh đoạt linh mạch và lưu danh giữa tam giới.',
  },
  {
    icon: Gem,
    number: '04',
    title: 'Vạn vật hữu linh',
    text: 'Săn dị thú, luyện tiên đan và thu thập kỳ trân ẩn giấu khắp cửu châu.',
  },
];

const realms = [
  'Phàm Nhân',
  'Luyện Khí',
  'Trúc Cơ',
  'Kim Đan',
  'Nguyên Anh',
  'Hóa Thần',
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="hero relative isolate flex min-h-screen flex-col">
        <Image
          src="/images/van-thien-hero.png"
          alt="Tiên nhân đứng trước cửu trọng thiên trong Vấn Thiên"
          fill
          priority
          sizes="100vw"
          className="hero-art -z-30 object-cover"
        />
        <div className="stars" aria-hidden="true" />
        <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 lg:px-10">
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="Vấn Thiên - Trang chủ"
          >
            <span className="grid size-10 place-items-center rounded-full border border-[#d8b975]/35 bg-[#0d1918]/70 font-serif text-lg text-[#e5c981] shadow-[inset_0_0_20px_#b9953c18]">
              天
            </span>
            <span className="font-serif text-xl tracking-[0.16em] text-[#f3e7c3]">
              VẤN THIÊN
            </span>
          </a>
          <nav
            className="hidden items-center gap-9 text-sm text-[#d6d0bc]/75 md:flex"
            aria-label="Điều hướng chính"
          >
            <a className="nav-link" href="#gioi-thieu">
              Thiên mệnh
            </a>
            <a className="nav-link" href="#dac-sac">
              Đặc sắc
            </a>
            <a className="nav-link" href="#the-gioi">
              Thế giới
            </a>
          </nav>
          <a
            href="#tai-game"
            className={cn(
              buttonVariants(),
              'hidden rounded-none border border-[#dfc27c]/45 bg-[#bd9443] px-6 text-[#101715] hover:bg-[#d1ab5b] md:inline-flex',
            )}
          >
            Tải game
          </a>
          <details className="relative md:hidden">
            <summary
              className="grid size-10 cursor-pointer list-none place-items-center text-[#eadcb7]"
              aria-label="Mở menu"
            >
              <Menu className="size-6" />
            </summary>
            <nav className="absolute right-0 top-12 flex w-48 flex-col border border-[#c9ae69]/20 bg-[#07110f]/95 p-3 shadow-2xl backdrop-blur">
              <a className="px-3 py-3" href="#gioi-thieu">
                Thiên mệnh
              </a>
              <a className="px-3 py-3" href="#dac-sac">
                Đặc sắc
              </a>
              <a className="px-3 py-3" href="#the-gioi">
                Thế giới
              </a>
              <a className="px-3 py-3 text-[#d4b767]" href="#tai-game">
                Tải game
              </a>
            </nav>
          </details>
        </header>
        <div
          id="top"
          className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-16 pt-14 lg:px-10"
        >
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.38em] text-[#cbb578]">
              <span className="h-px w-12 bg-[#cbb578]/70" />
              Nhất niệm nhập tiên đồ
            </div>
            <p className="mb-1 font-serif text-lg tracking-[0.5em] text-[#d8c89c]/65">
              TIÊN HIỆP NHẬP VAI
            </p>
            <h1 className="font-display text-[clamp(4rem,11vw,9.5rem)] leading-[0.82] tracking-[-0.035em] text-[#f0e6c8]">
              VẤN <span className="text-[#bda35e]">THIÊN</span>
            </h1>
            <p className="mt-8 max-w-xl border-l border-[#c6a860]/55 pl-5 text-base leading-7 text-[#d2cebf]/72 sm:text-lg">
              Một niệm phàm tâm, vạn kiếp tiên đồ. Tự viết thiên mệnh, khai tông
              lập phái và bước qua cửu trọng thiên trong thế giới tu tiên rộng
              lớn.
            </p>
            <div
              id="tai-game"
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <a
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'download-primary h-14 rounded-none px-7 text-sm uppercase tracking-[0.12em]',
                )}
                href={GAME_DOWNLOADS.android.url}
                download
              >
                <Download className="size-5" />
                Tải APK Android
              </a>
              <a
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'outline' }),
                  'h-14 rounded-none border-[#d9c58b]/35 bg-[#0a1514]/45 px-7 text-sm uppercase tracking-[0.12em] text-[#ece2c5] hover:bg-[#d9c58b]/10 hover:text-white',
                )}
                href={GAME_DOWNLOADS.ios.url}
                target="_blank"
                rel="noreferrer"
              >
                <Apple className="size-5" />
                Tham gia TestFlight
              </a>
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-[#aea994]/60">
              <Sparkles className="size-3.5 text-[#c4a75e]" />
              Phiên bản {GAME_DOWNLOADS.version} · Hoàn toàn miễn phí
            </div>
          </div>
        </div>
        <div className="mist mist-one" aria-hidden="true" />
        <div className="mist mist-two" aria-hidden="true" />
        <a
          href="#gioi-thieu"
          className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[#d6cfba]/55 sm:flex"
        >
          Khám phá
          <span className="h-10 w-px bg-gradient-to-b from-[#cdb777] to-transparent" />
        </a>
      </section>

      <section
        id="gioi-thieu"
        className="paper-texture relative border-t border-[#b99c58]/15 px-5 py-28 text-center lg:px-10"
      >
        <span className="seal mx-auto">道</span>
        <p className="mt-7 text-xs uppercase tracking-[0.42em] text-[#bda45f]">
          Thiên mệnh đã định?
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#eee3c4] sm:text-6xl">
          Không. Đạo của ngươi,
          <br />
          do chính ngươi lựa chọn.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#b8b5a9]/70">
          Từ một phàm nhân vô danh, trải qua cơ duyên và sinh tử để tìm ra đại
          đạo của riêng mình. Mỗi quyết định mở ra một nhân quả, mỗi lần đột phá
          viết tiếp một truyền kỳ.
        </p>
      </section>

      <section
        id="dac-sac"
        className="border-y border-[#b99c58]/15 bg-[#0a1513] px-5 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">Tứ phương cơ duyên</p>
              <h2 className="mt-3 font-serif text-4xl text-[#eee3c4] sm:text-6xl">
                Một thế giới, vạn con đường
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#aaa799]/65">
              Không class cố định. Không hành trình giống nhau. Chỉ có đạo tâm
              và lựa chọn của chính ngươi.
            </p>
          </div>
          <div className="mt-14 grid border-l border-t border-[#c5a85e]/20 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, number, title, text }) => (
              <article
                key={number}
                className="feature-card group min-h-72 border-b border-r border-[#c5a85e]/20 p-7"
              >
                <div className="flex items-start justify-between">
                  <Icon className="size-7 text-[#c7ab63]" strokeWidth={1.25} />
                  <span className="font-serif text-sm text-[#c7ab63]/45">
                    {number}
                  </span>
                </div>
                <h3 className="mt-20 font-serif text-2xl text-[#ede1c1]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#aaa799]/65">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="the-gioi"
        className="relative isolate min-h-[760px] overflow-hidden px-5 py-28 lg:px-10"
      >
        <Image
          src="/images/van-thien-hero.png"
          alt="Quần sơn và tiên điện giữa biển mây"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-right opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#07100f_5%,#07100fd9_42%,#07100f33),linear-gradient(0deg,#07100f_0%,transparent_40%,#07100f_100%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <p className="section-kicker">Cửu châu · Tam giới</p>
            <h2 className="mt-4 font-serif text-5xl leading-[1.05] text-[#eee3c4] sm:text-7xl">
              Phá cảnh,
              <br />
              nghịch thiên mệnh
            </h2>
            <p className="mt-6 max-w-md leading-8 text-[#bdb9aa]/70">
              Cảnh giới không chỉ là sức mạnh. Đó là thử thách đạo tâm, là ranh
              giới giữa phàm và tiên.
            </p>
          </div>
          <ol className="mt-16 grid max-w-4xl grid-cols-2 gap-px border border-[#bea35d]/20 bg-[#bea35d]/20 sm:grid-cols-3 lg:grid-cols-6">
            {realms.map((realm, i) => (
              <li key={realm} className="bg-[#081210]/85 px-4 py-6 text-center">
                <span className="block font-serif text-xs text-[#baa25e]/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mt-2 block font-serif text-lg text-[#e7dcc0]">
                  {realm}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative border-y border-[#b99c58]/20 bg-[#b59a57] px-5 py-24 text-[#0b1412] lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-9 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] opacity-65">
              Đại đạo đang chờ
            </p>
            <h2 className="mt-3 font-serif text-5xl sm:text-7xl">
              Nhập thế. Vấn thiên.
            </h2>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-14 rounded-none bg-[#0a1513] px-7 text-[#f0e4c4] hover:bg-[#142622]',
              )}
              href={GAME_DOWNLOADS.android.url}
              download
            >
              <Download />
              Tải cho Android
            </a>
            <a
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'h-14 rounded-none border-[#0a1513]/45 bg-transparent px-7 text-[#0a1513] hover:bg-[#0a1513]/10',
              )}
              href={GAME_DOWNLOADS.ios.url}
              target="_blank"
              rel="noreferrer"
            >
              <Apple />
              TestFlight <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#050b0a] px-5 py-12 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full border border-[#d8b975]/25 font-serif text-[#d7bd76]">
              天
            </span>
            <span className="font-serif tracking-[.18em] text-[#e7dcc0]">
              VẤN THIÊN
            </span>
          </div>
          <p className="text-xs text-[#8f8c80]/55">
            © 2026 Vấn Thiên. Đang trong giai đoạn thử nghiệm.
          </p>
          <a
            href="#top"
            className="flex items-center gap-2 text-xs uppercase tracking-[.2em] text-[#ba9f5a]"
          >
            Về đầu trang <ChevronDown className="size-4 rotate-180" />
          </a>
        </div>
      </footer>
    </main>
  );
}
