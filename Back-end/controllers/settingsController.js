const Settings = require('../models/Settings');
const { validationResult } = require('express-validator');

// @desc    Get user settings
// @route   GET /api/settings
// @access  Private
const getUserSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne({ userId: req.user._id });
    
    if (!settings) {
      settings = await Settings.create({ userId: req.user._id });
    }
    
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update user settings
// @route   PUT /api/settings
// @access  Private
const updateUserSettings = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { searchPreferences, notifications, theme } = req.body;
    let settings = await Settings.findOne({ userId: req.user._id });

    if (!settings) {
      settings = new Settings({ userId: req.user._id });
    }

    if (searchPreferences) {
      settings.searchPreferences = {
        ...settings.searchPreferences,
        ...searchPreferences
      };
    }

    if (notifications) {
      settings.notifications = {
        ...settings.notifications,
        ...notifications
      };
    }

    if (theme) {
      settings.theme = theme;
    }

    const updatedSettings = await settings.save();
    res.json(updatedSettings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Reset user settings to default
// @route   POST /api/settings/reset
// @access  Private
const resetUserSettings = async (req, res) => {
  try {
    await Settings.findOneAndDelete({ userId: req.user._id });
    const newSettings = await Settings.create({ userId: req.user._id });
    res.json(newSettings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getUserSettings,
  updateUserSettings,
  resetUserSettings
};