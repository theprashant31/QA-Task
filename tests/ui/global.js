import { test, expect } from '@playwright/test';

export const login = async(page)=> {
    await page.goto('https://easecommerce.in/app/login');
    await page.fill('xpath=/html/body/div[1]/div[1]/div/div[2]/div/div[2]/div/div/input', 'demouser@easecommerce.in');
    await page.fill('input[name="password"]', 'cE7iQPP^');
    await page.click('button:has-text("Login")');
    await page.waitForURL(new RegExp('.*app/admin/master/org.*'));
    await expect(page).toHaveURL(new RegExp('.*app/admin/master/org.*'));
    return page;
} 
export const employeeView = async(page)=> {
    await page.locator('xpath=/html/body/div[1]/div[1]/div[2]/div/header/div[2]/div/button').click();
    await page.getByText('Switch to Employee').click();
    await expect(page).toHaveURL(new RegExp('/employee/task-management/tasks'));    
    return page;
} 
export const expectSubmitDisabled = async (page) => {
    await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();
    return page;
}
export const logSubmitDisabled = (step, page) => {
    console.log(`✅ Submit button is disabled as expected. (${step})`);
    return page;
};


export const date = async(page)=> {
const today = new Date();
const day = today.getDate().toString();

await page.getByRole('button', { name: 'Choose date' }).click();
await page.getByRole('gridcell', { name: day }).click();
return page;
}