const jwt = require('jsonwebtoken');
const { Post, User_Post } = require('../models/models');

const getUserRoles = async (userId) => {
    const currentUserPosts = await Post.findAll({ include: [{ model: User_Post, where: { userId } }] });
    let curUserPosts = [];
    currentUserPosts.forEach(element => {
        curUserPosts = [...curUserPosts, element.dataValues.role]
    });
    return curUserPosts;
}

module.exports = function (roles) {
    return async function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next();
        }
        try {
            if (!req.headers.authorization) {
                return res.status(401).json({ message: 'Token is not found' });
            }
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: 'User is not authorized' });
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            const userRoles = await getUserRoles(decoded.id);
            const func = (element) => roles.includes(element);
            if (!userRoles.some(func)) // если у пользователя нет ни одной доступной роли, то не пропускаем
            {
                return res.status(403).json({ message: 'Access Denied!' });
            }
            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).json({ message: error.message })
        }
    }
}
