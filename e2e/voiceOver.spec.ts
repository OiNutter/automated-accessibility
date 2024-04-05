import { voiceOverTest as test } from "@guidepup/playwright";
import { expect } from "@playwright/test";

test("I can navigate the page", async ({ page, voiceOver }) => {
  test.setTimeout(3 * 60 * 1000);
  // Navigate to Guidepup GitHub page
  await page.goto("http://localhost:5173", {
    waitUntil: "load",
  });

  // Wait for page to be ready
  const header = page.locator('header[role="banner"]');
  await header.waitFor();

  // Interact with the page
  await voiceOver.navigateToWebContent();

  while ((await voiceOver.itemText()) !== "Vite + React heading level 1") {
    await voiceOver.perform(voiceOver.keyboardCommands.findNextHeading);
  }

  await voiceOver.perform(voiceOver.keyboardCommands.findNextControl);
  expect(await voiceOver.itemText()).toBe("count is 0 button");

  // Click the button
  await voiceOver.perform(
    voiceOver.keyboardCommands.performDefaultActionForItem
  );
  expect(await voiceOver.itemText()).toBe("count is 1 button");

  // Assert that the spoken phrases are as expected
  expect(JSON.stringify(await voiceOver.spokenPhraseLog())).toMatchSnapshot();
});
