const Router = require('express');
const router = new Router();
const attributeValue = require('../controllers/attributeValueController');

router.post('/', attributeValue.create);
router.get('/', attributeValue.getAll);
router.get('/:id', attributeValue.getOne);

module.exports = router;