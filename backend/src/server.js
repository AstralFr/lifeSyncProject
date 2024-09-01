const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const apiRoutes = require('./routes/api');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/api', apiRoutes);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});