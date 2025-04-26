// 4. Form Validation:
// Ensure that the Submit Button doesn’t allow to submit forms until all the required fields are filled.
// Test the form validation by attempting to submit the task with missing
// required fields and verifying that the form cannot be submitted until all fields are completed.


import { test, expect } from '@playwright/test';
import { date, employeeView, login, expectSubmitDisabled, logSubmitDisabled } from '../ui/global.js';
test('Form Validation', async ({ page }) => {
    page = await login(page);
    page = await employeeView(page);
    await page.getByRole('button', { name: 'Add Task' }).click();
// Select Super Category
    await page.getByRole('combobox', { name: 'Select Super Category' }).click();
    await page.getByRole('option', { name: 'Customer Support Services' }).click();
    await expectSubmitDisabled(page);
    logSubmitDisabled('Super Category');

// Select Sub Category
    await page.getByRole('combobox', { name: 'Select Sub Category' }).click();
    await page.getByRole('option', { name: 'Customer Feedback and Refund Queries' }).click();
    await expectSubmitDisabled(page);
    logSubmitDisabled('Sub Category');
// Select Portals
    await page.getByRole('combobox', { name: 'Select Portals' }).click();
    await page.getByRole('option', { name: 'Shopify' }).click();
    await expectSubmitDisabled(page);
    logSubmitDisabled('Portals');
// Select Products
    await page.getByRole('combobox', { name: 'Select Products' }).click();
    await page.getByRole('option').first().click();
    await expectSubmitDisabled(page);
    logSubmitDisabled('Products');
// Enter Task Name
    await page.getByRole('textbox', { name: 'Select Task Name' }).fill('QA Task by Prashant');
    await expectSubmitDisabled(page);
    logSubmitDisabled('Task Name');
// Select Assignee
    await page.getByRole('combobox', { name: 'Select Assignee' }).click();
    await page.getByRole('option', { name: 'FB Test User' }).click();
    await expectSubmitDisabled(page);
    logSubmitDisabled('Assignee');
// Select Reviewers
    await page.getByRole('combobox', { name: 'Select Reviewers' }).click();
    await page.getByRole('option', { name: 'FB Test User' }).click();
    await expectSubmitDisabled(page);
    logSubmitDisabled('Reviewers');
// Set Task Priority
    await page.getByRole('combobox', { name: 'Select Priority' }).click();
    await page.getByRole('option', { name: 'Medium' }).click();
    await expectSubmitDisabled(page);
    logSubmitDisabled('Task Priority');

// Choose Due Date
    page = await date(page);
    await expectSubmitDisabled(page);
    logSubmitDisabled('Due Date');
      
// Fill Task Description
    await page.locator('xpath=/html/body/div[1]/div[1]/div[2]/div/div/div/div/form/div[5]/div/div/div/div/div[2]/div[1]').click();
    await page.keyboard.type('This is a test task for QA automation.');
    await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();
    console.log('Submit button is enabled as expected.(Task Description)');
    
// Submit the Task
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('button', { name: 'Yes, create it!' }).click();
// Verify the Created Task in Task List
    const taskLocator = page.locator('text=QA Task by Prashant');
    await expect(taskLocator.first()).toBeVisible();
    console.log('Task created successfully and is visible in the Task List.');
});