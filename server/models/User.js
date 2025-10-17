const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['household', 'provider'],
    default: 'household',
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);

async function createUser(data) {
  const user = new User(data);
  await user.save();
  return user;
}

async function findUserByEmail(email) {
  return await User.findOne({ email });
}

async function findUserById(id) {
  return await User.findById(id);
}

async function updateUser(id, data) {
  return await User.findByIdAndUpdate(id, data, { new: true });
}

async function deleteUser(id) {
  await User.findByIdAndDelete(id);
}

module.exports = {
  User,
  createUser,
  findUserByEmail,
  findUserById,
  updateUser,
  deleteUser,
};