// Warehouse API TEST: Use the extracted token to send a GET request to the warehouse endpoint
// (Swagger DOC - https://easecommerce.in/documentation#/Warehouse/WarehouseController_getAllWarehouseList) 
// with the query parameter group=default.
// Ensure the response contains the warehouse list in JSON format.
import { test, expect } from '@playwright/test';
import fs from 'fs';
test('Master All group api test', async ({ request }) => {
    const token = fs.readFileSync('token.txt', 'utf-8');
    const warehouseResponse = await
    request.get('https://easecommerce.in/api/v2/manage/warehouse/master/all/default?super-excluded=true', {
    headers: {
    Authorization: `Bearer ${token}`,
    },
    });
    console.log('Warehouse Response:', warehouseResponse);
    const warehouseData = await warehouseResponse.json();
    console.log('Warehouse Data:', warehouseData);
    expect(Array.isArray(warehouseData)).toBeTruthy();
    expect(warehouseData.length).toBeGreaterThan(0);
    });
