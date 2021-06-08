const { Document } = require("../models/models")

exports.create = async (req, res) => {
    const { docSetId } = req.body;
    const doc = await Document.create({ docSetId });
    return res.json(doc);
}

exports.getAll = async (req, res) => {
    let { docSetId, limit, page } = req.query;
    let docs;
    page = page || 1; //страницы
    limit = limit || 5; //количество элементов на странице
    let offset = page * limit - limit; //отступ: сколько элементов нужно пропустить, чтобы попасть на нужную страницу
    if (docSetId) docs = await Document.findAndCountAll({ where: { docSetId }, limit, offset });
    else docs = await Document.findAndCountAll({ limit, offset });
    return res.json(docs);
}

exports.getOne = async (req, res) => {

}