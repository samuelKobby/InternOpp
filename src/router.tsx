import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { InternshipDetailsPage } from './pages/InternshipDetailsPage';
import { ProfilePage } from './pages/ProfilePage';
import { AboutPage } from './pages/AboutPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { SettingsPage } from './pages/SettingsPage';
import { ErrorPage } from './pages/ErrorPage';
import { Layout } from './components/Layout';
import { SignUpPage } from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';
import { default as AdminDashboardPage } from './pages/admin/DashboardPage';
import { default as AdminInternshipsPage } from './pages/admin/InternshipManagementPage';
import { default as AdminReviewsPage } from './pages/admin/ReviewModerationPage';
import { default as AdminUsersPage } from './pages/admin/UserManagementPage';
import { ThemeProvider } from './context/ThemeContext'; 

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'search',
        element: <SearchResultsPage />,
      },
      {
        path: 'internship/:id',
        element: <InternshipDetailsPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'notifications',
        element: <NotificationsPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        element: (
          <ThemeProvider>
            <LoginPage />
          </ThemeProvider>
        ),
      },
      {
        path: 'signup',
        element: (
          <ThemeProvider>
            <SignUpPage />
          </ThemeProvider>
        ),
      },
    ],
  },
  {
    path: 'admin',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: <AdminDashboardPage />,
      },
      {
        path: 'users',
        element: <AdminUsersPage />,
      },
      {
        path: 'internships',
        element: <AdminInternshipsPage />,
      },
      {
        path: 'reviews',
        element: <AdminReviewsPage />,
      },
    ],
  },
]);