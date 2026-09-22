import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  timeout: 90000,
  use: {
    baseURL: 'http://127.0.0.1:3100',
    browserName: 'chromium',
    channel: 'msedge',
    headless: true,
  },
  reporter: [['list'], ['html', { open: 'never' }]],
  webServer: {
    command: 'npm run start -- --port 3100',
    url: 'http://127.0.0.1:3100',
    reuseExistingServer: !process.env.CI,
    timeout: 90000,
  },
});
