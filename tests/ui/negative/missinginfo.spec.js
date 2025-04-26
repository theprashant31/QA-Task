// Test Invalid or Missing Information:
// Before submission, try submitting the form with missing required fields (e.g.,missing task name or description)
//  and verify that the submit button remains disabled.


import { test, expect } from '@playwright/test';
import { date, employeeView, login, expectSubmitDisabled, logSubmitDisabled } from '../../ui/global.js';

test('Negative Test - Submit with Missing Description', async ({ page }) => {
    page = await login(page);
    page = await employeeView(page);
    await page.getByRole('button', { name: 'Add Task' }).click();

    await page.getByRole('combobox', { name: 'Select Super Category' }).click();
    await page.getByRole('option', { name: 'Customer Support Services' }).click();
    await expectSubmitDisabled(page);
    logSubmitDisabled('Super Category');

    await page.getByRole('combobox', { name: 'Select Sub Category' }).click();
    await page.getByRole('option', { name: 'Customer Feedback and Refund Queries' }).click();
    await expectSubmitDisabled(page);
    logSubmitDisabled('Sub Category');

    await page.getByRole('combobox', { name: 'Select Portals' }).click();
    await page.getByRole('option', { name: 'Shopify' }).click();
    await expectSubmitDisabled(page);
    logSubmitDisabled('Portals');

    await page.getByRole('combobox', { name: 'Select Products' }).click();
    await page.getByRole('option').first().click();

    await expectSubmitDisabled(page);
    logSubmitDisabled('Products');

    await page.getByRole('textbox', { name: 'Select Task Name' }).fill('QA Task Negative Test');
    await expectSubmitDisabled(page);
    logSubmitDisabled('Task Name');

    await page.getByRole('combobox', { name: 'Select Assignee' }).click();
    await page.getByRole('option', { name: 'FB Test User' }).click();
    await expectSubmitDisabled(page);
    logSubmitDisabled('Assignee');

    await page.getByRole('combobox', { name: 'Select Reviewers' }).click();
    await page.getByRole('option', { name: 'FB Test User' }).click();
    await expectSubmitDisabled(page);
    logSubmitDisabled('Reviewers');

    await page.getByRole('combobox', { name: 'Select Priority' }).click();
    await page.getByRole('option', { name: 'Medium' }).click();
    await expectSubmitDisabled(page);
    logSubmitDisabled('Task Priority');

    page = await date(page);
    await expectSubmitDisabled(page);
    logSubmitDisabled('Due Date');

    await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();
    console.log('Negative test passed. Submit button is disabled when task description is missing.');
});
