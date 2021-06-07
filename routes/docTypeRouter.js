const Router = require('express');
const router = new Router();
const docTypeController = require('../controllers/docTypeController');

router.post('/', docTypeController.create);
router.get('/', docTypeController.getAll);
router.get('/:id', docTypeController.getOne);

module.exports = router;