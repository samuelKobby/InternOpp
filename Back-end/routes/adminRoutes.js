const express = require('express');
const { protect, admin } = require('../middlewares/authMiddleware');
const { check } = require('express-validator');
const {
  getUsers,
  deleteUser,
  createInternship,
  updateInternship,
  deleteInternship,
  getApplications,
  updateApplicationStatus,
} = require('../controllers/adminController');

const router = express.Router();

// User routes
router.get('/users', protect, admin, getUsers);
router.delete('/users/:id', protect, admin, deleteUser);

// Internship routes
router.post(
  '/internships',
  protect,
  admin,
  [
    check('title', 'Title is required').notEmpty(),
    check('company', 'Company is required').notEmpty(),
    check('location', 'Location is required').notEmpty(),
    check('description', 'Description is required').notEmpty(),
    check('requirements', 'Requirements are required').notEmpty(),
    check('deadline', 'Deadline is required').notEmpty(),
  ],
  createInternship
);
router.put('/internships/:id', protect, admin, updateInternship);
router.delete('/internships/:id', protect, admin, deleteInternship);

// Application routes
router.get('/applications', protect, admin, getApplications);
router.put(
  '/applications/:id',
  protect,
  admin,
  [check('status', 'Status is required').isIn(['pending', 'approved', 'rejected'])],
  updateApplicationStatus
);

module.exports = router;