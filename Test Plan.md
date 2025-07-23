# 🧪 Test Plan / QA Strategy

## ✅ What Is Being Tested

This project tests both **frontend** and **backend** functionality for a full-stack CRUD application.

### 1. Backend API
- User login authentication
- Item operations: View, Create, Update, Delete

### 2. Frontend UI
- Login form flow
- Item list display
- Functional item operations via UI (create/edit/delete)

---

## 📂 Test Coverage Areas

| Component     | Feature           | Test Type         | Tool       |
|---------------|-------------------|-------------------|------------|
| Auth API      | Login             | API Unit Test     | Supertest  |
| Items API     | CRUD operations   | API Unit Test     | Supertest  |
| Login UI      | Form validation   | UI E2E Test       | Cypress    |
| Dashboard UI  | Item list display | UI Functional Test| Cypress    |
| Item actions  | Create/Edit/Delete| UI Functional Test| Cypress    |

---

## 🛠️ Tools Used and Why

| Tool          | Purpose                      | Reason                                                                 |
|---------------|------------------------------|------------------------------------------------------------------------|
| **Cypress**   | End-to-End UI Testing        | Fast, reliable browser-based tests simulating real user behavior       |
| **Supertest** | API Testing                  | Lightweight, easily integrates with Node.js API tests                  |
| **Jest**      | Test Runner                  | Simple and fast framework for assertions, mocking, and coverage        |
| **nyc**       | Code Coverage for Backend    | Generates test coverage reports via CLI                                |
| **GitHub Actions** | Continuous Integration | Runs tests automatically on push/PR to ensure stability                |

---

## ▶️ How to Run the Tests

### Frontend E2E (Cypress)

```bash
# Interactive mode
npx cypress open
<img width="1502" height="858" alt="image" src="https://github.com/user-attachments/assets/105a7e4a-ce5a-4675-9498-f05b0ebe00c5" />
- running test cases auth
<img width="1497" height="815" alt="image" src="https://github.com/user-attachments/assets/bc92f0d3-19e2-4521-98de-c36054741000" />
- running test cases view, create, update, delete
<img width="1506" height="851" alt="Screenshot 2025-07-23 at 21 45 07" src="https://github.com/user-attachments/assets/60dc890a-c823-41c6-ac02-8d713ab9abc8" />
<img width="1505" height="851" alt="image" src="https://github.com/user-attachments/assets/2e0f2652-77d3-4545-9dd0-ea44346b1743" />


# Headless run
npx cypress run --e2e
result:
<img width="736" height="266" alt="image" src="https://github.com/user-attachments/assets/ff3f1acd-0a97-4ddc-9a9f-dfabaffac478" />


```

### 🔧 Backend API Tests (Jest + Supertest)
```bash
cd backend/
npm install
npm test
<img width="1027" height="488" alt="image" src="https://github.com/user-attachments/assets/3a7ddfcc-02bf-4e80-bb80-47df7e450546" />

```

## 🚀 GitHub Actions (CI/CD)
Tests are automatically triggered on every push and pull request:
Frontend: Runs Cypress in headless mode
Backend: Runs Jest + Supertest for API testing

All test jobs must pass before merging into the main branch.

## ⚠️ Assumptions and Limitations
#### Environment:
Frontend runs at: http://localhost:5173
Backend runs at: http://localhost:3000

#### Database is persistent:
Tests may conflict if run repeatedly without resetting data.

#### Test data dependencies:
Tests use static IDs (e.g., item-1). If the dataset changes, tests may fail.

#### No mocking/stubbing:
All tests hit real API endpoints.

#### Tests not parallelized:
All tests run sequentially; no sharding or parallel runners used.

#### Static login credentials:
Uses test@example.com / 123456 for all login flows.
