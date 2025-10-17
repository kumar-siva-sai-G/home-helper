const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  icon: {
    type: String,
  },
  category: {
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

const Service = mongoose.model('Service', ServiceSchema);

async function createService(data) {
  const service = new Service(data);
  await service.save();
  return service;
}

async function findServiceById(id) {
  return await Service.findById(id);
}

async function findAllServices() {
  return await Service.find();
}

async function updateService(id, data) {
  return await Service.findByIdAndUpdate(id, data, { new: true });
}

async function deleteService(id) {
  await Service.findByIdAndDelete(id);
}

module.exports = {
  Service,
  createService,
  findServiceById,
  findAllServices,
  updateService,
  deleteService,
};