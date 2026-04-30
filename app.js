app.get('/', (req, res) => {

  const version = process.env.VERSION || "v1";

  res.send(`
  <html>
  <head>
    <title>CI/CD Pro</title>

    <style>
      body {
        margin: 0;
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(270deg, #020617, #0f172a, #020617);
        background-size: 600% 600%;
        animation: bgMove 10s ease infinite;
        color: white;
        overflow: hidden;
      }

      @keyframes bgMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        flex-direction: column;
      }

      .card {
        backdrop-filter: blur(15px);
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        box-shadow: 0 0 40px rgba(0,255,150,0.2);
        animation: float 3s ease-in-out infinite;
      }

      @keyframes float {
        0%,100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      h1 {
        font-size: 42px;
        background: linear-gradient(90deg, #22c55e, #4ade80, #22c55e);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: glow 2s infinite alternate;
      }

      @keyframes glow {
        from { text-shadow: 0 0 10px #22c55e; }
        to { text-shadow: 0 0 25px #4ade80; }
      }

      p {
        font-size: 18px;
        margin: 10px 0;
      }

      .badge {
        margin-top: 20px;
        padding: 10px 20px;
        border-radius: 50px;
        background: #22c55e;
        color: black;
        font-weight: bold;
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }

      /* Floating particles */
      .particles span {
        position: absolute;
        display: block;
        width: 6px;
        height: 6px;
        background: #22c55e;
        animation: move 15s linear infinite;
        border-radius: 50%;
      }

      @keyframes move {
        0% { transform: translateY(100vh) scale(0); }
        100% { transform: translateY(-10vh) scale(1); }
      }
    </style>
  </head>

  <body>

    <div class="particles">
      ${Array(60).fill().map(() =>
        `<span style="left:${Math.random()*100}%; animation-duration:${5 + Math.random()*10}s;"></span>`
      ).join('')}
    </div>

    <div class="container">
      <div class="card">
        <h1>🚀 CI/CD LIVE</h1>
        <p>🔥 Deployment Successful</p>
        <p><b>Version:</b> ${version}</p>
        <p><b>Hostname:</b> ${require('os').hostname()}</p>
        <p><b>Time:</b> ${new Date().toLocaleString()}</p>
        <div class="badge">RUNNING ON EKS ⚡</div>
      </div>
    </div>

  </body>
  </html>
  `);
});