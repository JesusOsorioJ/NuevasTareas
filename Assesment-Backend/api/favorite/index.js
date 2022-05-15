const Router = require('express');
const { isAuthenticated } = require('../../auth/auth.service');

const {
    handlerAllList,
    handlerListById,
    handlerListByEmail,
    handlerDeleteList,
    handlerCreateList,
    handlerUpdateList
} = require('./favorite.controller');

const router = Router();

router.get('/', handlerAllList);
router.get('/:id', handlerListById);
router.get('/email/:email', handlerListByEmail);
router.delete('/:id', isAuthenticated(), handlerDeleteList);
router.post('/', isAuthenticated(), handlerCreateList);
router.patch('/:id', isAuthenticated(), handlerUpdateList);

module.exports = router;