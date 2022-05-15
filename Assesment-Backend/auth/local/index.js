const { Router } = require('express');

const { handlerLoginUser } = require('./local.controller');

const router = Router();

router.get('/login', handlerLoginUser);

module.exports = router;