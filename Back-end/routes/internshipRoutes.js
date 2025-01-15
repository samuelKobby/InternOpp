const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const {
  searchInternships,
  getInternshipById,
  getSimilarInternships,
  bookmarkInternship,
  removeBookmark
} = require('../controllers/internshipController');

const router = express.Router();

router.get('/search', searchInternships);
router.get('/:id', getInternshipById);
router.get('/:id/similar', getSimilarInternships);
router.post('/:id/bookmark', protect, bookmarkInternship);
router.delete('/:id/bookmark', protect, removeBookmark);

module.exports = router;