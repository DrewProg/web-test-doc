const Router = require('express');
const router = new Router();
const projectController = require('../controllers/projectController');
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware');

router.post('/', checkRoleMiddleware(['MAIN_TESTER']), projectController.create);
router.get('/', projectController.getAll);
router.get('/:id', projectController.getOne);

module.exports = router;