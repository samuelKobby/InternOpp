import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Users, Briefcase, MessageSquare, Bell, Settings } from 'lucide-react';

export function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Briefcase, label: 'Internships', path: '/admin/internships' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: MessageSquare, label: 'Reviews', path: '/admin/reviews' },
    { icon: Bell, label: 'Notifications', path: '/admin/notifications' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <div className="w-64 bg-white border-r h-screen">
      <div className="p-4">
        <div className="space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}