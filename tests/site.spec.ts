import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { services } from '../src/data/services';
import { doctors } from '../src/data/doctors';
const routes = [
  '/',
  '/services/',
  '/doctors/',
  '/about/',
  '/contact/',
  '/book-appointment/',
  '/reviews/',
  '/results/',
  '/blog/',
  '/locations/panaiyur/',
  '/privacy/',
  '/terms/',
  '/medical-disclaimer/',
  ...services.map((s) => '/services/' + s.slug + '/'),
  ...doctors.map((d) => '/doctors/' + d.slug + '/'),
];
test('All routes render unique metadata, one H1, canonical and parseable JSON-LD', async ({
  page,
}) => {
  const titles = new Set<string>();
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator('h1'), route).toHaveCount(1);
    const title = await page.title();
    expect(titles.has(title), title).toBe(false);
    titles.add(title);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.{30,}/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://metadental.in' + route,
    );
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(schemas.length).toBeGreaterThan(0);
    for (const raw of schemas) {
      const schema = JSON.parse(raw);
      expect(schema['@context']).toBe('https://schema.org');
      expect(schema.aggregateRating).toBeUndefined();
    }
  }
});
test('Internal links resolve and images have descriptions', async ({ page, request }) => {
  const links = new Set<string>();
  for (const route of routes) {
    await page.goto(route);
    for (const href of await page
      .locator('a[href^="/"]')
      .evaluateAll((els) => els.map((el) => el.getAttribute('href')!)))
      links.add(href.split('#')[0]);
    await expect(page.locator('img:not([alt])')).toHaveCount(0);
  }
  for (const href of links) {
    const response = await request.get(href);
    expect(response.status(), href).toBe(200);
  }
});
test('Booking URLs are clinic-specific and conversion clicks are recorded without personal data', async ({
  page,
}) => {
  await page.goto('/book-appointment/');
  const book = page.locator('main a[data-event="myslothub_click"]');
  await expect(book).toHaveAttribute('href', 'https://www.myslothub.com/metadental');
  await book.evaluate((el) => el.addEventListener('click', (e) => e.preventDefault()));
  await book.click();
  const events = await page.evaluate(() => window.dataLayer);
  expect(events).toContainEqual({ event: 'myslothub_click', link_location: 'booking-page' });
});
test('Brand logo, Instagram and clinic media are wired to the approved sources', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.locator('header img[src="/brand/meta-dental-logo.svg"]')).toHaveCount(1);
  await expect(page.locator('footer img[src="/brand/meta-dental-logo.svg"]')).toHaveCount(1);
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
    'href',
    '/brand/meta-dental-logo.svg',
  );
  await expect(page.locator('footer a[aria-label="META DENTAL on Instagram"]')).toHaveAttribute(
    'href',
    'https://www.instagram.com/metadentalecr/',
  );
  await page.goto('/results/');
  await expect(page.locator('.result-case')).toHaveCount(3);
  await expect(page.locator('.result-case img')).toHaveCount(6);
  await page.goto('/services/dental-implants/');
  await expect(page.locator('.clinical-care-image img')).toBeVisible();
  await expect(page.locator('.doctor-callout-image')).toBeVisible();
});
test('Desktop and mobile accessibility, responsive layout and assets', async ({ page }) => {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of [
      '/',
      '/services/dental-implants/',
      '/doctors/dr-imran/',
      '/book-appointment/',
    ]) {
      await page.goto(route);
      await page.locator('img').evaluateAll(async (imgs) => {
        for (const img of imgs) (img as HTMLImageElement).loading = 'eager';
        await Promise.all(imgs.map((img) => (img as HTMLImageElement).decode().catch(() => {})));
      });
      const violations = (
        await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
      ).violations;
      expect(
        violations.map((v) => v.id + ': ' + v.nodes.map((n) => n.target).join(',')).join('; '),
        route + ' at ' + width,
      ).toBe('');
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
        route,
      ).toBe(true);
      for (const img of await page.locator('img').all()) {
        expect(await img.evaluate((el) => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(
          0,
        );
      }
      await page.screenshot({
        path:
          'test-results/' + (route === '/' ? 'home' : route.split('/')[1]) + '-' + width + '.png',
        fullPage: true,
      });
    }
  }
});
test('Mobile menu and questions work with keyboard', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const menu = page.locator('.mobile-menu summary');
  await menu.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  await page
    .getByRole('navigation', { name: 'Mobile navigation' })
    .getByRole('link', { name: 'Our doctors' })
    .click();
  await expect(page).toHaveURL(/doctors/);
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).not.toBeVisible();
  await page.goto('/');
  const question = page.locator('.faq-list summary').first();
  await question.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.faq-list details').first()).toHaveAttribute('open', '');
});
test('Draft articles and unknown routes return 404; staging sitemap has no URLs', async ({
  request,
}) => {
  for (const route of ['/does-not-exist/', '/services/not-real/', '/blog/aligners-vs-braces/'])
    expect((await request.get(route)).status()).toBe(404);
  expect(await (await request.get('/sitemap.xml')).text()).not.toContain('<loc>');
  expect((await request.get('/robots.txt')).status()).toBe(200);
});
