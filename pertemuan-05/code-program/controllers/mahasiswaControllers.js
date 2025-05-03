const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../config/db')



exports.getAll = async (req, res) => {
    const  data = await Mahasiswa.findAll(
    res.json(data)
    )
}

exports.getbyid = async (req, res) => {
    const  data = await Mahasiswa.findByPk(req.params.id)
    if(!data) return res.status(404).json({msg:"No data found."})
}

exports.create = async (req, res) => {
    try {
        const data = await Mahasiswa.create(req.body);
        res.status(200).json({data});
    }catch(err){
        res.status(500).json({msg:"Error creating Mahasiswa"})
    }
};

exports.update = async (req, res) => {
    const data = await Mahasiswa.findByPk(req.params.id);
    if(!data) return res.status(404).json({msg:"No data found."});
    res.json({data});
};

exports.delete = async (req, res) => {
    const  data = await Mahasiswa.findByPk(req.params.id);
    if(!data) return res.status(404).json({msg:"No data found."});
    await Mahasiswa.destroy({where:{id:req.params.id}});
    res.status(204).json({data});
}