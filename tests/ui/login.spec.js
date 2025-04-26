// 1. Login Test:
// Open the login page: https://easecommerce.in/app/login.
// Enter the following credentials:
// § Username: demouser@easecommerce.in
// § Password: cE7iQPP^
// Click the Login button.
// Verify that the user is redirected to the dashboard or home page.
import { test, expect } from '@playwright/test';

test('Login Test - EaseCommerce', async ({ page }) => {
    await page.goto('https://easecommerce.in/app/login');
    await page.fill('xpath=/html/body/div[1]/div[1]/div/div[2]/div/div[2]/div/div/input', 'demouser@easecommerce.in');
    await page.fill('input[name="password"]', 'cE7iQPP^');
    await page.click('button:has-text("Login")');
    await page.waitForURL(new RegExp('.*app/admin/master/org.*'));
    await expect(page).toHaveURL(new RegExp('.*app/admin/master/org.*'));
});
