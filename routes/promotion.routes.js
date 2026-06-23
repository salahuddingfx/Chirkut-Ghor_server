const express = require('express');
const { getActiveHotOffer, getActiveFlashSale } = require('../controllers/admin.controller');

const router = express.Router();

router.get('/hot-offer', getActiveHotOffer);
router.get('/flash-sale', getActiveFlashSale);

module.exports = router;
