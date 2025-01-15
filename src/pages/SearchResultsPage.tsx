import React, { useState, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar';
import { InternshipCard } from '../components/InternshipCard';
import { Loader2 } from 'lucide-react';

interface SearchFilters {
  query: string;
  location: string;
  industry: string;
  type: 'all' | 'remote' | 'onsite';
  duration: string;
}

// Mock data for demonstration
const mockInternships = [
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
  }
];

function SearchResultsPage() {
  const [loading, setLoading] = useState(false);
  const [internships, setInternships] = useState(mockInternships);
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    location: '',
    industry: '',
    type: 'all',
    duration: 'any'
  });

  const handleSearch = (newFilters: SearchFilters) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const filteredInternships = mockInternships.filter(internship => {
        const matchesQuery = !newFilters.query || 
          internship.title.toLowerCase().includes(newFilters.query.toLowerCase()) ||
          internship.companyName.toLowerCase().includes(newFilters.query.toLowerCase());
        
        const matchesLocation = !newFilters.location ||
          internship.location.toLowerCase().includes(newFilters.location.toLowerCase());
        
        const matchesType = newFilters.type === 'all' || internship.type === newFilters.type;
        
        return matchesQuery && matchesLocation && matchesType;
      });
      
      setInternships(filteredInternships);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    handleSearch(filters);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
            Find Your Perfect Internship
          </h1>
        </div>

        {/* Search Section */}
        <div className="mb-8 p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Results Section */}
        <div>
          {/* Results Count */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              {loading ? 'Searching...' : `${internships.length} internships found`}
            </h2>
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
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                No internships found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search filters or try a different search term
              </p>
            </div>
          )}

          {/* Results Grid */}
          {!loading && internships.length > 0 && (
            <div className="grid gap-6">
              {internships.map((internship) => (
                <InternshipCard 
                  key={internship.id} 
                  className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition-shadow"
                  {...internship} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { SearchResultsPage };