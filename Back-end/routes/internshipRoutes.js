const express = require('express');
const { protect, admin } = require('../middlewares/authMiddleware');
const {
  createInternship,
  searchInternships,
  getInternshipById,
  getSimilarInternships,
  bookmarkInternship,
  removeBookmark,
  updateInternship,
  deleteInternship
} = require('../controllers/internshipController');

const router = express.Router();

// Admin routes
router.post('/', protect, admin, createInternship);
router.put('/:id', protect, admin, updateInternship);
router.delete('/:id', protect, admin, deleteInternship);

// Public routes
router.get('/search', searchInternships);
router.get('/:id', getInternshipById);
router.get('/:id/similar', getSimilarInternships);

// User routes
router.post('/:id/bookmark', protect, bookmarkInternship);
router.delete('/:id/bookmark', protect, removeBookmark);

module.exports = router;