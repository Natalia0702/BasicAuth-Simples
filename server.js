const express = require('express');
const basicAuth = require('express-basic-auth');
const app = express();

app.use(
  basicAuth({
    users: {
      "admin": "admin"
    }
  })
)

app.get("/findAll", (req, res) => {
  res.send("API acessada com sucesso");
});

app.listen(3000, () => console.log("Servidor Iniciado"));