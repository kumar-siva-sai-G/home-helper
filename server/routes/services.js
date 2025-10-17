const express = require('express');
const { Service, findAllServices, createService } = require('../models/Service');

const router = express.Router();

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await findAllServices();
    res.json(services);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add service (admin only, but for now public)
router.post('/', async (req, res) => {
  const { name, description, icon } = req.body;
  try {
    const service = await createService({ name, description, icon });
    res.json(service);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;