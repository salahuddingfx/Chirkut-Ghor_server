const mongoose = require('mongoose');

const flashSaleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 120,
  },
  subtitle: {
    type: String,
    trim: true,
    maxlength: 200,
  },
  badgeText: {
    type: String,
    trim: true,
    maxlength: 40,
    default: 'Flash Sale',
  },
  discountPercent: {
    type: Number,
    min: 0,
    max: 99,
    default: 10,
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }],
  isActive: {
    type: Boolean,
    default: false,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
});

flashSaleSchema.index({ isActive: 1, startDate: 1, endDate: 1 });

module.exports = mongoose.model('FlashSale', flashSaleSchema);
