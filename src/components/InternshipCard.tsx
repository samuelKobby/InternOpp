import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Building } from 'lucide-react';

interface InternshipCardProps {
  id: string;
  companyLogo?: string;
  companyName: string;
  title: string;
  location: string;
  stipend: string;
  type: string;
  duration: string;
  tags?: string[];
}

export function InternshipCard({
  id,
  companyLogo = "/api/placeholder/64/64",
  companyName,
  title,
  location,
  stipend,
  type,
  duration,
  tags = []
}: InternshipCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full">
      <div className="flex items-start gap-4">
        {/* Company Logo */}
        <div className="w-16 h-16 flex-shrink-0">
          <img
            src={companyLogo}
            alt={`${companyName} logo`}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900 mb-1">
            {title}
          </h3>
          <p className="text-gray-600 mb-2">{companyName}</p>

          {/* Details */}
          <div className="space-y-2">
            <div className="flex items-center text-gray-500">
              <MapPin size={16} className="mr-2" />
              <span className="text-sm">{location}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Clock size={16} className="mr-2" />
              <span className="text-sm">{duration}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Building size={16} className="mr-2" />
              <span className="text-sm">{type}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stipend */}
        <div className="text-right">
          <div className="font-medium text-gray-900">₹{stipend}/month</div>
        </div>
      </div>

      {/* View Details Button */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link to={`/internship/${id}`}>
          <button className="w-full px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}