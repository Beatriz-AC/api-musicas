const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


const musicasRoutes = require('./routes/musicaRoutes');


app.use('/musicas', musicasRoutes);

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});