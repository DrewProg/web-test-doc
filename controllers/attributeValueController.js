const { AttributeValue } = require("../models/models")
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');

exports.create = async (req, res, next) => {
    try {
        const { docId, attributeId, value } = req.body; // value - json
        const { file } = req.files;
        const values = value; //копируем json
        console.log(file);
        // let fileName = uuid.v4() + '.jpg';
        // file.mv(path.resolve(__dirname, '..', 'static', fileName));
        // values.file = fileName;  // добавляем путь к файлу 
        const attributeValue = await AttributeValue.create({ docId, attributeId, values });
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