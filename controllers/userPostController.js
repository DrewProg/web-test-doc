const { User_Post } = require("../models/models")
const ApiError = require("../error/ApiError");

exports.create = async (req, res, next) => {
    let { userId, postId } = req.body;
    if (!userId || !postId) {
        return next(ApiError.badRequest('userId or postId is null'));
    }
    const user_post = User_Post.create({userId, postId});
    return res.json(user_post);
}

exports.getAll = async (req, res) => {
    const user_post = await User_Post.findAll();
    return res.json(user_post);
}

exports.getOne = async (req, res) => {

}