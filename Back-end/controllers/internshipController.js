const { validationResult } = require('express-validator');
const Internship = require('../models/Internship');
const User = require('../models/User');

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
  searchInternships,
  getInternshipById,
  getSimilarInternships,
  bookmarkInternship,
  removeBookmark
};