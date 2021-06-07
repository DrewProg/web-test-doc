const ApiError = require("../error/ApiError");

exports.login = async (req, res) => {

}

exports.check = async (req, res, next) => {
    const { id } = req.query;
    if (!id) {
        return next(ApiError.badRequest('Has no id'));
    }
    res.json(id);
}