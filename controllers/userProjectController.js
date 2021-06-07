const { User_Project } = require("../models/models")

exports.create = async (req, res) => {
    const user_project = await User_Project.create();
    return res.json(user_project);
}

exports.getAll = async (req, res) => {
    const user_project = await User_Project.findAll();
    return res.json(user_project);
}

exports.getOne = async (req, res) => {

}