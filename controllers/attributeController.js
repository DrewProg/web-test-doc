const { Attribute } = require("../models/models")

exports.create = async (req, res) => {
    const { name, description, input_type } = req.body;
    const attribute = await Attribute.create({ name, description, input_type });
    return res.json(attribute);
}

exports.getAll = async (req, res) => {
    const attribute = await Attribute.findAll();
    return res.json(attribute);
}

exports.getOne = async (req, res) => {
    const { id } = req.params;
    const attribute = await Attribute.findOne({ where: { id } });
    return res.json(attribute);
}