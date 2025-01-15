import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Search,
  Edit2,
  Trash2,
  MoreVertical,
  Filter,
  Download,
  PlusCircle,
  TrendingUp,
  Users,
  Clock
} from 'lucide-react';
import styles from './InternshipManagementPage.module.css';

const InternshipManagementPage = () => {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    description: '',
    requirements: '',
    deadline: ''
  });

  // State for search and filter
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  // Sample data (replace with real data when backend is implemented)
  const [internships, setInternships] = useState([
    {
      id: 1,
      title: 'Software Developer Intern',
      company: 'Tech Corp',
      location: 'New York, NY',
      type: 'Full-time',
      status: 'Active',
      applications: 45,
      posted: '2024-01-01',
      deadline: '2024-02-01'
    },
    {
      id: 2,
      title: 'Marketing Intern',
      company: 'Marketing Pro',
      location: 'Remote',
      type: 'Part-time',
      status: 'Closed',
      applications: 32,
      posted: '2024-01-02',
      deadline: '2024-02-15'
    },
    {
      id: 3,
      title: 'Data Science Intern',
      company: 'Data Analytics Inc',
      location: 'San Francisco, CA',
      type: 'Full-time',
      status: 'Active',
      applications: 28,
      posted: '2024-01-03',
      deadline: '2024-02-28'
    },
    {
      id: 4,
      title: 'UX Design Intern',
      company: 'Design Studio',
      location: 'Los Angeles, CA',
      type: 'Part-time',
      status: 'Draft',
      applications: 0,
      posted: '2024-01-04',
      deadline: '2024-03-01'
    }
  ]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle select changes
  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newInternship = {
      id: internships.length + 1,
      ...formData,
      status: 'Active',
      applications: 0,
      posted: new Date().toISOString().split('T')[0]
    };
    setInternships(prev => [...prev, newInternship]);
    setIsModalOpen(false);
    setFormData({
      title: '',
      company: '',
      location: '',
      type: 'Full-time',
      description: '',
      requirements: '',
      deadline: ''
    });
  };

  // Filter internships based on search query and filters
  const filteredInternships = internships.filter(internship => {
    const matchesSearch = 
      internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      internship.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || internship.status === statusFilter;
    const matchesType = typeFilter === 'all' || internship.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="p-6 space-y-6 bg-white dark:bg-gray-800 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-white">Internship Management</h2>
          <p className="text-muted-foreground text-gray-500 dark:text-gray-400">
            Manage and monitor internship listings
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add New Internship
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-white dark:bg-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800 dark:text-white">Total Applications</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">1,234</div>
            <p className="text-xs text-muted-foreground text-gray-500 dark:text-gray-400">
              <span className="text-green-500">+15.3%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800 dark:text-white">Active Listings</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">23</div>
            <p className="text-xs text-muted-foreground text-gray-500 dark:text-gray-400">
              <span className="text-green-500">+7.1%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800 dark:text-white">Average Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">48h</div>
            <p className="text-xs text-muted-foreground text-gray-500 dark:text-gray-400">
              <span className="text-green-500">-12.5%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-800 dark:text-white">Internships</CardTitle>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground text-gray-500 dark:text-gray-400" />
              <Input
                placeholder="Search internships..."
                className="pl-8 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value)}>
                <SelectTrigger className={`w-[140px] bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 ${styles.selectTrigger}`}>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className={styles.selectContent}>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Closed">Closed</SelectItem>
                  <SelectItem value="Draft">Draft</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={(value) => setTypeFilter(value)}>
                <SelectTrigger className={`w-[140px] bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 ${styles.selectTrigger}`}>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent className={styles.selectContent}>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-gray-200 dark:border-gray-600">
            <div className="grid grid-cols-8 gap-4 p-4 font-medium border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">
              <div className="col-span-2">Title & Company</div>
              <div>Location</div>
              <div>Type</div>
              <div>Status</div>
              <div>Applications</div>
              <div>Deadline</div>
              <div className="text-right">Actions</div>
            </div>
            {filteredInternships.map((internship) => (
              <div
                key={internship.id}
                className="grid grid-cols-8 gap-4 p-4 border-b border-gray-200 dark:border-gray-600 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
              >
                <div className="col-span-2">
                  <div className="font-medium text-gray-800 dark:text-white">{internship.title}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{internship.company}</div>
                </div>
                <div>{internship.location}</div>
                <div>
                  <Badge variant="outline" className="capitalize text-gray-800 dark:text-white">{internship.type}</Badge>
                </div>
                <div>
                  <Badge
                    variant={
                      internship.status === 'Active'
                        ? 'success'
                        : internship.status === 'Draft'
                        ? 'secondary'
                        : 'destructive'
                    }
                    className="capitalize text-gray-800 dark:text-white"
                  >
                    {internship.status}
                  </Badge>
                </div>
                <div>{internship.applications}</div>
                <div>{internship.deadline}</div>
                <div className="flex justify-end space-x-2">
                  <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-100">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-100">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add New Internship Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className={`sm:max-w-[600px] bg-white dark:bg-gray-800 ${styles.dialogContent}`}>
          <DialogHeader>
            <DialogTitle className="text-gray-900 dark:text-white">Add New Internship</DialogTitle>
            <DialogDescription className="text-gray-500 dark:text-gray-400">
              Fill in the details for the new internship position.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title" className="text-gray-700 dark:text-gray-300">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Software Developer Intern"
                  required
                  className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company" className="text-gray-700 dark:text-gray-300">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g., Tech Corp"
                  required
                  className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location" className="text-gray-700 dark:text-gray-300">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g., New York, NY"
                  required
                  className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type" className="text-gray-700 dark:text-gray-300">Type</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value) => handleSelectChange('type', value)}
                >
                  <SelectTrigger className={`w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 ${styles.selectTrigger}`}>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className={styles.selectContent}>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description" className="text-gray-700 dark:text-gray-300">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter internship description"
                  required
                  className="w-full p-2 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="requirements" className="text-gray-700 dark:text-gray-300">Requirements</Label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="Enter internship requirements"
                  required
                  className="w-full p-2 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="deadline" className="text-gray-700 dark:text-gray-300">Application Deadline</Label>
                <Input
                  id="deadline"
                  name="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  required
                  className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600"
                />
              </div>
            </div>
            <DialogFooter className="mt-6">
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600">
                Create Internship
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InternshipManagementPage;
