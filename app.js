app.get('/', (req, res) => {

  const version = process.env.VERSION || "v1";
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

  res.send(`
  <html>
  <head>
    <title>Deployment Test</title>
    <meta http-equiv="refresh" content="2">
    <style>
      body {
        background: ${randomColor};
        color: white;
        font-family: Arial;
        text-align: center;
        padding-top: 100px;
        transition: 0.5s;
      }
      h1 {
        font-size: 50px;
      }
      .box {
        background: rgba(0,0,0,0.5);
        padding: 30px;
        border-radius: 15px;
        display: inline-block;
      }
    </style>
  </head>

  <body>
    <div class="box">
      <h1>🚀 DEPLOYMENT TEST</h1>
      <h2>Version: ${version}</h2>
      <p><b>Hostname:</b> ${require('os').hostname()}</p>
      <p><b>Time:</b> ${new Date().toLocaleString()}</p>
      <p>🔥 Color changes every refresh</p>
    </div>
  </body>
  </html>
  `);
});