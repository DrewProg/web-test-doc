const Router = require('express');
const router = new Router();
const docSetController = require('../controllers/docSetController');

router.post('/', docSetController.create);
router.get('/', docSetController.getAll);
router.get('/:id', docSetController.getOne);

module.exports = router;