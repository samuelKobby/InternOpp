import React, { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import { InternshipCard } from './InternshipCard';
import { Loader2 } from 'lucide-react';

interface Internship {
  id: string;
  companyLogo: string;
  companyName: string;
  title: string;
  location: string;
  stipend: string;
  type: string;
  duration: string;
  tags: string[];
}

interface SearchFilters {
  query: string;
  location: string;
  industry: string;
  type: 'all' | 'remote' | 'onsite';
  duration: string;
}

// Mock data for demonstration
const mockInternships: Internship[] = [
  {
    id: '1',
    companyLogo: '/company-logos/tech-corp.png',
    companyName: 'TechCorp',
    title: 'Software Development Intern',
    location: 'Bangalore',
    stipend: '20000',
    type: 'remote',
    duration: '6 months',
    tags: ['React', 'TypeScript', 'Node.js']
  },
  {
    id: '2',
    companyLogo: '/company-logos/design-studio.png',
    companyName: 'DesignStudio',
    title: 'UI/UX Design Intern',
    location: 'Mumbai',
    stipend: '15000',
    type: 'onsite',
    duration: '3 months',
    tags: ['Figma', 'Adobe XD', 'UI/UX']
  },
  // Add more mock internships as needed
];

export function SearchResultsPage() {
  const [loading, setLoading] = useState(false);
  const [internships, setInternships] = useState<Internship[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    location: '',
    industry: '',
    type: 'all',
    duration: 'any'
  });

  // Simulated API call to fetch internships
  const fetchInternships = async (filters: SearchFilters) => {
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Filter mock data based on search filters
      let filteredInternships = mockInternships.filter(internship => {
        const matchesQuery = !filters.query || 
          internship.title.toLowerCase().includes(filters.query.toLowerCase()) ||
          internship.companyName.toLowerCase().includes(filters.query.toLowerCase());
        
        const matchesLocation = !filters.location ||
          internship.location.toLowerCase().includes(filters.location.toLowerCase());
        
        const matchesType = filters.type === 'all' || internship.type === filters.type;
        
        return matchesQuery && matchesLocation && matchesType;
      });

      setInternships(filteredInternships);
    } catch (error) {
      console.error('Error fetching internships:', error);
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchInternships(filters);
  }, []);

  const handleSearch = (newFilters: SearchFilters) => {
    setFilters(newFilters);
    fetchInternships(newFilters);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Your Perfect Internship</h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        {/* Results Count */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700">
            {loading ? 'Searching...' : `${internships.length} internships found`}
          </h2>
          {/* Add sorting options here if needed */}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          </div>
        )}

        {/* No Results State */}
        {!loading && internships.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No internships found</h3>
            <p className="text-gray-600">
              Try adjusting your search filters or try a different search term
            </p>
          </div>
        )}

        {/* Results Grid */}
        {!loading && internships.length > 0 && (
          <div className="grid grid-cols-1 gap-6">
            {internships.map((internship) => (
              <InternshipCard
                key={internship.id}
                {...internship}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
