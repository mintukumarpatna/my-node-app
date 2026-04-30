const express = require('express');
const os = require('os');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const version = process.env.VERSION || "v2";
  const color = "#" + Math.floor(Math.random()*16777215).toString(16);

  res.send(`
    <body style="background:${color}; color:white; text-align:center; padding-top:100px;">
      <h1>🚀 CI/CD WORKING</h1>
      <h2>Version: ${version}</h2>
      <p>Hostname: ${os.hostname()}</p>
      <p>Time: ${new Date().toLocaleString()}</p>
    </body>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log("Server running...");
});