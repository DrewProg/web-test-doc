const { Set_Attribute } = require("../models/models")

exports.create = async (req, res) => {
    const { docSetId, attributeId } = req.body;
    const set_attribute = await Set_Attribute.create({ docSetId, attributeId });
    return res.json(set_attribute);
}

exports.getAll = async (req, res) => {
    const set_attribute = await Set_Attribute.findAll();
    return res.json(set_attribute);
}

exports.getOne = async (req, res) => {

}