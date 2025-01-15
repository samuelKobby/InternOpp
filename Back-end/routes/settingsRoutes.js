const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { check } = require('express-validator');
const {
  getUserSettings,
  updateUserSettings,
  resetUserSettings
} = require('../controllers/settingsController');

const router = express.Router();

router.get('/', protect, getUserSettings);
router.put(
  '/',
  protect,
  [
    check('theme').optional().isIn(['light', 'dark', 'system']),
    check('searchPreferences.defaultLocation').optional(),
    check('searchPreferences.defaultJobType').optional(),
    check('searchPreferences.defaultSalaryRange').optional(),
    check('notifications.emailNotifications').optional().isBoolean()
  ],
  updateUserSettings
);
router.post('/reset', protect, resetUserSettings);

module.exports = router;