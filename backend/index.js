const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/login', authRoutes);
app.use('/items', itemRoutes);

// Health check route for CI/CD
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Export app for testing
module.exports = app;

// Run the server only if called directly (not from tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}
