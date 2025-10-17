const express = require('express');
const { Provider, findAllProviders, findProviderById, updateProvider, findProviderByUserId } = require('../models/Provider');
const auth = require('../middleware/auth');

const router = express.Router();

// Get current provider
router.get('/me', auth, async (req, res) => {
  try {
    const provider = await findProviderByUserId(req.user._id);
    if (!provider) return res.status(404).json({ message: 'Provider not found' });
    res.json(provider);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get providers by service
router.get('/service/:serviceId', async (req, res) => {
  try {
    const providers = await findAllProviders({ services: req.params.serviceId });
    res.json(providers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get provider profile
router.get('/:id', async (req, res) => {
  try {
    const provider = await findProviderById(req.params.id);
    if (!provider) return res.status(404).json({ message: 'Provider not found' });
    res.json(provider);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update provider profile (protected)
router.put('/:id', auth, async (req, res) => {
  if (req.user.role !== 'provider') return res.status(403).json({ message: 'Access denied' });
  try {
    const provider = await updateProvider(req.params.id, req.body);
    res.json(provider);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;