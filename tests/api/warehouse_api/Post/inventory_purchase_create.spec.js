
// Warehouse API TEST: Use the extracted token to send a GET request to the warehouse endpoint
// (Swagger DOC - https://easecommerce.in/documentation#/Warehouse/WarehouseController_getAllWarehouseList) 
// with the query parameter group=default.
// Ensure the response contains the warehouse list in JSON format.
import { test, expect } from '@playwright/test';
import fs from 'fs';
test('Inventory purchase create api test', async ({ request }) => {
    const token = fs.readFileSync('token.txt', 'utf-8');
    const warehouseResponse = await
    request.post('https://easecommerce.in/api/v2/manage/warehouse/inventory-purchase/create', {
    headers: {
    Authorization: `Bearer ${token}`,
    },
    body: {
        "invoice_date": "string",
        "invoice_number": "string",
        "warehouseId": "string",
        "remarks": "string",
        "rackType": "string",
        "rackId": "string",
        "purchaseRecords": [
          "string"
        ]
      }
    });
    console.log('Warehouse Response:', warehouseResponse);
    const warehouseData = await warehouseResponse.json();
    console.log('Warehouse Data:', warehouseData);
    expect(typeof warehouseData === 'object').toBeTruthy();
    });
