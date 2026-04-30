const express = require('express');
const path = require('path');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint (optional but useful for debugging)
app.get('/api/info', (req, res) => {
  res.json({
    status: "UP",
    hostname: os.hostname(),
    time: new Date().toLocaleString(),
    version: process.env.VERSION || "v1"
  });
});

// Health check (VERY IMPORTANT for Kubernetes)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Fallback route (important for SPA or direct URL hit)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
const server = app.listen(PORT, HOST, () => {
  console.log('====================================');
  console.log('🚀 Server Started Successfully!');
  console.log(`🌐 URL: http://${HOST}:${PORT}`);
  console.log(`🖥️ Hostname: ${os.hostname()}`);
  console.log(`⏱️ Time: ${new Date().toLocaleString()}`);
  console.log(`📦 Version: ${process.env.VERSION || "v1"}`);
  console.log('====================================');
});

// Graceful shutdown (important for Kubernetes rolling updates)
const shutdown = () => {
  console.log('🛑 Shutting down server...');
  server.close(() => {
    console.log('✅ Server closed properly');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);