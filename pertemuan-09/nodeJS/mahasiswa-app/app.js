const express = require('express');
const cors = require('cors');
const path = require('path');
const mahasiswaRoutes = require('./route/mahasiswa-route');
const authRoutes = require('./route/auth');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON request bodies
app.use(express.json());

// Register routes
app.use('/mahasiswa', mahasiswaRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));