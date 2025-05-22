const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// CORS configuration
app.use(cors({
  origin: ['http://localhost:8000', 'http://172.17.0.2:8000'],
  methods: ['GET', 'HEAD'],
  credentials: true
}));

// Serve static files with proper headers
app.use(express.static('public', {
  setHeaders: (res, path) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Cross-Origin-Resource-Policy', 'cross-origin');
  }
}));

// Add logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const PORT = 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Static file server running on port ${PORT}`);
});
