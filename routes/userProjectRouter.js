const Router = require('express');
const router = new Router();
const userProjectController = require('../controllers/userProjectController');

router.post('/', userProjectController.create);
router.get('/', userProjectController.getAll);
router.get('/:id', userProjectController.getOne);

module.exports = router;