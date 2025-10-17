const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  services: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
  }],
  designation: {
    type: String,
  },
  hourlyRate: {
    type: Number,
  },
  bio: {
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

const Provider = mongoose.model('Provider', ProviderSchema);

async function createProvider(data) {
  const provider = new Provider(data);
  await provider.save();
  return provider;
}

async function findProviderById(id) {
  return await Provider.findById(id).populate('user').populate('services');
}

async function findProviderByUserId(userId) {
  return await Provider.findOne({ user: userId }).populate('user').populate('services');
}

async function findAllProviders(filter = {}) {
  return await Provider.find(filter).populate('user').populate('services');
}

async function updateProvider(id, data) {
  return await Provider.findByIdAndUpdate(id, data, { new: true });
}

async function deleteProvider(id) {
  await Provider.findByIdAndDelete(id);
}

module.exports = {
  Provider,
  createProvider,
  findProviderById,
  findProviderByUserId,
  findAllProviders,
  updateProvider,
  deleteProvider,
};