const mongoose = require('mongoose');

const favorite = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        description: {
                type: String,
        },
        link: {
            type: String,
        },
    },
    { _id: false }
);

const FavoritesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        favorites: {
            type: [favorite]
        }
    }
);

module.exports = mongoose.model('Favorite', FavoritesSchema);