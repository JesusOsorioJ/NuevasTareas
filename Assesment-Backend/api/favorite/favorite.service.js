const FavoriteModel = require("./favorite.model");

async function AllList() {
  return await FavoriteModel.find();
}

async function ListById(id) {
  return await FavoriteModel.findById(id);
}
async function ListByEmail(email) {
  return await FavoriteModel.find({ email: email });
}
async function DeleteList(id) {
  return await FavoriteModel.findByIdAndRemove(id);
}

async function CreateNewList(body) {
    return await FavoriteModel.create(body);
}

async function UpdateList(id, body) {
  const updatedFavorite = await FavoriteModel.findByIdAndUpdate(id, body, {
    new: true,
  });
  return updatedFavorite;
}

module.exports = {
  AllList,
  ListById,
  ListByEmail,
  DeleteList,
  CreateNewList,
  UpdateList,
};
