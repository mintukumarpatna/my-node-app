const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('myapp workin ci/cd');
});

// ✅ FIX HERE
const server = app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});

// graceful shutdown
process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(0);
  });
});