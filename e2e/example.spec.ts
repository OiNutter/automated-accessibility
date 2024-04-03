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

test('is navigatable', async ({ page }) => { 
  await page.goto(URL);
  
  const header = page.locator('header[role="banner"]');
  await header.waitFor();

  await page.keyboard.press("Alt+Tab")
  console.log("FOCUSED", await page.evaluate(() => document.activeElement?.innerHTML))
  await expect(await page.getByRole("link", {name: "Vite"})).toBeFocused()

  await page.keyboard.press("Alt+Tab")
  await expect(await page.getByRole("link", {name:"React"})).toBeFocused()

  await page.keyboard.press("Alt+Tab")
  const button = await page.getByRole('button')
  await expect(button).toBeFocused()

  await page.keyboard.press("Enter")
  await expect(button).toBeFocused()
})
