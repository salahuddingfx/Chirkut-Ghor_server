const mongoose = require('mongoose');

const deliverySettingSchema = new mongoose.Schema({
  chittagongFee: {
    type: Number,
    default: 150,
    min: 0,
    description: 'Delivery fee within Chittagong Division (Cox\'s Bazar base)',
  },
  outsideChittagongFee: {
    type: Number,
    default: 150,
    min: 0,
    description: 'Delivery fee outside Chittagong Division',
  },
  freeShippingThreshold: {
    type: Number,
    default: 2500,
    min: 0,
  },
  whatsappNumber: {
    type: String,
    default: '8801851075537',
    description: 'WhatsApp number with country code (no + prefix)',
  },
  contactPhone: {
    type: String,
    default: '+880 1851-075537',
    description: 'Display phone number for contact',
  },
  contactEmail: {
    type: String,
    default: 'chirkutghor@gmail.com',
    description: 'Contact email address',
  },
  facebookUrl: {
    type: String,
    default: '',
    description: 'Facebook page URL',
  },
  instagramUrl: {
    type: String,
    default: '',
    description: 'Instagram profile URL',
  },
  twitterUrl: {
    type: String,
    default: '',
    description: 'Twitter/X profile URL',
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

deliverySettingSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('DeliverySetting', deliverySettingSchema);
