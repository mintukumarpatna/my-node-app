app.get('/', (req, res) => {
  res.send(`
  <html>
  <head>
    <title>CI/CD Pro UI</title>

    <style>
      body {
        margin: 0;
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(270deg, #0f172a, #020617, #0f172a);
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
        background: rgba(255, 255, 255, 0.05);
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
        font-size: 40px;
        background: linear-gradient(90deg, #22c55e, #4ade80, #22c55e);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textGlow 2s infinite alternate;
      }

      @keyframes textGlow {
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

      .dots {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        top: 0;
        left: 0;
      }

      .dots span {
        position: absolute;
        display: block;
        width: 5px;
        height: 5px;
        background: #22c55e;
        animation: animateDots 20s linear infinite;
        border-radius: 50%;
      }

      @keyframes animateDots {
        0% {
          transform: translateY(100vh) scale(0);
        }
        100% {
          transform: translateY(-10vh) scale(1);
        }
      }
    </style>
  </head>

  <body>

    <div class="dots">
      ${Array(50).fill().map(() => 
        `<span style="left:${Math.random()*100}%; animation-duration:${5+Math.random()*10}s;"></span>`
      ).join('')}
    </div>

    <div class="container">
      <div class="card">
        <h1>🚀 Zero Downtime CI/CD</h1>
        <p>🔥 Deployment Successful</p>
        <p><b>Hostname:</b> ${os.hostname()}</p>
        <p><b>Time:</b> ${new Date().toLocaleString()}</p>
        <div class="badge">LIVE ON EKS ⚡</div>
      </div>
    </div>

  </body>
  </html>
  `);
});