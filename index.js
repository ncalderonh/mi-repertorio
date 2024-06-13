const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const routes = require('./routes/router');

dotenv.config();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});