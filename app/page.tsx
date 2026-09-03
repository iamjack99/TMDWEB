import Image from 'next/image';
import {
  Apple,
  ArrowUpRight,
  CircleDot,
  ChevronDown,
  Download,
  FlaskConical,
  Gem,
  Infinity as InfinityIcon,
  Menu,
  MessageCircle,
  ShieldPlus,
  Sparkles,
  Swords,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { GAME_DOWNLOADS } from '@/lib/game-config';
import { cn } from '@/lib/utils';
import { FlyingGiftDog } from '@/components/flying-gift-dog';

const ZALO_URL = 'https://zalo.me/g/mwdtaq765';

const features = [
  {
    icon: CircleDot,
    title: 'Tiên ma tùy tâm',
    text: 'Chọn tu tiên giữ chính đạo, hoặc nhập ma phá bỏ thiên quy. Mỗi con đường mở ra công pháp và cơ duyên riêng.',
  },
  {
    icon: InfinityIcon,
    title: 'Trùng sinh vô hạn',
    text: 'Mỗi kiếp là một khởi đầu mới. Kế thừa thiên phú, sửa lại nhân quả và tiến gần hơn tới đại đạo.',
  },
  {
    icon: Swords,
    title: 'Boss thế giới',
    text: 'Cùng vạn đạo hữu chinh phạt thượng cổ ma thần, tranh đoạt kỳ trân và bí cảnh hiếm có.',
  },
  {
    icon: ShieldPlus,
    title: 'Luyện khí trang bị',
    text: 'Cường hóa, tinh luyện và khảm linh thạch để đánh thức sức mạnh ẩn sâu trong thần binh.',
  },
  {
    icon: FlaskConical,
    title: 'Đan đạo thông thần',
    text: 'Thu thập linh dược, điều khiển chân hỏa và luyện thành tiên đan giúp phá cảnh nghịch thiên.',
  },
  {
    icon: Gem,
    title: 'Vạn vật hữu linh',
    text: 'Khám phá bí cảnh, thu phục linh thú và tìm kiếm cơ duyên giữa một thế giới luôn đổi thay.',
  },
];

const realms = [
  'Luyện Khí',
  'Trúc Cơ',
  'Kết Đan',
  'Nguyên Anh',
  'Hóa Thần',
  'Luyện Hư',
  'Hợp Thể',
  'Đại Thừa',
  'Độ Kiếp',
  'Chân Tiên',
  'Địa Tiên',
  'Thiên Tiên',
  'Huyền Tiên',
  'Kim Tiên',
  'Thái Ất Kim Tiên',
  'Đại La Kim Tiên',
  'Đạo Nguyên',
  'Hỗn Nguyên',
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <FlyingGiftDog />
      <section className="hero relative isolate flex min-h-screen flex-col">
        <Image
          src="/images/thien-ma-dao-hero.png"
          alt="Tiên ma đứng giữa tiên cảnh trong Thiên Ma Đạo"
          fill
          priority
          sizes="100vw"
          className="hero-art -z-30 object-cover"
        />
        <div className="hero-wash absolute inset-0 -z-20" />
        <div className="crane-layer crane-layer-one" aria-hidden="true">
          <Image
            src="/images/crane-flock.png"
            alt=""
            fill
            sizes="70vw"
            className="object-contain"
          />
        </div>
        <div className="crane-layer crane-layer-two" aria-hidden="true">
          <Image
            src="/images/crane-flock.png"
            alt=""
            fill
            sizes="45vw"
            className="object-contain"
          />
        </div>
        <header className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 lg:px-10">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="Thiên Ma Đạo - Trang chủ"
          >
            <Image
              src="/images/thien-ma-dao-logo.png"
              alt="Thiên Ma Đạo"
              width={1402}
              height={1122}
              sizes="(min-width: 768px) 110px, 90px"
              className="h-auto w-[90px] object-contain md:w-[110px]"
            />
          </a>
          <nav
            className="hidden items-center gap-9 text-sm text-[#375047]/75 md:flex"
            aria-label="Điều hướng chính"
          >
            <a className="nav-link" href="#gioi-thieu">
              Tiên ma
            </a>
            <a className="nav-link" href="#dac-sac">
              Đặc sắc
            </a>
            <a className="nav-link" href="#canh-gioi">
              Cảnh giới
            </a>
          </nav>
          <a
            href="#tai-game"
            className={cn(
              buttonVariants(),
              'hidden rounded-full bg-[#ba4d3b] px-6 text-white shadow-lg shadow-[#ba4d3b]/15 hover:bg-[#9f3f30] md:inline-flex',
            )}
          >
            Tải game
          </a>
          <details className="relative md:hidden">
            <summary
              className="grid size-10 cursor-pointer list-none place-items-center text-[#314b42]"
              aria-label="Mở menu"
            >
              <Menu className="size-6" />
            </summary>
            <nav className="absolute right-0 top-12 flex w-48 flex-col rounded-2xl border border-[#b69a62]/25 bg-[#fffaf0]/95 p-3 shadow-xl backdrop-blur">
              <a className="px-3 py-3" href="#gioi-thieu">
                Tiên ma
              </a>
              <a className="px-3 py-3" href="#dac-sac">
                Đặc sắc
              </a>
              <a className="px-3 py-3" href="#canh-gioi">
                Cảnh giới
              </a>
              <a className="px-3 py-3 text-[#b84838]" href="#tai-game">
                Tải game
              </a>
            </nav>
          </details>
        </header>

        <div
          id="top"
          className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-20 pt-12 lg:px-10"
        >
          <div className="max-w-[720px]">
            <div className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.34em] text-[#a54135]">
              <span className="h-px w-12 bg-[#a54135]/60" />
              Tiên ma do tâm · Đạo tại bản ngã
            </div>
            <h1 className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px]">
              <Image
                src="/images/thien-ma-dao-logo.png"
                alt="Thiên Ma Đạo"
                width={1402}
                height={1122}
                priority
                sizes="(min-width: 1024px) 500px, (min-width: 640px) 420px, min(340px, 90vw)"
                className="h-auto w-full object-contain"
              />
            </h1>
            <p className="mt-7 max-w-xl border-l-2 border-[#bd8e47]/55 pl-5 text-base leading-7 text-[#39534a] sm:text-lg">
              Một niệm thành tiên, một niệm hóa ma. Trùng sinh qua vô số kiếp,
              tự chọn con đường và viết lại thiên mệnh của riêng ngươi.
            </p>
            <div
              id="tai-game"
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <a
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'hero-button-primary h-14 rounded-full px-7',
                )}
                href={GAME_DOWNLOADS.android.url}
                download
              >
                <Download className="size-5" />
                Tải APK
              </a>
              <a
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'outline' }),
                  'hero-button-light h-14 rounded-full px-7',
                )}
                href={GAME_DOWNLOADS.ios.url}
                target="_blank"
                rel="noreferrer"
              >
                <Apple className="size-5" />
                TestFlight
              </a>
              <a
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'zalo-button h-14 rounded-full px-7',
                )}
                href={ZALO_URL}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-5" />
                Chat Zalo <ArrowUpRight className="size-4" />
              </a>
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-[#536c63]">
              <Sparkles className="size-3.5 text-[#b34a3b]" />
              Phiên bản {GAME_DOWNLOADS.version} · Hoàn toàn miễn phí
            </div>
          </div>
        </div>
        <a
          href="#gioi-thieu"
          className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[#3d594f]/65 sm:flex"
        >
          Khám phá
          <span className="h-9 w-px bg-gradient-to-b from-[#9a7140] to-transparent" />
        </a>
      </section>

      <section
        id="gioi-thieu"
        className="paper-light relative px-5 py-28 text-center lg:px-10"
      >
        <span className="seal mx-auto">道</span>
        <p className="section-kicker mt-7">Nhất thể lưỡng diện</p>
        <h2 className="mx-auto mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#263f36] sm:text-6xl">
          Tu tiên giữ thiên đạo.
          <br />
          <span className="text-[#b5493a]">Tu ma phá thiên quy.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#53685f]">
          Không có con đường đúng tuyệt đối. Lựa chọn công pháp, kết giao hoặc
          đối đầu các thế lực, rồi gánh lấy nhân quả qua từng lần trùng sinh.
        </p>
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="path-card path-immortal">
            <div className="path-copy">
              <div className="path-eyebrow">
                <span>仙</span>
                <p>TIÊN TU · PHONG HỆ</p>
              </div>
              <h3>Thân pháp tựa lưu vân</h3>
              <p className="path-description">
                Thuận theo linh khí trời đất, lấy tốc độ làm kiếm, lấy thân pháp
                làm giáp. Tiên Tu bền bỉ trong giao tranh và luôn chiếm thế chủ
                động.
              </p>
              <ul className="path-traits" aria-label="Ưu điểm Tiên Tu">
                <li>
                  <span>Tốc độ</span>
                  <strong>Xuất chúng</strong>
                </li>
                <li>
                  <span>Né đòn</span>
                  <strong>Linh hoạt</strong>
                </li>
                <li>
                  <span>Sinh lực</span>
                  <strong>Dồi dào</strong>
                </li>
              </ul>
              <p className="path-role">
                Lối chơi <strong>Cơ động · Sinh tồn</strong>
              </p>
            </div>
            <div className="path-character path-character-immortal">
              <Image
                src="/images/tien-tu-character.png"
                alt="Nữ Tiên Tu với pháp khí và hồ điệp"
                fill
                sizes="(max-width: 1024px) 80vw, 36vw"
                className="object-contain object-bottom"
              />
            </div>
          </article>
          <article className="path-card path-demon">
            <div className="path-copy">
              <div className="path-eyebrow">
                <span>魔</span>
                <p>MA TU · HỎA HỆ</p>
              </div>
              <h3>Ma diễm phá càn khôn</h3>
              <p className="path-description">
                Nghịch thiên đoạt mệnh, dùng ma khí áp đảo chiến trường. Ma Tu
                tung đòn quyết liệt, quét sạch quần địch và khóa chặt mục tiêu.
              </p>
              <ul className="path-traits" aria-label="Ưu điểm Ma Tu">
                <li>
                  <span>Sát thương</span>
                  <strong>Bạo phát</strong>
                </li>
                <li>
                  <span>Diện rộng</span>
                  <strong>Áp đảo</strong>
                </li>
                <li>
                  <span>Khống chế</span>
                  <strong>Mạnh mẽ</strong>
                </li>
              </ul>
              <p className="path-role">
                Lối chơi <strong>Công phá · Kiểm soát</strong>
              </p>
            </div>
            <div className="path-character path-character-demon">
              <Image
                src="/images/ma-tu-character.png"
                alt="Nam Ma Tu điều khiển ma diễm đỏ đen"
                fill
                sizes="(max-width: 1024px) 80vw, 36vw"
                className="object-contain object-bottom"
              />
            </div>
          </article>
        </div>
      </section>

      <section
        id="dac-sac"
        className="border-y border-[#aa8c54]/20 bg-[#e7dbc1] px-5 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">Lục đại đặc sắc</p>
              <h2 className="mt-3 font-serif text-4xl text-[#263f36] sm:text-6xl">
                Mỗi kiếp, một truyền kỳ
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#586c63]">
              Từ lựa chọn đạo tâm đến từng viên đan dược, mọi hệ thống đều giúp
              bạn tạo nên một hành trình riêng.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-3xl border border-[#a98d56]/25 bg-[#f6efdf] sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }, i) => (
              <article
                key={title}
                className="feature-card group min-h-64 border-b border-r border-[#a98d56]/20 p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-full bg-[#dae5d9] text-[#43665a]">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </span>
                  <span className="font-serif text-sm text-[#a8493b]/55">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-12 font-serif text-2xl font-semibold text-[#2c463d]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#63766e]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="canh-gioi"
        className="realm-section relative px-5 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Thập bát cảnh giới</p>
            <h2 className="mt-4 font-serif text-4xl text-[#263f36] sm:text-6xl">
              Từ một hơi thở phàm trần
              <br />
              đến Hỗn Nguyên đại đạo
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#61746c]">
              Mỗi lần phá cảnh là một lần đối mặt với tâm ma, thiên kiếp và giới
              hạn của chính mình.
            </p>
          </div>
          <ol className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {realms.map((realm, i) => {
              const col = i % 6;
              const row = Math.floor(i / 6);
              return (
                <li key={realm} className="realm-card">
                  <div
                    className="realm-icon"
                    style={{ backgroundPosition: `${col * 20}% ${row * 50}%` }}
                    role="img"
                    aria-label={`Minh họa cảnh giới ${realm}`}
                  />
                  <span className="mt-4 block text-[10px] font-semibold tracking-[.22em] text-[#ad4b3e]/60">
                    CẢNH {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-1 min-h-12 font-serif text-xl font-semibold leading-tight text-[#2d463d]">
                    {realm}
                  </h3>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="cta-band px-5 py-20 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-[#944137]">
              Đại đạo đang chờ
            </p>
            <h2 className="mt-3 font-serif text-5xl text-[#273f36] sm:text-7xl">
              Nhập thế. Chọn đạo.
            </h2>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-14 rounded-full bg-[#ae4437] px-7 text-white hover:bg-[#92372d]',
              )}
              href={GAME_DOWNLOADS.android.url}
              download
            >
              <Download />
              Tải Android
            </a>
            <a
              className={cn(
                buttonVariants({ size: 'lg' }),
                'zalo-button h-14 rounded-full px-7',
              )}
              href={ZALO_URL}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle />
              Chat Zalo <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#263f36] px-5 py-12 text-[#f2ead8] lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full border border-[#eed9a4]/40 font-serif text-[#eed9a4]">
              魔
            </span>
            <span className="font-serif tracking-[.16em]">THIÊN MA ĐẠO</span>
          </div>
          <p className="text-xs text-[#e3dac5]/60">
            © 2026 Thiên Ma Đạo · Đang trong giai đoạn thử nghiệm
          </p>
          <a
            href="#top"
            className="flex items-center gap-2 text-xs uppercase tracking-[.2em] text-[#eed9a4]"
          >
            Về đầu trang <ChevronDown className="size-4 rotate-180" />
          </a>
        </div>
      </footer>
    </main>
  );
}
