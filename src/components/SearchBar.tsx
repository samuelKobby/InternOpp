import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Clock } from 'lucide-react';

interface SearchFilters {
  query: string;
  location: string;
  industry: string;
  type: 'all' | 'remote' | 'onsite';
  duration: string;
}

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    location: '',
    industry: '',
    type: 'all',
    duration: 'any'
  });

  const industries = [
    'Technology',
    'Marketing',
    'Finance',
    'Design',
    'Engineering',
    'Healthcare'
  ];

  const durations = [
    { value: 'any', label: 'Any Duration' },
    { value: '0-3', label: '0-3 months' },
    { value: '3-6', label: '3-6 months' },
    { value: '6+', label: '6+ months' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search Query */}
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search internships..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.query}
              onChange={(e) => setFilters({ ...filters, query: e.target.value })}
            />
          </div>

          {/* Location */}
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Location"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />
          </div>

          {/* Industry */}
          <div className="relative">
            <Briefcase className="absolute left-3 top-3 text-gray-400" size={20} />
            <select
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
              value={filters.industry}
              onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
            >
              <option value="">All Industries</option>
              {industries.map((industry) => (
                <option key={industry} value={industry.toLowerCase()}>
                  {industry}
                </option>
              ))}
            </select>
          </div>

          {/* Duration */}
          <div className="relative">
            <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
            <select
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
              value={filters.duration}
              onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
            >
              {durations.map((duration) => (
                <option key={duration.value} value={duration.value}>
                  {duration.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Type Filter & Search Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
          <div className="flex gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-blue-500"
                name="type"
                value="all"
                checked={filters.type === 'all'}
                onChange={(e) => setFilters({ ...filters, type: e.target.value as 'all' | 'remote' | 'onsite' })}
              />
              <span className="ml-2">All</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-blue-500"
                name="type"
                value="remote"
                checked={filters.type === 'remote'}
                onChange={(e) => setFilters({ ...filters, type: e.target.value as 'all' | 'remote' | 'onsite' })}
              />
              <span className="ml-2">Remote</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-blue-500"
                name="type"
                value="onsite"
                checked={filters.type === 'onsite'}
                onChange={(e) => setFilters({ ...filters, type: e.target.value as 'all' | 'remote' | 'onsite' })}
              />
              <span className="ml-2">On-site</span>
            </label>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}