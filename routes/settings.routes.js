const express = require('express');
const DeliverySetting = require('../models/DeliverySetting');

const router = express.Router();

const getOrCreateSettings = async () => {
  let settings = await DeliverySetting.findOne();
  if (!settings) {
    settings = await DeliverySetting.create({});
  }
  return settings;
};

// @desc    Get public site settings (WhatsApp, contact info, delivery)
// @route   GET /api/settings/site
// @access  Public
router.get('/site', async (req, res) => {
  try {
    const settings = await getOrCreateSettings();
    res.json({
      whatsappNumber: settings.whatsappNumber,
      contactPhone: settings.contactPhone,
      contactEmail: settings.contactEmail,
      facebookUrl: settings.facebookUrl,
      instagramUrl: settings.instagramUrl,
      twitterUrl: settings.twitterUrl,
      chittagongFee: settings.chittagongFee,
      outsideChittagongFee: settings.outsideChittagongFee,
      freeShippingThreshold: settings.freeShippingThreshold,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
