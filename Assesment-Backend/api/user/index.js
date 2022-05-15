const Router = require('express');

const {
    handlerAllUser,
    handlerCreateUser,
} = require('./user.controller');

const router = Router(); 

router.get('/',handlerAllUser);
router.post('/', handlerCreateUser);

module.exports = router;