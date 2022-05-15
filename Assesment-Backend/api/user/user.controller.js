
const {
    AllUser,
    CreateUser,
    UserByEmail
} = require('./user.service');


async function handlerAllUser(req,res){
    try{
        const user = await AllUser();
        return res.status(200).json(user);
    }catch (error){
        return res.status(404).json({ message: 'Information not found' });
    }
}
async function handlerCreateUser(req,res){
    const pass =  /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    const { email, password } = req.body;
    const newUser = req.body;
    const search = await UserByEmail(email)
    try{
        if (!pass.test(password)){
            return res.status(203).json({ message: 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.' });
        }
        if(search){
            return res.status(203).json({ message: 'Correo en uso por favor escoga otro'});
        }
        const user = await CreateUser(newUser);
        return res.status(201).json({ message: 'User created' });
    }catch(error){
        console.log(error)
        return res.status(500).json(error);
    }
}

module.exports={
    handlerAllUser,
    handlerCreateUser,
}