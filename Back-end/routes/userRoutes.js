const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { check } = require('express-validator');
const {
  getUserProfile,
  updateUserProfile
} = require('../controllers/userController');

const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.put(
  '/profile',
  protect,
  [
    check('email', 'Please include a valid email').optional().isEmail(),
    check('password', 'Password must be at least 6 characters').optional().isLength({ min: 6 })
  ],
  updateUserProfile
);

module.exports = router;