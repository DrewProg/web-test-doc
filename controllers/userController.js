const ApiError = require("../error/ApiError");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require("../models/models");

const generateJWT = (id, nickname) => {
    return jwt.sign(
        { id, nickname },
        process.env.SECRET_KEY,
        { expiresIn: '12h' }
    );
}

exports.registration = async (req, res, next) => {
    let { nickname, password } = req.body;
    if (!nickname || !password) { //можно добавить полноценную валидацию
        return next(ApiError.badRequest('Wrong nickname or password'))
    }
    const candidate = await User.findOne({ where: { nickname } });
    if (candidate) {
        return next(ApiError.badRequest('User with this nickname already exists'))
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ nickname, pass_hash: hashPassword });
    const token = generateJWT(user.id, user.nickname);
    return res.json({ token });
}

exports.login = async (req, res, next) => {
    const { nickname, password } = req.body;
    const user = await User.findOne({ where: { nickname } });
    if (!user) {
        return next(ApiError.badRequest('User with this nickname or password was not found'));
    }
    let comparePasswords = bcrypt.compareSync(password, user.pass_hash);
    if (!comparePasswords) {
        return next(ApiError.badRequest('User with this nickname or password was not found'));
    }
    const token = generateJWT(user.id, user.nickname);
    return res.json({ token });
}

exports.check = async (req, res, next) => {
    const { id } = req.query;
    if (!id) {
        return next(ApiError.badRequest('Has no id'));
    }
    res.json(id);
}