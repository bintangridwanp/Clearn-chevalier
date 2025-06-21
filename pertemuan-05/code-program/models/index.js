// models/mahasiswa.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Mahasiswa = sequelize.define('Mahasiswa', {
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nim: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jurusan: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'mahasiswa',
    timestamps: false
});

module.exports = Mahasiswa;