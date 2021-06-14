const { Project } = require('../models/models');

exports.create = async (req, res) => {
    const { name, description } = req.body;
    const project = await Project.create({ name, description });
    return res.json(project);
}

exports.getAll = async (req, res) => {
    const projects = await Project.findAll();
    return res.json(projects);
}

exports.getOne = async (req, res) => {
    const { id } = req.params;
    const project = await Attribute.findOne({ where: { id } });
    return res.json(project);
}