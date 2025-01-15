const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  searchPreferences: {
    defaultLocation: {
      type: String,
      default: 'all'
    },
    defaultJobType: {
      type: String,
      default: 'all'
    },
    defaultSalaryRange: {
      type: String,
      default: 'all'
    }
  },
  notifications: {
    emailNotifications: {
      type: Boolean,
      default: true
    }
  },
  theme: {
    type: String,
    enum: ['light', 'dark', 'system'],
    default: 'light'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Settings', settingsSchema);