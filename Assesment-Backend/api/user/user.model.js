const mongoose= require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
    }
)

UserSchema.pre('save', async function (next) {
    const user = this;

    try {

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);

      user.password = hash;
      next();

    } catch (error) {
        return next(error);
    }
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
    const user = this;
    return bcrypt.compare(candidatePassword, user.password);
};

UserSchema.virtual('profile').get(function () {
    const {
        _id,
        email
      } = this;

    return {
        _id,
        email
    };
});


module.exports= mongoose.model('User', UserSchema)