const user = require('./api/user');
const favorite = require('./api/favorite');
const authLocal = require('./auth/local');

function routes(app){
    app.use('/api/user', user)
    app.use('/api/favs', favorite)
    app.use('/auth/local', authLocal)
}

module.exports = routes