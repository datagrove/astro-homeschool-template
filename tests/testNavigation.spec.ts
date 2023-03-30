import { test, expect } from "@playwright/test";

test("Check Theme black/white works", async ({ page }) => {
  await page.goto("http://localhost:3001/");
  await page.locator("#theme").click();
  await page.locator("#theme").click();
});

test("Check navbar links work", async ({ page }) => {
  await page.getByRole("link", { name: "Home", exact: true }).click();
  await page
    .getByRole("navigation", { name: "main" })
    .getByRole("link", { name: "Login" })
    .click();
  await page.getByRole("link", { name: "About Us" }).click();
  await page.getByRole("link", { name: "FAQS" }).click();
  await page
    .getByRole("navigation", { name: "main" })
    .getByRole("link", { name: "Classifieds" })
    .click();
  await page.getByRole("link", { name: "Logo HomeSchoolLife.com" }).click();
  await page.getByRole("link", { name: "Home", exact: true }).click();
});
