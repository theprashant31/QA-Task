//Simulate a scenario where no warehouses exist for the given group and verify that the response is handled properly (e.g., empty list or message).

import { test, expect } from '@playwright/test';
import fs from 'fs';
test('no warehouses exist for the given group and verify that the response is handled properly', async ({ request }) => {
        const token = fs.readFileSync('token.txt', 'utf-8');
        const response = await
        request.get('https://easecommerce.in/api/v2/manage/warehouse/get-empty-rack-list?page=1&limit=10&offset=0&warehouseId=cjUjfB6M5qMWK72EHJ8EhC', {
        headers: {
        Authorization: `Bearer ${token}`,
        },
        });
        const responseData = await response.json();
        console.log('Warehouse Data:', responseData);
        expect(Array.isArray(responseData?.docs)).toBeTruthy();
        expect(responseData?.docs.length === 0 || responseData?.message).toBeTruthy();       
        
    });