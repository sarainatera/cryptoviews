const express = require('express');
const cors = require('cors');
const mockData = require('./data.json');

const app = express();
app.use(cors());

// Serve the list of cryptocurrencies
app.get('/api/cryptos', (req, res) => {
  res.json(mockData);
});

// Serve historical data for a specific cryptocurrency
app.get('/api/cryptos/:id', (req, res) => {
  const { id } = req.params;
  const crypto = mockData.find((item) => item.id === id);

  if (!crypto) {
    return res.status(404).json({ error: 'Cryptocurrency not found' });
  }

  res.json({
    id: crypto.id,
    name: crypto.name,
    prices: crypto.prices // Return specific historical prices
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
