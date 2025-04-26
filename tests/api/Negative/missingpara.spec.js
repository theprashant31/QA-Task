//Test with missing or incorrect query parameters, ensuring that the API handles such cases gracefully.
import { test, expect } from '@playwright/test';
import fs from 'fs';
test('Test with missing or incorrect query parameters, ensuring that the API handles such cases gracefully.', async ({ request }) => {
            const token = fs.readFileSync('token.txt', 'utf-8');
            const response = await request.get('https://easecommerce.in/api/v2/manage/warehouse/master', {
            headers: {
            Authorization: `Bearer ${token}`,
            },
            });
            expect(response.status()).toBeGreaterThanOrEqual(400);
    });