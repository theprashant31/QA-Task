// 3. Task Creation:
// In the employee section, click the Add Task button to open the task form.
// Fill in all required form fields and submit the form.
// Verify that the task is created successfully and appears in the Task List page.
import { test, expect } from '@playwright/test';
import { date, login } from '../ui/global.js';
test('ADD task', async ({ page }) => {
    page = await login(page);
    await page.locator('xpath=/html/body/div[1]/div[1]/div[2]/div/header/div[2]/div/button').click();
    await page.getByText('Switch to Employee').click();
    await expect(page).toHaveURL(new RegExp('/employee/task-management/tasks'));
    await page.getByRole('button', { name: 'Add Task' }).click();
// Select Super Category
    await page.getByRole('combobox', { name: 'Select Super Category' }).click();
    await page.getByRole('option', { name: 'Customer Support Services' }).click();
// Select Sub Category
    await page.getByRole('combobox', { name: 'Select Sub Category' }).click();
    await page.getByRole('option', { name: 'Customer Feedback and Refund Queries' }).click();
// Select Portals
    await page.getByRole('combobox', { name: 'Select Portals' }).click();
    await page.getByRole('option', { name: 'Shopify' }).click();
// Select Products
    await page.getByRole('combobox', { name: 'Select Products' }).click();
    await page.getByRole('option').first().click();
// Enter Task Name
    await page.getByRole('textbox', { name: 'Select Task Name' }).fill('QA Task by Prashant');
// Select Assignee
    await page.getByRole('combobox', { name: 'Select Assignee' }).click();
    await page.getByRole('option').first().click();
// Select Reviewers
    await page.getByRole('combobox', { name: 'Select Reviewers' }).click();
    await page.getByRole('option').first().click();
// Set Task Priority
    await page.getByRole('combobox', { name: 'Select Priority' }).click();
    await page.getByRole('option', { name: 'Medium' }).click();

    // Choose Due Date
    page = await date(page);
      
// Fill Task Description
    await page.locator('xpath=/html/body/div[1]/div[1]/div[2]/div/div/div/div/form/div[5]/div/div/div/div/div[2]/div[1]').click();
    await page.keyboard.type('This is a test task for QA automation.');
    
// Submit the Task
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('button', { name: 'Yes, create it!' }).click();
// Verify the Created Task in Task List
    const taskLocator = page.locator('text=QA Task by Prashant');
    await expect(taskLocator.first()).toBeVisible();
    console.log('Task created successfully and is visible in the Task List.');

});