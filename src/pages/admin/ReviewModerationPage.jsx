import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Star,
  Flag,
  Filter,
  AlertTriangle,
  ThumbsUp,
  ThumbsDown,
  MoreVertical,
  TrendingUp
} from 'lucide-react';
import styles from './ReviewModerationPage.module.css';

const ReviewModerationPage = () => {
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [flaggedFilter, setFlaggedFilter] = useState('all');

  // Sample data (replace with real data when backend is implemented)
  const [reviews] = useState([
    {
      id: 1,
      user: 'John Doe',
      company: 'Tech Corp',
      rating: 4,
      status: 'Pending',
      content: 'Great internship experience! Learned a lot about software development and team collaboration. The mentorship program was excellent.',
      submitted: '2024-01-14',
      flags: 0
    },
    {
      id: 2,
      user: 'Jane Smith',
      company: 'Marketing Pro',
      rating: 3,
      status: 'Approved',
      content: 'Good learning opportunity but could use better mentorship. The work environment was positive though.',
      submitted: '2024-01-13',
      flags: 2
    },
    {
      id: 3,
      user: 'Mike Johnson',
      company: 'Data Analytics Inc',
      rating: 2,
      status: 'Rejected',
      content: 'Poor communication and unclear expectations. Would not recommend.',
      submitted: '2024-01-12',
      flags: 5
    },
    {
      id: 4,
      user: 'Sarah Williams',
      company: 'Design Studio',
      rating: 5,
      status: 'Pending',
      content: 'Amazing experience! The team was very supportive and I learned so much about UX design.',
      submitted: '2024-01-11',
      flags: 0
    }
  ]);

  // Filter reviews based on search query and filters
  const filteredReviews = reviews.filter(review => {
    const matchesSearch = 
      review.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || review.status === statusFilter;
    const matchesRating = ratingFilter === 'all' || review.rating === parseInt(ratingFilter);
    const matchesFlagged = flaggedFilter === 'all' || 
      (flaggedFilter === 'flagged' && review.flags > 0) ||
      (flaggedFilter === 'unflagged' && review.flags === 0);

    return matchesSearch && matchesStatus && matchesRating && matchesFlagged;
  });

  return (
    <div className="p-6 space-y-6 bg-white dark:bg-gray-800 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-white">Review Moderation</h2>
          <p className="text-muted-foreground text-gray-500 dark:text-gray-400">
            Manage and moderate user reviews
          </p>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-white dark:bg-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800 dark:text-white">Total Reviews</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground text-gray-600 dark:text-gray-300" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">892</div>
            <p className="text-xs text-muted-foreground text-gray-600 dark:text-gray-300">
              <span className="text-green-500">+12.3%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800 dark:text-white">Pending Reviews</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground text-gray-600 dark:text-gray-300" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">23</div>
            <p className="text-xs text-muted-foreground text-gray-600 dark:text-gray-300">
              <span className="text-red-500">+5.2%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800 dark:text-white">Flagged Reviews</CardTitle>
            <Flag className="h-4 w-4 text-muted-foreground text-gray-600 dark:text-gray-300" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">15</div>
            <p className="text-xs text-muted-foreground text-gray-600 dark:text-gray-300">
              <span className="text-yellow-500">+2.5%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800 dark:text-white">Average Rating</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground text-gray-600 dark:text-gray-300" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">4.2</div>
            <p className="text-xs text-muted-foreground text-gray-600 dark:text-gray-300">
              <span className="text-green-500">+0.3</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-800 dark:text-white">Reviews</CardTitle>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground text-gray-600 dark:text-gray-300" />
              <Input
                placeholder="Search reviews..."
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
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Approved">Approved</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Select value={ratingFilter} onValueChange={(value) => setRatingFilter(value)}>
                <SelectTrigger className={`w-[140px] bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 ${styles.selectTrigger}`}>
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent className={styles.selectContent}>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4 Stars</SelectItem>
                  <SelectItem value="3">3 Stars</SelectItem>
                  <SelectItem value="2">2 Stars</SelectItem>
                  <SelectItem value="1">1 Star</SelectItem>
                </SelectContent>
              </Select>
              <Select value={flaggedFilter} onValueChange={(value) => setFlaggedFilter(value)}>
                <SelectTrigger className={`w-[140px] bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 ${styles.selectTrigger}`}>
                  <SelectValue placeholder="Flags" />
                </SelectTrigger>
                <SelectContent className={styles.selectContent}>
                  <SelectItem value="all">All Reviews</SelectItem>
                  <SelectItem value="flagged">Flagged</SelectItem>
                  <SelectItem value="unflagged">Not Flagged</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="max-h-[500px] overflow-y-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900 sticky top-0">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Review</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Company</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rating</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredReviews.map((review) => (
                    <tr key={review.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-4 py-4 whitespace-nowrap">
                        <p className="whitespace-pre-wrap break-words dark:text-gray-400 ">{review.content}</p>
                        <div className="text-sm text-gray-500 mt-1 flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <span>Submitted: {review.submitted}</span>
                          {review.flags > 0 && (
                            <span className="text-red-500 flex items-center gap-1">
                              <Flag className="h-3 w-3" />
                              {review.flags} flags
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap dark:text-gray-400">{review.user}</td>
                      <td className="px-4 py-4 whitespace-nowrap dark:text-gray-400">{review.company}</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current" />
                          {review.rating}/5
                        </Badge>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <Badge
                          variant={
                            review.status === 'Approved'
                              ? 'success'
                              : review.status === 'Rejected'
                              ? 'destructive'
                              : 'secondary'
                          }
                          className="capitalize"
                        >
                          {review.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-100">
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-100">
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewModerationPage;
