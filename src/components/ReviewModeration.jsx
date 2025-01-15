import React, { useState } from 'react';
import { Search, Filter, ThumbsUp, ThumbsDown, Flag, AlertTriangle, CheckCircle, XCircle, MessageCircle } from 'lucide-react';

const ReviewModeration = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      author: "Alex Thompson",
      company: "Tech Solutions Inc.",
      internshipTitle: "Software Developer Intern",
      rating: 4.5,
      status: "pending",
      flags: 0,
      dateSubmitted: "2024-01-13",
      content: "Great learning experience! The team was very supportive and I got to work on real projects. The mentorship program was excellent and I learned a lot about modern development practices.",
      pros: "Supportive team, real project experience, great mentorship",
      cons: "Sometimes communication could be slow between teams"
    },
    {
      id: 2,
      author: "Maria Garcia",
      company: "Marketing Pro",
      internshipTitle: "Digital Marketing Intern",
      rating: 2.0,
      status: "flagged",
      flags: 3,
      dateSubmitted: "2024-01-12",
      content: "The experience wasn't what was advertised. Most of my time was spent on basic tasks with little guidance or learning opportunities.",
      pros: "Flexible hours, good location",
      cons: "Limited learning opportunities, poor mentorship"
    },
    {
      id: 3,
      author: "James Wilson",
      company: "Design Studio",
      internshipTitle: "UI/UX Design Intern",
      rating: 5.0,
      status: "approved",
      flags: 0,
      dateSubmitted: "2024-01-11",
      content: "Incredible internship experience! Got to work on multiple client projects and received great feedback. The team treated me like a full-time designer.",
      pros: "Real client work, great team culture, excellent feedback",
      cons: "Workload could be intense at times"
    }
  ];

  const ReviewModal = ({ review }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-3xl w-full mx-4">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-bold">Review Details</h2>
          <button 
            onClick={() => setShowReviewModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="space-y-6">
          {/* Review Header */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{review.internshipTitle}</h3>
              <p className="text-gray-600">{review.company}</p>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600 mr-2">{review.rating}</span>
              <span className="text-gray-600">/5.0</span>
            </div>
          </div>

          {/* Review Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Review Content</label>
            <p className="bg-gray-50 p-4 rounded-md">{review.content}</p>
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pros</label>
              <p className="bg-green-50 p-4 rounded-md text-green-800">{review.pros}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cons</label>
              <p className="bg-red-50 p-4 rounded-md text-red-800">{review.cons}</p>
            </div>
          </div>

          {/* Moderation Actions */}
          <div className="border-t pt-6">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Moderation Decision</h4>
                  <p className="text-sm text-gray-600">Choose action for this review</p>
                </div>
                <div className="flex space-x-3">
                  <button className="flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200">
                    <CheckCircle size={18} className="mr-2" />
                    Approve
                  </button>
                  <button className="flex items-center px-4 py-2 bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200">
                    <AlertTriangle size={18} className="mr-2" />
                    Flag for Review
                  </button>
                  <button className="flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200">
                    <XCircle size={18} className="mr-2" />
                    Reject
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Moderation Notes (Optional)</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Add notes about moderation decision..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Review Moderation</h1>
            <p className="text-gray-600">Manage and moderate internship reviews</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <MessageCircle className="text-blue-600" size={24} />
              <span className="text-green-500 text-sm">+8%</span>
            </div>
            <p className="text-2xl font-bold mt-2">1,284</p>
            <p className="text-gray-600">Total Reviews</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <AlertTriangle className="text-yellow-600" size={24} />
              <span className="text-red-500 text-sm">+12%</span>
            </div>
            <p className="text-2xl font-bold mt-2">45</p>
            <p className="text-gray-600">Pending Review</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <Flag className="text-red-600" size={24} />
              <span className="text-red-500 text-sm">+5%</span>
            </div>
            <p className="text-2xl font-bold mt-2">23</p>
            <p className="text-gray-600">Flagged</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <ThumbsUp className="text-green-600" size={24} />
              <span className="text-green-500 text-sm">+15%</span>
            </div>
            <p className="text-2xl font-bold mt-2">4.2</p>
            <p className="text-gray-600">Avg. Rating</p>
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
                  placeholder="Search reviews..."
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
                <option>Pending</option>
                <option>Approved</option>
                <option>Flagged</option>
                <option>Rejected</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Ratings</option>
                <option>5 Stars</option>
                <option>4+ Stars</option>
                <option>3+ Stars</option>
                <option>2+ Stars</option>
                <option>1+ Star</option>
              </select>
            </div>
          </div>
        </div>

        {/* Reviews Table */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-3 text-gray-600">Review</th>
                  <th className="text-left px-6 py-3 text-gray-600">Rating</th>
                  <th className="text-left px-6 py-3 text-gray-600">Status</th>
                  <th className="text-left px-6 py-3 text-gray-600">Flags</th>
                  <th className="text-left px-6 py-3 text-gray-600">Date</th>
                  <th className="px-6 py-3"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium">{review.internshipTitle}</div>
                        <div className="text-sm text-gray-600">{review.company}</div>
                        <div className="text-sm text-gray-500">by {review.author}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="font-medium text-blue-600">{review.rating}</span>
                        <span className="text-gray-600 ml-1">/5.0</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        review.status === 'approved' 
                          ? 'bg-green-100 text-green-600'
                          : review.status === 'flagged'
                          ? 'bg-red-100 text-red-600'
                          : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {review.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Flag size={16} className="text-gray-400 mr-2" />
                        {review.flags}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{review.dateSubmitted}</td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => {
                          setSelectedReview(review);
                          setShowReviewModal(true);
                        }}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Review Modal */}
        {showReviewModal && selectedReview && (
          <ReviewModal review={selectedReview} />
        )}
      </div>
    </div>
  );
};

export default ReviewModeration;
