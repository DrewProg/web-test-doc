const Router = require('express');
const router = new Router();
const attributeRouter = require('./attributeRouter');
const attribute_valueRouter = require('./attributeValueRouter');
const docTypeRouter = require('./docTypeRouter');
const docSetRouter = require('./docSetRouter');
const documentRouter = require('./documentRouter');
const projectRouter = require('./projectRouter');
const postRouter = require('./postRouter');
const setAttributeRouter = require('./setAttributeRouter');
const typeAttributeRouter = require('./typeAttributeRouter');
const userProjectRouter = require('./userProjectRouter');
const userRouter = require('./userRouter');


router.use('/attribute', attributeRouter);
router.use('/att_val', attribute_valueRouter);
router.use('/doctype', docTypeRouter);
router.use('/docset', docSetRouter);
router.use('/doc', documentRouter);
router.use('/project', projectRouter);
router.use('/post', postRouter);
router.use('/set_att', setAttributeRouter);
router.use('/type_att', typeAttributeRouter);
router.use('/user', userRouter);
router.use('/user_proj', userProjectRouter);

module.exports = router;