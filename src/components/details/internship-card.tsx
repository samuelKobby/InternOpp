import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { MapPin, Clock, Building, DollarSign, Bookmark } from 'lucide-react';

const InternshipCard = ({
  id,
  companyLogo = "/api/placeholder/64/64",
  companyName = '',
  title = '',
  location = '',
  stipend = '',
  type = '',
  duration = '',
  tags = [],
  isBookmarked = false,
  onBookmark = () => {},
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          {/* Company Logo and Info */}
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
              <img
                src={companyLogo}
                alt={`${companyName} logo`}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-gray-600">{companyName}</p>
              
              {/* Details */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-500">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span className="text-sm">{location}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="mr-2 h-4 w-4" />
                  <span className="text-sm">{duration}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Building className="mr-2 h-4 w-4" />
                  <span className="text-sm">{type}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <DollarSign className="mr-2 h-4 w-4" />
                  <span className="text-sm">{stipend}/month</span>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Bookmark Button */}
          {onBookmark && (
            <Button
              variant="outline"
              size="icon"
              onClick={onBookmark}
              className="h-10 w-10"
            >
              <Bookmark className={isBookmarked ? "fill-blue-500 text-blue-500" : ""} />
            </Button>
          )}
        </div>

        {/* View Details Button */}
        <div className="mt-6">
          <Button className="w-full" variant="outline">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

InternshipCard.propTypes = {
  id: PropTypes.string.isRequired,
  companyLogo: PropTypes.string,
  companyName: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  stipend: PropTypes.string,
  type: PropTypes.string,
  duration: PropTypes.string,
  tags: PropTypes.array,
  isBookmarked: PropTypes.bool,
  onBookmark: PropTypes.func,
};

export default InternshipCard;
