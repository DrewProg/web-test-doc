const { Document } = require("../models/models")

exports.create = async (req, res) => {
    const { name, description, docSetId } = req.body;
    const doc = await Document.create({ name, description, docSetId });
    return res.json(doc);
}

exports.getAll = async (req, res) => {
    const doc = await Document.findAll();
    return res.json(doc);
}

exports.getOne = async (req, res) => {

}