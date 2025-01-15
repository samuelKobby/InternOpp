import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Users, Briefcase, Star, TrendingUp } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line
} from 'recharts';

const DashboardPage = () => {
  // Sample data for statistics
  const stats = [
    {
      title: 'Total Users',
      value: '3,721',
      change: '+20.1%',
      icon: Users,
      trend: 'up'
    },
    {
      title: 'Active Internships',
      value: '245',
      change: '+10.5%',
      icon: Briefcase,
      trend: 'up'
    },
    {
      title: 'Reviews',
      value: '892',
      change: '+12.3%',
      icon: Star,
      trend: 'up'
    },
    {
      title: 'Applications',
      value: '1,234',
      change: '+15.8%',
      icon: TrendingUp,
      trend: 'up'
    }
  ];

  // Sample data for area chart (Applications over time)
  const applicationData = [
    { month: 'Jan', applications: 400 },
    { month: 'Feb', applications: 600 },
    { month: 'Mar', applications: 800 },
    { month: 'Apr', applications: 1000 },
    { month: 'May', applications: 900 },
    { month: 'Jun', applications: 1100 },
    { month: 'Jul', applications: 1300 },
    { month: 'Aug', applications: 1200 },
    { month: 'Sep', applications: 1400 },
    { month: 'Oct', applications: 1600 },
    { month: 'Nov', applications: 1800 },
    { month: 'Dec', applications: 2000 }
  ];

  // Sample data for pie chart (User Distribution)
  const userDistributionData = [
    { name: 'Students', value: 65 },
    { name: 'Employers', value: 25 },
    { name: 'Admins', value: 10 }
  ];

  // Sample data for bar chart (Top Industries)
  const industryData = [
    { name: 'Technology', value: 45 },
    { name: 'Marketing', value: 35 },
    { name: 'Finance', value: 30 },
    { name: 'Healthcare', value: 25 },
    { name: 'Education', value: 20 }
  ];

  // Sample data for line chart (Review Ratings)
  const reviewData = [
    { month: 'Jan', rating: 4.2 },
    { month: 'Feb', rating: 4.3 },
    { month: 'Mar', rating: 4.1 },
    { month: 'Apr', rating: 4.4 },
    { month: 'May', rating: 4.3 },
    { month: 'Jun', rating: 4.5 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Sample data for recent applications
  const recentApplications = [
    {
      id: 1,
      position: 'Software Developer Intern',
      company: 'Tech Corp',
      applicant: 'John Doe',
      status: 'Pending',
      date: '2024-01-14',
      avatar: 'https://picsum.photos/200/300',
      name: 'John Doe'
    },
    {
      id: 2,
      position: 'Marketing Intern',
      company: 'Marketing Pro',
      applicant: 'Jane Smith',
      status: 'Accepted',
      date: '2024-01-13',
      avatar: 'https://picsum.photos/200/301',
      name: 'Jane Smith'
    },
    {
      id: 3,
      position: 'Data Science Intern',
      company: 'Data Analytics Inc',
      applicant: 'Mike Johnson',
      status: 'Rejected',
      date: '2024-01-12',
      avatar: 'https://picsum.photos/200/302',
      name: 'Mike Johnson'
    }
  ];

  return (
    <div className="p-6 space-y-6 bg-white dark:bg-gray-800 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-white">Dashboard</h2>
          <p className="text-muted-foreground text-gray-500 dark:text-gray-400">
            Overview of your platform's performance
          </p>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white dark:bg-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-800 dark:text-white">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
              <p className="text-xs text-muted-foreground text-gray-500 dark:text-gray-400">
                <span className={stat.change.startsWith('+') ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}>
                  {stat.change}
                </span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Applications Over Time Chart */}
        <Card className="bg-white dark:bg-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-800 dark:text-white">Applications Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={applicationData}>
                  <defs>
                    <linearGradient id="colorApplications" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0088FE" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#0088FE" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-600" />
                  <XAxis dataKey="month" stroke="#94a3b8" className="text-gray-500 dark:text-gray-400" />
                  <YAxis stroke="#94a3b8" className="text-gray-500 dark:text-gray-400" />
                  <Tooltip contentStyle={{ backgroundColor: 'rgb(31 41 55)', border: 'none', borderRadius: '0.375rem', color: '#fff' }} itemStyle={{ color: '#fff' }} labelStyle={{ color: '#fff' }} />
                  <Area
                    type="monotone"
                    dataKey="applications"
                    stroke="#0088FE"
                    fillOpacity={1}
                    fill="url(#colorApplications)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* User Distribution Chart */}
        <Card className="bg-white dark:bg-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-800 dark:text-white">User Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={userDistributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label
                  >
                    {userDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: 'rgb(31 41 55)', border: 'none', borderRadius: '0.375rem', color: '#fff' }} itemStyle={{ color: '#fff' }} labelStyle={{ color: '#fff' }} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Industries Chart */}
        <Card className="bg-white dark:bg-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-800 dark:text-white">Top Industries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={industryData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-600" />
                  <XAxis dataKey="name" stroke="#94a3b8" className="text-gray-500 dark:text-gray-400" />
                  <YAxis stroke="#94a3b8" className="text-gray-500 dark:text-gray-400" />
                  <Tooltip contentStyle={{ backgroundColor: 'rgb(31 41 55)', border: 'none', borderRadius: '0.375rem', color: '#fff' }} itemStyle={{ color: '#fff' }} labelStyle={{ color: '#fff' }} />
                  <Bar dataKey="value" fill="#0088FE">
                    {industryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Average Review Ratings Chart */}
        <Card className="bg-white dark:bg-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-800 dark:text-white">Average Review Ratings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={reviewData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-600" />
                  <XAxis dataKey="month" stroke="#94a3b8" className="text-gray-500 dark:text-gray-400" />
                  <YAxis domain={[0, 5]} stroke="#94a3b8" className="text-gray-500 dark:text-gray-400" />
                  <Tooltip contentStyle={{ backgroundColor: 'rgb(31 41 55)', border: 'none', borderRadius: '0.375rem', color: '#fff' }} itemStyle={{ color: '#fff' }} labelStyle={{ color: '#fff' }} />
                  <Line
                    type="monotone"
                    dataKey="rating"
                    stroke="#00C49F"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Applications */}
      <Card className="bg-white dark:bg-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-800 dark:text-white">Recent Applications</CardTitle>
          <p className="text-sm text-gray-500 dark:text-gray-400">Latest internship applications</p>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-gray-200 dark:border-gray-600">
            <div className="grid grid-cols-5 gap-4 p-4 font-medium border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">
              <div>Name</div>
              <div>Position</div>
              <div>Company</div>
              <div>Status</div>
              <div>Date</div>
            </div>
            {recentApplications.map((application, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-4 p-4 border-b border-gray-200 dark:border-gray-600 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <div className="text-sm font-medium text-gray-800 dark:text-white">
                  {application.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {application.position}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {application.company}
                </div>
                <div>
                  <span
                    className={`px-2 py-1 text-sm rounded-full ${
                      application.status === 'Accepted'
                        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                        : application.status === 'Rejected'
                        ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                        : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                    }`}
                  >
                    {application.status}
                  </span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {application.date}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
