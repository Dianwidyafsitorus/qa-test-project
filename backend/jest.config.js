/** @type {import('jest').Config} */
module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  testEnvironment: "node",
  // Optional: Tentukan lokasi test jika kamu pakai struktur khusus
  testMatch: ["**/__tests__/**/*.test.js", "**/?(*.)+(spec|test).js"],
};
