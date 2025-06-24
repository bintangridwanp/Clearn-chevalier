const prisma = require('../prisma-client');

exports.getAll = async (req, res) => {
    try {
        const data = await prisma.mahasiswa.findMany();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const { npm, nama, jurusan, tahunMasuk, kelas } = req.body;
        // Validasi sederhana
        if (!npm || !nama || !jurusan || !tahunMasuk || !kelas) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const newData = await prisma.mahasiswa.create({
            data: { npm, nama, jurusan, tahunMasuk, kelas },
        });
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await prisma.mahasiswa.update({
            where: { id: parseInt(id, 10) },
            data: req.body,
        });
        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.mahasiswa.delete({
            where: { id: parseInt(id, 10) },
        });
        res.json({ message: 'Deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const mahasiswa = await prisma.mahasiswa.findUnique({
            where: { id: parseInt(id, 10) },
        });
        if (!mahasiswa) {
            return res.status(404).json({ error: 'Mahasiswa not found' });
        }
        res.json(mahasiswa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};