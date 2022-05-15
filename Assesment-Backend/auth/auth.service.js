const jsonwebtoken = require('jsonwebtoken');
const compose = require('composable-middleware');

const { UserByEmail } = require('../api/user/user.service');

/**
 * Returns a jwt token signed by the app secret
 * @param {String} payload
 * @returns {String} token
 */
function signToken(payload) {
  const token = jsonwebtoken.sign(payload, 'secret_token', {
    expiresIn: '2h',
  });

  return token;
}

/**
 * Validate JWT
 * @param {String} token
 * @returns {Object} payload
 */
async function validateToken(token) {
  try {
    const payload = await jsonwebtoken.verify(token, 'secret_token');
    return payload;
  } catch (error) {
    return {error: true, ...error};
  }
}

function isAuthenticated() {
  return compose().use(
    async (req, res, next) => {
      // 1. req.headers -> authorization
      const authHeader = req.headers.authorization;
      // 2. If (authHeader)
      if (!authHeader) {
        return res.status(401).json('User no exist please login').end();
      }
      // 3. split para obtener el token
      const [, token] = authHeader.split(' ');
      // 4. validar el token
      const payload = await validateToken(token);

      // 5. if token falsy -> decir q no esta authori
      if (!payload) {
        return res.status(401).json('Header login is not valid').end();
      }

      // 6. buscar el usuario por el email del payload del token
      const user = await UserByEmail(payload.email); 

      if (!user) {
        return res.status(401).json('user not find').end();
      }
      // 7. agregar ese usuario al req.user
      req.user = {email:user.email};
      // 8. siga al siguiente middleware next()
      next();
      return null;
  })
}




module.exports = {
  signToken,
  validateToken,
  isAuthenticated
};