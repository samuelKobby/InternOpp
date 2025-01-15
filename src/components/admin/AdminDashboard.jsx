import React from 'react';
import { Users, Briefcase, TrendingUp, Calendar } from 'lucide-react';

const AdminDashboard = () => {
  // Mock data for metrics
  const metrics = {
    totalUsers: 4209,
    activeInternships: 873,
    monthlyApplications: 9324,
    successfulPlacements: 432
  };

  // Mock data for recent internships
  const recentInternships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Tech Solutions Inc.",
      applicants: 45,
      status: "active"
    },
    {
      id: 2,
      title: "Marketing Coordinator Intern",
      company: "Growth Marketing Co",
      applicants: 32,
      status: "active"
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "Analytics Pro",
      applicants: 28,
      status: "inactive"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back, Admin</p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="text-blue-600" size={24} />
              </div>
              <span className="text-sm font-semibold text-green-500">+12%</span>
            </div>
            <h3 className="text-gray-600 text-sm">Total Users</h3>
            <p className="text-2xl font-bold text-gray-800">{metrics.totalUsers}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Briefcase className="text-orange-600" size={24} />
              </div>
              <span className="text-sm font-semibold text-green-500">+8%</span>
            </div>
            <h3 className="text-gray-600 text-sm">Active Internships</h3>
            <p className="text-2xl font-bold text-gray-800">{metrics.activeInternships}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <TrendingUp className="text-purple-600" size={24} />
              </div>
              <span className="text-sm font-semibold text-green-500">+23%</span>
            </div>
            <h3 className="text-gray-600 text-sm">Applications This Month</h3>
            <p className="text-2xl font-bold text-gray-800">{metrics.monthlyApplications}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Calendar className="text-green-600" size={24} />
              </div>
              <span className="text-sm font-semibold text-green-500">+15%</span>
            </div>
            <h3 className="text-gray-600 text-sm">Successful Placements</h3>
            <p className="text-2xl font-bold text-gray-800">{metrics.successfulPlacements}</p>
          </div>
        </div>

        {/* Recent Internships Table */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Internships</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-600 text-sm">
                    <th className="pb-4">Title</th>
                    <th className="pb-4">Company</th>
                    <th className="pb-4">Applicants</th>
                    <th className="pb-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentInternships.map((internship) => (
                    <tr key={internship.id} className="border-t">
                      <td className="py-4">{internship.title}</td>
                      <td className="py-4 text-gray-600">{internship.company}</td>
                      <td className="py-4">{internship.applicants}</td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          internship.status === 'active' 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {internship.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
