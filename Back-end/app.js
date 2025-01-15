const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { errorHandler } = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db');
require('dotenv').config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/internships', require('./routes/internshipRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/settings', require('./routes/settingsRoutes'));

// Error Handling
app.use(errorHandler);

module.exports = app;