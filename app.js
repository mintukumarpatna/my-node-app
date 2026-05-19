const express = require('express');
const path = require('path');
const os = require('os');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// Trust AWS ALB / Reverse Proxy
app.set('trust proxy', true);

// Security headers
app.use(helmet());

// Compress responses
app.use(compression());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint
app.get('/api/info', (req, res) => {
  res.json({
    status: "UP",
    hostname: os.hostname(),
    time: new Date().toLocaleString(),
    version: process.env.VERSION || "v1",
    ip: req.ip
  });
});

// Health check for Kubernetes
app.get('/health', (req, res) => {
  res.status(200).json({
    status: "OK"
  });
});

// Fallback route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
const server = app.listen(PORT, HOST, () => {

  console.log('====================================');
  console.log('🚀 Node.js Application Started');
  console.log(`🌐 URL: http://${HOST}:${PORT}`);
  console.log(`🖥️ Hostname: ${os.hostname()}`);
  console.log(`⏱️ Time: ${new Date().toLocaleString()}`);
  console.log(`📦 Version: ${process.env.VERSION || "v1"}`);
  console.log('====================================');

});

// Graceful shutdown
const shutdown = () => {

  console.log('🛑 Shutting down server...');

  server.close(() => {

    console.log('✅ Server closed properly');

    process.exit(0);

  });

};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);