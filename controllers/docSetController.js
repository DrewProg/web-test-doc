const { DocSet } = require("../models/models")

exports.create = async (req, res) => {
    const { name, description, projectId, docTypeId } = req.body;
    const docset = await DocSet.create({ name, description, projectId, docTypeId });
    return res.json(docset);
}

exports.getAll = async (req, res) => {
    const docset = await DocSet.findAll();
    return res.json(docset);
}

exports.getOne = async (req, res) => {

}