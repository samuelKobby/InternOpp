const { validationResult } = require('express-validator');
const { Internship, User } = require('../models');

// @desc    Create new internship
// @route   POST /api/internships
// @access  Private/Admin
const createInternship = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      description,
      requirements,
      type,
      duration,
      stipend,
      applicationDeadline,
      companyLogo, // This will be a base64 string
      status
    } = req.body;

    const internship = await Internship.create({
      title,
      company,
      location,
      description,
      requirements,
      type,
      duration,
      stipend,
      applicationDeadline,
      companyLogo,
      status
    });

    res.status(201).json(internship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update internship
// @route   PUT /api/internships/:id
// @access  Private/Admin
const updateInternship = async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);
    
    if (!internship) {
      return res.status(404).json({ message: 'Internship not found' });
    }

    const updatedInternship = await Internship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json(updatedInternship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete internship
// @route   DELETE /api/internships/:id
// @access  Private/Admin
const deleteInternship = async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);
    
    if (!internship) {
      return res.status(404).json({ message: 'Internship not found' });
    }

    await internship.remove();
    res.json({ message: 'Internship removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Search internships
// @route   GET /api/internships/search
// @access  Public
const searchInternships = async (req, res) => {
  try {
    const { query, location, industry, type, duration } = req.query;
    let filter = {};

    if (query) {
      filter.$or = [
        { title: { $regex: query, $options: 'i' } },
        { company: { $regex: query, $options: 'i' } }
      ];
    }

    if (location) {
      filter.location = { $regex: location, $options: 'i' };
    }

    if (industry) {
      filter.industry = industry;
    }

    if (type && type !== 'all') {
      filter.type = type;
    }

    if (duration && duration !== 'any') {
      filter.duration = duration;
    }

    const internships = await Internship.find(filter);
    res.json(internships);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get internship by ID
// @route   GET /api/internships/:id
// @access  Public
const getInternshipById = async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);
    if (internship) {
      res.json(internship);
    } else {
      res.status(404).json({ message: 'Internship not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get similar internships
// @route   GET /api/internships/:id/similar
// @access  Public
const getSimilarInternships = async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);
    if (!internship) {
      return res.status(404).json({ message: 'Internship not found' });
    }

    const similarInternships = await Internship.find({
      _id: { $ne: internship._id },
      $or: [
        { industry: internship.industry },
        { skills: { $in: internship.skills } }
      ]
    }).limit(3);

    res.json(similarInternships);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Bookmark internship
// @route   POST /api/internships/:id/bookmark
// @access  Private
const bookmarkInternship = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const internshipId = req.params.id;

    if (!user.bookmarkedInternships.includes(internshipId)) {
      user.bookmarkedInternships.push(internshipId);
      await user.save();
    }

    res.json({ message: 'Internship bookmarked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Remove bookmark
// @route   DELETE /api/internships/:id/bookmark
// @access  Private
const removeBookmark = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const internshipId = req.params.id;

    user.bookmarkedInternships = user.bookmarkedInternships.filter(
      id => id.toString() !== internshipId
    );
    await user.save();

    res.json({ message: 'Bookmark removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createInternship,
  searchInternships,
  getInternshipById,
  getSimilarInternships,
  bookmarkInternship,
  removeBookmark,
  updateInternship,
  deleteInternship
};