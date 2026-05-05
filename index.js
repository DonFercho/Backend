const http = require('http');

const port = process.env.PORT || 3000;

const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Landing Page Básica</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #4a90e2, #50e3c2);
      color: #fff;
    }
    .container {
      text-align: center;
      background: rgba(255, 255, 255, 0.12);
      padding: 40px 30px;
      border-radius: 16px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
      max-width: 480px;
      width: 100%;
    }
    h1 {
      margin: 0 0 16px;
      font-size: 2.5rem;
    }
    p {
      margin: 0 0 24px;
      line-height: 1.6;
      color: #e8f5ff;
    }
    .button {
      display: inline-block;
      padding: 14px 28px;
      border-radius: 999px;
      background: #fff;
      color: #1f3a93;
      text-decoration: none;
      font-weight: bold;
      transition: transform 0.2s ease;
    }
    .button:hover {
      transform: translateY(-2px);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Bienvenido</h1>
    <p>pagina simple para mostrar cambios, ya este cambio va con prueba</p>
    <a class="button" href="#">Ver cambio básico</a>
  </div>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

server.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
