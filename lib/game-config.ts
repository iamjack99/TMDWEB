/**
 * Nguồn duy nhất cho thông tin phát hành Thiên Ma Đạo.
 * Khi có backend, thay object này bằng dữ liệu từ GET /api/releases/latest
 * mà không cần đổi các component hiển thị.
 */
export const GAME_DOWNLOADS = {
  version: '0.1 Alpha',
  android: {
    platform: 'android',
    url: '/downloads/thien-ma-dao-latest.apk',
    external: false,
  },
  ios: {
    platform: 'ios',
    url: 'https://testflight.apple.com/',
    external: true,
  },
} as const;
