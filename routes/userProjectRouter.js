const Router = require('express');
const router = new Router();
const userProjectController = require('../controllers/userProjectController');
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware');

router.post('/', checkRoleMiddleware(['MAIN_TESTER']), userProjectController.create);
router.get('/', userProjectController.getAll);
router.get('/:id', userProjectController.getOne);

module.exports = router;