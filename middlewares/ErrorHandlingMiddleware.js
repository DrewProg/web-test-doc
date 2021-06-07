const ApiError = require('../error/ApiError');

module.exports = function (err, req, res, next) {
    if (err instanceof ApiError) { //если класс ошибки ApiError
        return res.status(err.status).json({message: err.message}) //то возвращаем на клиент ответ
    }
    return res.status(500).json({message: "Unexpected Error! Blyat'"});
};