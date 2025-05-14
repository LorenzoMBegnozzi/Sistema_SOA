const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Ranking de um nome em décadas
app.get('/nome/:nome', async (req, res) => {
  const { nome } = req.params;
  try {
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados do nome.' });
  }
});

// 2. Nomes mais frequentes por localidade
app.get('/localidade/:uf', async (req, res) => {
  const { uf } = req.params;
  try {
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking?localidade=${uf}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar ranking por localidade.' });
  }
});

// 3. Comparar dois nomes nacionalmente
app.get('/comparar', async (req, res) => {
  const { nome1, nome2 } = req.query;
  try {
    const [res1, res2] = await Promise.all([
      axios.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome1}`),
      axios.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome2}`)
    ]);
    res.json({ nome1: res1.data, nome2: res2.data });
  } catch (error) {
    res.status(500).json({ error: 'Erro na comparação de nomes.' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
