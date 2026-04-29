const express = require('express');
const os = require('os');

const app = express();

// Config
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Middleware (JSON support)
app.use(express.json());

// Home Route (Better UI)
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CI/CD App</title>
        <style>
          body {
            font-family: Arial;
            text-align: center;
            background: #0f172a;
            color: #e2e8f0;
            padding-top: 50px;
          }
          h1 {
            color: #22c55e;
          }
          .box {
            border: 1px solid #334155;
            padding: 20px;
            border-radius: 10px;
            display: inline-block;
            background: #1e293b;
          }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>🚀 Zero Downtime CI/CD Pipeline</h1>
          <p>Server is running successfully</p>
          <p><b>Hostname:</b> ${os.hostname()}</p>
          <p><b>Time:</b> ${new Date().toLocaleString()}</p>
        </div>
      </body>
    </html>
  `);
});

// Health Check (IMPORTANT for CI/CD / Load Balancer)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

// Start Server
const server = app.listen(PORT, HOST, () => {
  console.log('====================================');
  console.log('🚀 Server Started Successfully!');
  console.log(`🌐 URL: http://${HOST}:${PORT}`);
  console.log(`🖥️ Hostname: ${os.hostname()}`);
  console.log(`⏱️ Time: ${new Date().toLocaleString()}`);
  console.log(`📦 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('====================================');
});

// Graceful Shutdown
const shutdown = () => {
  console.log('🛑 Shutting down server...');
  server.close(() => {
    console.log('✅ Server closed properly');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);   // Ctrl+C
process.on('SIGTERM', shutdown);  // Jenkins / Docker stop