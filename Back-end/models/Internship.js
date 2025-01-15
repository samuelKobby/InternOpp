const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  companyLogo: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Full-time', 'Part-time', 'remote', 'onsite'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  responsibilities: [{
    type: String,
    required: true
  }],
  requirements: [{
    type: String,
    required: true
  }],
  stipend: {
    type: Number,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Active', 'Draft', 'Closed'],
    default: 'Active'
  },
  deadline: {
    type: Date,
    required: true
  },
  skills: [{
    type: String
  }],
  isRemote: {
    type: Boolean,
    default: false
  },
  industry: {
    type: String,
    required: true
  },
  aboutCompany: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Internship', internshipSchema);