const express = require('express');
const { protect, admin } = require('../middlewares/authMiddleware');
const { check } = require('express-validator');
const {
  getUserNotifications,
  createNotification,
  markNotificationAsRead,
  deleteNotification
} = require('../controllers/notificationController');

const router = express.Router();

router.get('/', protect, getUserNotifications);
router.post(
  '/',
  protect,
  admin,
  [
    check('title', 'Title is required').notEmpty(),
    check('message', 'Message is required').notEmpty(),
    check('type', 'Invalid notification type').isIn(['info', 'success', 'warning', 'error'])
  ],
  createNotification
);
router.put('/:id/read', protect, markNotificationAsRead);
router.delete('/:id', protect, deleteNotification);

module.exports = router;