const { Post } = require("../models/models");

exports.create = async (req, res) => {
    const {name, role} = req.body;
    const post = await Post.create({name, role});
    return res.json(post);
}

exports.getAll = async (req, res) => {
    const post = await Post.findAll();
    return res.json(post);
}

exports.getOne = async (req, res) => {
    
}