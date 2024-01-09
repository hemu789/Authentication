import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    types: String,
    required: true,
    unique: true,
  },

  email: {
    types: String,
    required: true,
    unique: true,
  },
  password: {
    types: String,
    required: true,
  },
},{timestamps : true});

const User = mongoose.model ('User', userSchema);

export default User;
