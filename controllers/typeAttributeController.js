const { Type_Attribute } = require("../models/models")

exports.create = async (req, res) => {
    const { docTypeId, attributeId } = req.body;
    const type_attribute = await Type_Attribute.create({ docTypeId, attributeId });
    return res.json(type_attribute);
}

exports.getAll = async (req, res) => {
    const type_attribute = await Type_Attribute.findAll();
    return res.json(type_attribute);
}

exports.getOne = async (req, res) => {

}