🧪 TEST_PLAN.md
1. ✅ What is Being Tested
This project consists of a React frontend and a Node.js backend for a simple item management application with login functionality. The following aspects are covered:

User Authentication

Login with valid/invalid credentials

Item CRUD Functionality

Viewing a list of items

Creating new items

Editing existing items

Deleting items


2. 📌 Test Coverage Areas
Layer	Type of Test	Tool	Status
Backend API	Integration tests	Supertest	✅ Done
Frontend	Functional UI tests	Cypress	✅ Done
CI Pipeline	Automated test run	GitHub Actions	✅ Done

Each CRUD operation and login feature has been split into its own Cypress test file to ensure modularity and clarity.

3. 🛠️ Tools Used and Why
Tool	Purpose
Cypress	E2E & UI testing (React app)
Supertest	API testing (Node.js backend)
Jest	Test runner for backend API
GitHub Actions	CI to run tests on push/pull reqs

These tools were chosen for their ease of setup, strong documentation, and community support for modern JS apps.

4. ▶️ How to Run the Tests
🧪 Backend API Tests
bash
Salin
Edit
# From the root
cd backend
npm install
npm test
💻 Frontend Cypress Tests (UI)
bash
Salin
Edit
cd frontend
npm install
npx cypress open    # Interactive GUI
npx cypress run     # Headless run (CI-compatible)
🪄 Run CI Pipeline
The tests automatically run on every push or pull_request via GitHub Actions:

yaml
Salin
Edit
.github/workflows/ci.yml


5. ⚠️ Assumptions and Limitations
User credentials test@example.com / 123456 are assumed to exist in the test DB.

Backend must be running locally on http://localhost:3000 when testing frontend.

Tests are not currently mocking backend APIs; they rely on a live server.

No visual regression or performance testing included (optional extensions).

Basic error handling is tested, but no advanced validations or security tests (e.g., XSS) are implemented yet.

