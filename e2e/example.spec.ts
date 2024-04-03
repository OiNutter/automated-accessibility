import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const URL = 'http://localhost:5173/'

test('has title', async ({ page }) => {
  await page.goto(URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Vite \+ React \+ TS/);
});

test('is accessible', async ({ page }, testInfo) => {
  await page.goto(URL);

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  await testInfo.attach('accessibility-scan-results', {
    body: JSON.stringify(accessibilityScanResults, null, 2),
    contentType: 'application/json'
  });
  
  expect(accessibilityScanResults.violations).toEqual([]);
});
