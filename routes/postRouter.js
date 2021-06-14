const Router = require('express');
const router = new Router();
const postController = require('../controllers/postController');
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware');

router.post('/', checkRoleMiddleware(['ADMIN']), postController.create);
router.get('/', postController.getAll);
router.get('/:id', postController.getOne);

module.exports = router;