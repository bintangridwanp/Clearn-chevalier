require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mahasiswaRoutes = require('./routes/mahasiswa');
const db = require('./routes/db');
require('./models');

const app = express();

app.use(cors());
app.use(express.json());
app.use('./api/mahasiswa', mahasiswaRoutes);

 const port = process.env.PORT || 3000;

 db.authenticate()
    .then(() => {
        console.log('Connected to database');
        app.listen(port, () => console.log(`Server started on port ${port}`));
    }).catch(err => console.log(err));