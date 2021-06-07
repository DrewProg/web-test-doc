const { Post } = require("../models/models");

exports.create = async (req, res) => {
    const {name, access_level} = req.body;
    const post = await Post.create({name, access_level});
    return res.json(post);
}

exports.getAll = async (req, res) => {
    const post = await Post.findAll();
    return res.json(post);
}

exports.getOne = async (req, res) => {
    
}