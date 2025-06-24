const express = require('express');
const cors = require('cors');
const path = require('path'); // tambahkan ini
const mahasiswaRoutes = require('./route/mahasiswa-route');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/mahasiswa', mahasiswaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));