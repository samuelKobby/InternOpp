import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { ThemeProvider } from '../context/ThemeContext';

const Layout = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <main className="container mx-auto px-4 py-20">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
};

export { Layout };
