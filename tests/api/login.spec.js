//Command for run api folder
//npx playwright test tests/api --headed --reporter=html



//Login API Test:
// Send a POST request to the login endpoint (Swagger DOC - https://easecommerce.in/documentation#/User/UserController_login) 
// with the provided credentials: {"username": "demouser@easecommerce.in", "password": "cE7iQPP^"}.
//  Extract the "token" from the response JSON and store it for future use.
import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Login API Test', async ({ request }) => {
    const loginResponse = await request.post('https://easecommerce.in/api/login', {
    data: {
    username: 'demouser@easecommerce.in',
    password: 'cE7iQPP^',
    },
    });
    expect(loginResponse.ok()).toBeTruthy();
    const loginData = await loginResponse.json();
    console.log('Login Data:', loginData);
    const token = loginData?.token;
    expect(token).toBeTruthy();
    fs.writeFileSync('token.txt', token);
    });

