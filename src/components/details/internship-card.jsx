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
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <img
              src={companyLogo}
              alt={`${companyName} logo`}
              className="w-16 h-16 rounded-lg object-contain bg-gray-50"
            />
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <div className="flex items-center space-x-2 text-gray-600 mt-1">
                <Building className="w-4 h-4" />
                <span>{companyName}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
              <div className="flex space-x-4 mt-2">
                <div className="flex items-center space-x-1 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{duration}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  <span>{stipend}</span>
                </div>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onBookmark}
            className={isBookmarked ? 'text-blue-600' : 'text-gray-400'}
          >
            <Bookmark className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} />
          </Button>
        </div>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{type}</Badge>
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
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
  tags: PropTypes.arrayOf(PropTypes.string),
  isBookmarked: PropTypes.bool,
  onBookmark: PropTypes.func,
};

export default InternshipCard;
