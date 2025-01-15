import React, { useState } from 'react';
import { Search, Filter, Shield, UserX, Mail, Clock, Settings, MoreVertical } from 'lucide-react';

const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Mock user data
  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      role: "student",
      status: "active",
      joinDate: "2024-01-05",
      applications: 12,
      lastActive: "2024-01-13"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@example.com",
      role: "admin",
      status: "active",
      joinDate: "2023-12-15",
      applications: 0,
      lastActive: "2024-01-12"
    },
    {
      id: 3,
      name: "Emma Wilson",
      email: "emma.w@example.com",
      role: "student",
      status: "inactive",
      joinDate: "2023-11-20",
      applications: 5,
      lastActive: "2023-12-28"
    }
  ];

  const UserDetailsModal = ({ user }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-bold">User Details</h2>
          <button 
            onClick={() => setShowDetailsModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-4">Account Information</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <p className="font-medium">{user.name}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Role</label>
                <p className="font-medium capitalize">{user.role}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Join Date</label>
                <p className="font-medium">{user.joinDate}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Activity & Stats</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600">Applications Submitted</label>
                <p className="font-medium">{user.applications}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Last Active</label>
                <p className="font-medium">{user.lastActive}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Account Status</label>
                <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                  user.status === 'active' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {user.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t pt-6">
          <h3 className="font-semibold mb-4">Actions</h3>
          <div className="flex space-x-3">
            <button className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
              <Mail size={16} className="mr-2" />
              Send Email
            </button>
            <button className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
              <Shield size={16} className="mr-2" />
              Change Role
            </button>
            <button className="flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md">
              <UserX size={16} className="mr-2" />
              Deactivate Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
            <p className="text-gray-600">Manage and monitor user accounts</p>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <Settings size={20} className="mr-2" />
            Account Settings
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-600">Total Users</h3>
              <span className="text-green-500 text-sm">+12%</span>
            </div>
            <p className="text-2xl font-bold mt-2">4,209</p>
            <p className="text-sm text-gray-500 mt-1">142 this week</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-600">Active Users</h3>
              <span className="text-green-500 text-sm">+8%</span>
            </div>
            <p className="text-2xl font-bold mt-2">3,872</p>
            <p className="text-sm text-gray-500 mt-1">92% of total users</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-600">New Signups</h3>
              <span className="text-green-500 text-sm">+23%</span>
            </div>
            <p className="text-2xl font-bold mt-2">284</p>
            <p className="text-sm text-gray-500 mt-1">Last 7 days</p>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Filter size={20} className="mr-2" />
                Filters
              </button>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Roles</option>
                <option>Student</option>
                <option>Admin</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-3 text-gray-600">User</th>
                  <th className="text-left px-6 py-3 text-gray-600">Role</th>
                  <th className="text-left px-6 py-3 text-gray-600">Status</th>
                  <th className="text-left px-6 py-3 text-gray-600">Join Date</th>
                  <th className="text-left px-6 py-3 text-gray-600">Applications</th>
                  <th className="text-left px-6 py-3 text-gray-600">Last Active</th>
                  <th className="px-6 py-3"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-600">{user.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        user.role === 'admin' 
                          ? 'bg-purple-100 text-purple-600' 
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        user.status === 'active' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{user.joinDate}</td>
                    <td className="px-6 py-4">{user.applications}</td>
                    <td className="px-6 py-4 text-gray-600">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {user.lastActive}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end space-x-2">
                        <button 
                          onClick={() => {
                            setSelectedUser(user);
                            setShowDetailsModal(true);
                          }}
                          className="text-gray-600 hover:text-blue-600"
                        >
                          View Details
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded-full">
                          <MoreVertical size={16} className="text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* User Details Modal */}
        {showDetailsModal && selectedUser && (
          <UserDetailsModal user={selectedUser} />
        )}
      </div>
    </div>
  );
};

export default UserManagement;
