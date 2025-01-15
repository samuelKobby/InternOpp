const { validationResult } = require('express-validator');
const User = require('../models/User');
const Internship = require('../models/Internship');
const Application = require('../models/Application');

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete user
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      if (user._id.toString() === req.user._id.toString()) {
        return res.status(400).json({ message: 'Cannot delete own account' });
      }
      await user.remove();
      res.json({ message: 'User removed' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create internship
// @route   POST /api/admin/internships
// @access  Private/Admin
const createInternship = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const internship = new Internship(req.body);
    const createdInternship = await internship.save();
    res.status(201).json(createdInternship);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update internship
// @route   PUT /api/admin/internships/:id
// @access  Private/Admin
const updateInternship = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const internship = await Internship.findById(req.params.id);
    if (internship) {
      Object.assign(internship, req.body);
      const updatedInternship = await internship.save();
      res.json(updatedInternship);
    } else {
      res.status(404).json({ message: 'Internship not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete internship
// @route   DELETE /api/admin/internships/:id
// @access  Private/Admin
const deleteInternship = async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);
    if (internship) {
      await internship.remove();
      res.json({ message: 'Internship removed' });
    } else {
      res.status(404).json({ message: 'Internship not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get all applications
// @route   GET /api/admin/applications
// @access  Private/Admin
const getApplications = async (req, res) => {
  try {
    const applications = await Application.find({})
      .populate('userId', 'name email')
      .populate('internshipId', 'title company');
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update application status
// @route   PUT /api/admin/applications/:id
// @access  Private/Admin
const updateApplicationStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const application = await Application.findById(req.params.id);
    if (application) {
      application.status = status;
      const updatedApplication = await application.save();
      res.json(updatedApplication);
    } else {
      res.status(404).json({ message: 'Application not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getUsers,
  deleteUser,
  createInternship,
  updateInternship,
  deleteInternship,
  getApplications,
  updateApplicationStatus,
};