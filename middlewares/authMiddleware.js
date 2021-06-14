const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) { //проверка валидности токена
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Token is not found' });
        }
        const token = req.headers.authorization.split(' ')[1]; //парсим токен: Bearer ...
        if (!token) {
            return res.status(401).json({message: 'User is not authorized'});
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}