const { DocType } = require("../models/models")

exports.create = async (req, res) => {
    const { name, description } = req.body;
    const doctype = await DocType.create({ name, description });
    return res.json(doctype);
}

exports.getAll = async (req, res) => {
    const doctype = await DocType.findAll();
    return res.json(doctype);
}

exports.getOne = async (req, res) => {

}