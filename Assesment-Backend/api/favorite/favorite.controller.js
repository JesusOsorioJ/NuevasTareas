const {
  AllList,
  ListById,
  ListByEmail,
  DeleteList,
  CreateNewList,
  UpdateList,
} = require("./favorite.service");

async function handlerAllList(req,res) {
    try{
        const client = await AllList();
        return res.status(200).json(client);
    }catch (error){
        return res.status(404).json({ message: 'Information not found' });
    }
}
async function handlerListById(req,res) {
    const { id } = req.params; 
    try{
        const client = await ListById(id);
        return res.status(200).json(client);
    }catch (error){
        return res.status(404).json({ message: 'Information not found' });
    }
}

async function handlerListByEmail(req,res) {
    const { email } = req.params; 
    try{
        const ListUser = await ListByEmail(email);
        return res.status(200).json(ListUser);
    }catch (error){
        return res.status(404).json({ message: 'Information not found' });
    }
}

async function handlerDeleteList(req,res) {
    const { id } = req.params; 
    try{
        const {email} = await ListById(id);
       if (req.user.email !== email){
        return res.status(403).json({ message: 'User not authorization' });
       }

        const list = await DeleteList(id);
        return res.status(200).json({ message: `Lista con ID ${id} eliminada` });
    }catch (error){
        return res.status(404).json({ message: 'Information not found' });
    }
}

async function handlerCreateList(req,res) {
    
    try{
    const { favorites, name } = req.body;
    const { email } = req.user;
    
        const list = await CreateNewList({email,favorites, name});
        return res.status(201).json(list);
    }catch (error){
        console.log("error",error)
        return res.status(401).json(error);
    }
}
async function handlerUpdateList(req,res) {
    const { id } = req.params; 
    const { favorites, name } = req.body;
    try{
        const client = await UpdateList(id,{favorites, name});
        return res.status(200).json(client);
    }catch (error){
        return res.status(404).json({ message: 'Information not found' });
    }
}

module.exports = {
  handlerAllList,
  handlerListById,
  handlerListByEmail,
  handlerDeleteList,
  handlerCreateList,
  handlerUpdateList,
};