const Router = require('express');
const router = new Router();
const typeAttributeController = require('../controllers/typeAttributeController');

router.post('/', typeAttributeController.create);
router.get('/', typeAttributeController.getAll);
router.get('/:id', typeAttributeController.getOne);

module.exports = router;