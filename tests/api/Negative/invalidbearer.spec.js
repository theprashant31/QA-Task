//Test with an invalid token to check if the API correctly responds with a 401Unauthorized status.

import { test, expect } from '@playwright/test';
test('Test with an invalid token to check if the API correctly responds with a 401Unauthorized status', async ({ request }) => {
    const response = await request.get('https://easecommerce.in/api/v2/manage/warehouse/master/list?page=1&limit=10&offset=0',
        {
        headers: {
        Authorization: 'Bearer invalid_token_123',
        },
        });
        expect(response.status()).toBe(401);
    });