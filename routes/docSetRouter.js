const Router = require('express');
const router = new Router();
const docSetController = require('../controllers/docSetController');
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware');

router.post('/', checkRoleMiddleware(['MAIN_TESTER']), docSetController.create);
router.get('/', docSetController.getAll);
router.get('/:id', docSetController.getOne);

module.exports = router;