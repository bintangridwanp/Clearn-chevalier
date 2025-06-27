const express = require('express');
const cors = require('cors');
const path = require('path');
const mahasiswaRoutes = require('./route/mahasiswa-route');
const authRoutes = require('./route/auth'); // Import auth routes

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/mahasiswa', mahasiswaRoutes);
app.use('/auth', authRoutes); // Register auth routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));