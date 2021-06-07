const Router = require('express');
const router = new Router();
const setAttributeController = require('../controllers/setAtrributeController');

router.post('/', setAttributeController.create);
router.get('/', setAttributeController.getAll);
router.get('/:id', setAttributeController.getOne);

module.exports = router;