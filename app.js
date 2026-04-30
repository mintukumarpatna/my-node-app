const express = require('express');
const os = require('os');

const app = express();

const PORT = process.env.PORT || 3000;

// Health endpoint (IMPORTANT)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Main UI
app.get('/', (req, res) => {

  const version = process.env.VERSION || "v1";
  const hostname = os.hostname();
  const time = new Date().toLocaleString();

  res.send(`
  <html>
  <head>
    <title>CI/CD App</title>
    <style>
      body {
        margin: 0;
        font-family: Arial;
        background: linear-gradient(270deg, #0f172a, #020617, #0f172a);
        background-size: 600% 600%;
        animation: bgMove 10s ease infinite;
        color: white;
        text-align: center;
        padding-top: 100px;
      }

      @keyframes bgMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .card {
        display: inline-block;
        padding: 30px;
        border-radius: 15px;
        background: rgba(255,255,255,0.1);
        box-shadow: 0 0 20px rgba(0,255,150,0.3);
      }

      h1 {
        color: #22c55e;
      }

      .badge {
        margin-top: 20px;
        padding: 10px 20px;
        border-radius: 50px;
        background: #22c55e;
        color: black;
        font-weight: bold;
      }
    </style>
  </head>

  <body>
    <div class="card">
      <h1>🚀 CI/CD WORKING</h1>
      <h2>Version: ${version}</h2>
      <p><b>Hostname:</b> ${hostname}</p>
      <p><b>Time:</b> ${time}</p>
      <div class="badge">RUNNING ON EKS ⚡</div>
    </div>
  </body>
  </html>
  `);
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log("Server running on port " + PORT);
});