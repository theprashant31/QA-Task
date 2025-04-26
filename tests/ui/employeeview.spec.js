// 2. Switch to Employee View:
// After logging in, click the triple dots in the top right corner and select the Employee View option.
// Verify that the user is redirected to the employee section and the Task Section opens by default.
import { test, expect } from '@playwright/test';
import { login } from '../ui/global.js';
test('Employee View', async ({ page }) => {
    page = await login(page);
    await page.locator('xpath=/html/body/div[1]/div[1]/div[2]/div/header/div[2]/div/button').click();
    await page.getByText('Switch to Employee').click();
    await expect(page).toHaveURL(new RegExp('/employee/task-management/tasks'));

});