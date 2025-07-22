// routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Dummy user (harus sama dengan index.js sebelumnya)
const USER = { email: 'test@example.com', password: '123456' };

// POST /login
router.post('/', (req, res) => {
  const { email, password } = req.body;
  if (email === USER.email && password === USER.password) {
    res.status(200).json({ token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
