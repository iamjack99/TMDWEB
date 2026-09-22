/**
 * Nguồn duy nhất cho thông tin phát hành Thiên Ma Đạo.
 * Khi có backend, thay object này bằng dữ liệu từ GET /api/releases/latest
 * mà không cần đổi các component hiển thị.
 */
export const GAME_DOWNLOADS = {
  version: '0.1 Alpha',
  android: {
    platform: 'android',
    url: 'https://github.com/iamjack99/TMDWEB/releases/download/v0.1-alpha/TMD.apk',
    external: true,
  },
  ios: {
    platform: 'ios',
    url: 'https://testflight.apple.com/join/7bswvhG5',
    external: true,
  },
} as const;
