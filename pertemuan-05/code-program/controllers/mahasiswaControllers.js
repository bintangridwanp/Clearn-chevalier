const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../config/db');
const Mahasiswa = require('../models/index'); // Make sure this path is correct

exports.getAll = async (req, res) => {
    try {
        const data = await Mahasiswa.findAll();
        res.json(data);
    } catch (err) {
        res.status(500).json({ msg: "Error fetching data" });
    }
};

exports.getById = async (req, res) => {
    try {
        const data = await Mahasiswa.findByPk(req.params.id);
        if (!data) return res.status(404).json({ msg: "No data found." });
        res.json(data);
    } catch (err) {
        res.status(500).json({ msg: "Error fetching data" });
    }
};

exports.create = async (req, res) => {
    try {
        const data = await Mahasiswa.create(req.body);
        res.status(201).json({ data });
    } catch (err) {
        res.status(500).json({ msg: "Error creating Mahasiswa" });
    }
};

exports.update = async (req, res) => {
    try {
        const data = await Mahasiswa.findByPk(req.params.id);
        if (!data) return res.status(404).json({ msg: "No data found." });
        await data.update(req.body);
        res.json({ data });
    } catch (err) {
        res.status(500).json({ msg: "Error updating Mahasiswa" });
    }
};

exports.delete = async (req, res) => {
    try {
        const data = await Mahasiswa.findByPk(req.params.id);
        if (!data) return res.status(404).json({ msg: "No data found." });
        await data.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ msg: "Error deleting Mahasiswa" });
    }
};