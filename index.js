const express = require('express');
const StringCalculator = require('./stringCalculator');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/add', (req, res) => {
  try {
    const { numbers } = req.body;
    const calculator = new StringCalculator();
    const result = calculator.add(numbers);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`String Calculator app listening at http://localhost:${port}`);
  });
}

module.exports = app;
