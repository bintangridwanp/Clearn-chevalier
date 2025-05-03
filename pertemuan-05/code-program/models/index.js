const sequelize = require('../config/db');
const Mahasiswa = require('./mahasiswaModel');
const {DataTypes} = require("sequelize");


const Mahasiswa = sequelize.define(Mahasiswa, {
    npm: {
        type : DataTypes.string,
        allowNull: false
    },
    name: {
        type : DataTypes.string,
        allowNull: false
    },
    jurusan: {
        type : DataTypes.string,
        allowNull: false
    }
})