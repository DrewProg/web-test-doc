const { AttributeValue } = require("../models/models")
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');

exports.create = async (req, res, next) => {
    try {
        let { documentId, attributeId, value } = req.body; // value - json
        if (req.files != null) {
            if (value == null) value = {};
            const { file } = req.files;
            let fileName = uuid.v4() + '.jpg';
            value.file = fileName;  // добавляем путь к файлу 
            file.mv(path.resolve(__dirname, '..', 'static', fileName));
        }
        const attributeValue = await AttributeValue.create({ documentId, attributeId, value });
        return res.json(attributeValue);
    } catch (error) {
        next(ApiError.badRequest(error.message));
    }
}

exports.getAll = async (req, res) => {
    const attributeValue = await AttributeValue.findAll();
    return res.json(attributeValue);
}

exports.getOne = async (req, res) => {

}