const Router = require('express');
const router = new Router();
const attributeController = require('../controllers/attributeController');
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware');

router.post('/', checkRoleMiddleware(['MAIN_TESTER']), attributeController.create);
router.get('/', attributeController.getAll);
router.get('/:id', attributeController.getOne);

module.exports = router;