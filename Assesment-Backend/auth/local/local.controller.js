const { UserByEmail } = require('../../api/user/user.service');
const { signToken } = require('../auth.service');

async function handlerLoginUser(req, res) {
  const { email, password } = req.body;

  console.log("email, password", email, password)

  try {
    const user = await UserByEmail(email);

    if (!user) {
      return res.status(401).json('Correo o contraseña inválido, intente nuevamente');
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json('Correo o contraseña inválido, intente nuevamente');
    }

    const token = signToken({email:user.email});

    return res.status(200).json(token);
  } catch (error) {
      console.log(error)
    return res.status(400).json('Correo o contraseña inválido, intente nuevamente');
  }
}

module.exports = {
  handlerLoginUser,
};