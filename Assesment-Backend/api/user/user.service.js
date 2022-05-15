
const UserModel = require('./user.model')

async function AllUser(){
    return await UserModel.find();
}
async function CreateUser(body){
    return await UserModel.create(body)
}
async function UserByEmail(email){
    return await UserModel.findOne({ email });
  }

module.exports={
    AllUser,
    CreateUser,
    UserByEmail
}