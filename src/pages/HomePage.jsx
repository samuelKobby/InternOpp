import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Users, Star, Building2, MapPin, DollarSign } from 'lucide-react';
import PropTypes from 'prop-types';

// FeaturedInternship Component
const FeaturedInternship = ({ internship }) => (
  <Link to={`/internship/${internship.id}`} className="block">
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <img 
        src={internship.image} 
        alt={internship.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{internship.title}</h3>
      <div className="flex items-center text-gray-600 mb-2">
        <Briefcase className="w-4 h-4 mr-2" />
        <span>{internship.company}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-2">
        <MapPin className="w-4 h-4 mr-2" />
        <span>{internship.location}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-2">
        <DollarSign className="w-4 h-4 mr-2" />
        <span>{internship.stipend}</span>
      </div>
      {internship.isRemote && (
        <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
          Remote
        </span>
      )}
    </div>
  </Link>
);

FeaturedInternship.propTypes = {
  internship: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stipend: PropTypes.string.isRequired,
    isRemote: PropTypes.bool,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

// Testimonial Component
const Testimonial = ({ testimonial }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg">
    <div className="flex items-center mb-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="ml-4">
        <h3 className="font-semibold">{testimonial.name}</h3>
        <p className="text-gray-600">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-gray-700">{testimonial.text}</p>
  </div>
);

Testimonial.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

const HomePage = () => {
  // Mock data for featured internships
  const featuredInternships = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "Tech Corp",
      location: "San Francisco, CA",
      stipend: "$3000/month",
      isRemote: true,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      title: "Marketing Intern",
      company: "Growth Co",
      location: "New York, NY",
      stipend: "$2500/month",
      isRemote: false,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      title: "UX Design Intern",
      company: "Design Studio",
      location: "Austin, TX",
      stipend: "$2800/month",
      isRemote: true,
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=60"
    }
  ];

  // Testimonials with proper images
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Former Intern at Tech Corp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
      text: "Thanks to InternOp, I landed my dream internship that turned into a full-time role!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineering Intern",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
      text: "The platform made it incredibly easy to find and apply to relevant opportunities."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Main Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Perfect Internship
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Connect with top companies and kickstart your career with meaningful internship opportunities
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/search">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Browse Internships
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-gray-600">Active Internships</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-gray-600">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-gray-600">Student Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Internships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
            Featured Internships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredInternships.map((internship) => (
              <FeaturedInternship key={internship.id} internship={internship} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        className="relative py-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose InternOp?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Opportunities</h3>
              <p className="text-gray-600">
                Access vetted internship positions from top companies across various industries
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
              <p className="text-gray-600">
                Get guidance from experienced professionals throughout your internship journey
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-600">
                Build valuable skills and experience to advance your career goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section 
        className="relative py-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Trusted by Leading Companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {/* Replace these with actual company logos */}
            <div className="bg-white/10 p-6 rounded-lg">
              <Building2 className="h-12 w-12 text-white mx-auto" />
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <Building2 className="h-12 w-12 text-white mx-auto" />
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <Building2 className="h-12 w-12 text-white mx-auto" />
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <Building2 className="h-12 w-12 text-white mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found their dream internships through InternOp
          </p>
          <Link to="/auth/signup">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export { HomePage };
