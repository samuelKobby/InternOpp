import React, { useState } from 'react';
import { Plus, Pencil, Trash2, Search, Filter, MoreVertical } from 'lucide-react';

const InternshipManagement = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);

  // Mock data for internships
  const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      stipend: "$3000/month",
      applicants: 45,
      status: "active",
      posted: "2024-01-10"
    },
    {
      id: 2,
      title: "Marketing Coordinator Intern",
      company: "Growth Marketing Co",
      location: "New York, NY",
      stipend: "$2500/month",
      applicants: 32,
      status: "active",
      posted: "2024-01-08"
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "Analytics Pro",
      location: "Remote",
      stipend: "$4000/month",
      applicants: 28,
      status: "inactive",
      posted: "2024-01-05"
    }
  ];

  const InternshipForm = ({ internship = null }) => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Job Title
        </label>
        <input
          type="text"
          defaultValue={internship?.title}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company
        </label>
        <input
          type="text"
          defaultValue={internship?.company}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            defaultValue={internship?.location}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Stipend
          </label>
          <input
            type="text"
            defaultValue={internship?.stipend}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Requirements
        </label>
        <textarea
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="flex justify-end space-x-3">
        <button
          onClick={() => {
            setShowAddModal(false);
            setSelectedInternship(null);
          }}
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
        >
          Cancel
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          {internship ? 'Update Internship' : 'Create Internship'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Internship Management</h1>
            <p className="text-gray-600">Manage and monitor all internship listings</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus size={20} className="mr-2" />
            Add New Internship
          </button>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search internships..."
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
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Internships Table */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-3 text-gray-600">Title</th>
                  <th className="text-left px-6 py-3 text-gray-600">Company</th>
                  <th className="text-left px-6 py-3 text-gray-600">Location</th>
                  <th className="text-left px-6 py-3 text-gray-600">Stipend</th>
                  <th className="text-left px-6 py-3 text-gray-600">Applicants</th>
                  <th className="text-left px-6 py-3 text-gray-600">Status</th>
                  <th className="text-left px-6 py-3 text-gray-600">Posted</th>
                  <th className="px-6 py-3"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {internships.map((internship) => (
                  <tr key={internship.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{internship.title}</td>
                    <td className="px-6 py-4 text-gray-600">{internship.company}</td>
                    <td className="px-6 py-4 text-gray-600">{internship.location}</td>
                    <td className="px-6 py-4 text-gray-600">{internship.stipend}</td>
                    <td className="px-6 py-4">{internship.applicants}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        internship.status === 'active' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {internship.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{internship.posted}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end space-x-2">
                        <button 
                          onClick={() => setSelectedInternship(internship)}
                          className="p-1 hover:bg-gray-100 rounded-full"
                        >
                          <Pencil size={16} className="text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded-full">
                          <Trash2 size={16} className="text-red-600" />
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

        {/* Add/Edit Modal */}
        {(showAddModal || selectedInternship) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
              <h2 className="text-xl font-bold mb-4">
                {selectedInternship ? 'Edit Internship' : 'Add New Internship'}
              </h2>
              <InternshipForm internship={selectedInternship} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternshipManagement;
