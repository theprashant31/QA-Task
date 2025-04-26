# Playwright Automation Project

This project contains **UI Automation** and **API Automation** tests developed using **Playwright** in JavaScript.

---

## 📦 Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/theprashant31/QA-Task.git
cd QA-Task
```

---

### 2. Install dependencies

Make sure you have **Node.js** installed (recommended: Node.js 18+).

Install project dependencies by running:

```bash
npm install
```

This will install **Playwright** and other necessary packages.

> If Playwright browsers are not installed automatically, you can install them separately:

```bash
npx playwright install
```

---

## 🧪 Running the Test Cases

To execute all the tests:

```bash
npx playwright test tests --headed --retries=1 --reporter=html
```

### Running a specific test file:

```bash
Eg: 
npx playwright test tests/ui/login.spec.js --headed --retries=1
npx playwright test tests/api/warehouse/get/all_bin.spec.js --headed --retries=1
```

### Running tests in headed (UI) mode:

```bash
npx playwright test --headed
```

### Running tests in a specific browser:

Example for running only in **Chrome**:

```bash
npx playwright test --project=chromium
```

---

## ⚙️ Folder Structure

| Folder/File             | Purpose                               |
|-------------------------|---------------------------------------|
| `tests/`                | Contains UI and API test cases       |
| `playwright.config.js`  | Playwright configuration file        |
| `package.json`          | Node.js project dependencies         |

---

## 📋 Additional Useful Commands

| Command                        | Description                             |
|--------------------------------|-----------------------------------------|
| `npx playwright test --ui`     | Opens Playwright's built-in Test Explorer |
| `npx playwright show-report`   | Shows the HTML report after test execution |
---
---
# Quick Summary (Steps)
```bash
git clone https://github.com/theprashant31/QA-Task.git
cd QA-Task
npm install
npx playwright install   # if browsers aren't installed automatically
npx playwright test
```