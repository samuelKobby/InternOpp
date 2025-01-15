import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, Bell, Settings, LogOut, LayoutDashboard, Users, Briefcase, Star, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const isAdmin = user?.role === 'admin';

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/auth/login');
  };

  const adminLinks = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/users', label: 'Users', icon: Users },
    { path: '/admin/internships', label: 'Internships', icon: Briefcase },
    { path: '/admin/reviews', label: 'Reviews', icon: Star },
  ];

  // If no user is logged in, show only login/signup links
  if (!user) {
    return (
      <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full top-0 z-50 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-blue-600 dark:text-blue-400 text-xl font-bold">
                InternshipFinder
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link
                to="/auth/login"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Sign In
              </Link>
              <Link
                to="/auth/signup"
                className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link to="/" className="text-blue-600 dark:text-blue-400 text-xl font-bold">
              InternshipFinder
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Regular Links */}
            <Link
              to="/"
              className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${location.pathname === '/' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/search"
              className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${location.pathname === '/search' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
            >
              Find Internships
            </Link>
            <Link
              to="/about"
              className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${location.pathname === '/about' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
            >
              About
            </Link>

            {/* Admin Links */}
            {isAdmin && (
              <div className="flex items-center space-x-4">
                {adminLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center space-x-1 ${location.pathname === link.path ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link
                to="/notifications"
                className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${location.pathname === '/notifications' ? 'text-blue-600 dark:text-blue-400' : ''}`}
              >
                <Bell className="w-5 h-5" />
              </Link>
              <Link
                to="/profile"
                className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${location.pathname === '/profile' ? 'text-blue-600 dark:text-blue-400' : ''}`}
              >
                <User className="w-5 h-5" />
              </Link>
              <Link
                to="/settings"
                className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${location.pathname === '/settings' ? 'text-blue-600 dark:text-blue-400' : ''}`}
              >
                <Settings className="w-5 h-5" />
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-2">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/search"
              className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              Find Internships
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            {/* Admin Links in Mobile Menu */}
            {isAdmin && (
              <>
                {adminLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </>
            )}

            <Link
              to="/notifications"
              className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              Notifications
            </Link>
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            <Link
              to="/settings"
              className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              Settings
            </Link>
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
