const { Document } = require("../models/models")

exports.create = async (req, res) => {
    const { docSetId } = req.body;
    const doc = await Document.create({ docSetId });
    return res.json(doc);
}

exports.getAll = async (req, res) => {
    const doc = await Document.findAll();
    return res.json(doc);
}

exports.getOne = async (req, res) => {

}