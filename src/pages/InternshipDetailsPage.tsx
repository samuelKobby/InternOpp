import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";
import { Progress } from "../components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { 
  Calendar, 
  MapPin, 
  Building, 
  DollarSign, 
  Clock, 
  Bookmark, 
  Share2, 
  Copy, 
  Linkedin, 
  Twitter, 
  Facebook, 
  ChevronDown, 
  ChevronUp,
  AlertCircle,
} from 'lucide-react';
import InternshipCard from '../components/details/internship-card.jsx';
import styles from './InternshipDetailsPage.module.css';

// Share Modal Component
const ShareModal = ({ isOpen, onClose, handleCopyLink }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Share this opportunity</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col space-y-4 p-4">
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="flex-1" onClick={handleCopyLink}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Link
          </Button>
        </div>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="icon" className="h-10 w-10">
            <Linkedin className="h-5 w-5 text-blue-600" />
          </Button>
          <Button variant="outline" size="icon" className="h-10 w-10">
            <Twitter className="h-5 w-5 text-blue-400" />
          </Button>
          <Button variant="outline" size="icon" className="h-10 w-10">
            <Facebook className="h-5 w-5 text-blue-800" />
          </Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

// Application Form Component
const ApplicationForm = ({ isOpen, onClose }: any) => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Handle form submission here
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="mb-2 block text-sm font-medium" htmlFor="name">Full Name</label>
              <Input id="name" placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <label className="mb-2 block text-sm font-medium" htmlFor="email">Email</label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <label className="mb-2 block text-sm font-medium" htmlFor="phone">Phone Number</label>
              <Input id="phone" type="tel" placeholder="Enter your phone number" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="mb-2 block text-sm font-medium" htmlFor="education">Education</label>
              <Input id="education" placeholder="Your highest education" />
            </div>
            <div className="space-y-2">
              <label className="mb-2 block text-sm font-medium" htmlFor="experience">Experience</label>
              <Textarea 
                id="experience" 
                placeholder="Brief description of your relevant experience"
                className="min-h-[100px]"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            
            <div className="space-y-2">
              <label className="mb-2 block text-sm font-medium" htmlFor="resume">Resume/CV</label>
              <Input id="resume" type="file" />
            </div>
            <div className="space-y-2">
              <label className="mb-2 block text-sm font-medium" htmlFor="coverLetter">Cover Letter</label>
              <Textarea 
                id="coverLetter" 
                placeholder="Why should we consider your application?"
                className="min-h-[150px]"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`sm:max-w-xl ${styles.dialogContent}`}>
        <DialogHeader>
          <DialogTitle>Internship Application</DialogTitle>
        </DialogHeader>
        
        <div className="mb-4">
          <div className={styles.progressBar}>
            <div 
              className={styles.progressIndicator} 
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-sm text-gray-600 dark:text-gray-300">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round((step / totalSteps) * 100)}% Complete</span>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          {renderStep()}

          <DialogFooter className="mt-6 flex justify-between gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={step === 1}
            >
              Previous
            </Button>
            {step < totalSteps ? (
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button 
                type="button"
                onClick={onSubmit} 
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Submit Application
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const InternshipDetailsPage = () => {
  const { id } = useParams();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    about: false,
    responsibilities: false,
    requirements: false
  });
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Mock data - replace with actual data fetching
  const internshipData = {
    id: id || '1',
    title: 'Software Engineer Intern',
    companyName: 'Tech Company',
    companyLogo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=128&fit=crop&crop=faces&auto=format&q=60',
    companyBanner: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=300&fit=crop&auto=format&q=60',
    location: 'San Francisco, CA',
    stipend: '3000',
    duration: '3 months',
    type: 'Full-time',
    deadline: 'April 30, 2024',
    aboutCompany: 'A leading technology company focused on building innovative solutions that transform how businesses operate. We are committed to fostering a culture of learning and growth.',
    responsibilities: [
      'Build and maintain web applications using modern frameworks',
      'Collaborate with senior developers on complex projects',
      'Write clean, maintainable, and efficient code',
      'Participate in code reviews and team discussions',
      'Learn and implement best practices in software development'
    ],
    requirements: [
      'Currently pursuing CS degree or related field',
      'Strong programming skills in JavaScript/TypeScript',
      'Experience with React or similar frameworks',
      'Good understanding of web technologies',
      'Excellent problem-solving skills'
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'Git', 'REST APIs'],
  };

  const similarInternships = [
    {
      id: '2',
      title: "Frontend Developer Intern",
      companyName: "Web Solutions Inc",
      companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=128&h=128&fit=crop&auto=format&q=60",
      location: "Remote",
      stipend: "2500",
      duration: "6 months",
      type: "Full-time",
      tags: ["React", "JavaScript", "UI/UX"]
    },
    {
      id: '3',
      title: "Full Stack Developer Intern",
      companyName: "Tech Startup",
      companyLogo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=128&h=128&fit=crop&auto=format&q=60",
      location: "New York, NY",
      stipend: "3500",
      duration: "3 months",
      type: "Full-time",
      tags: ["Node.js", "React", "MongoDB"]
    }
  ];

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsShareModalOpen(false);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 px-4 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-8 rounded-xl bg-white dark:bg-gray-700 p-6 shadow-sm">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-6">
              <div className="h-16 w-16 overflow-hidden rounded-lg lg:h-24 lg:w-24">
                <img
                  src={internshipData.companyLogo}
                  alt={`${internshipData.companyName} logo`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl">
                  {internshipData.title}
                </h1>
                <p className="mt-1 text-lg text-gray-600 dark:text-gray-300">{internshipData.companyName}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {internshipData.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handleBookmark}
                className="h-10 w-10"
              >
                <Bookmark className={isBookmarked ? "fill-blue-500 text-blue-500" : ""} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsShareModalOpen(true)}
                className="h-10 w-10"
              >
                <Share2 />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* About Company */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">About {internshipData.companyName}</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleSection('about')}
                    >
                      {expandedSections.about ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </div>
                  <div className={`mt-4 transition-all duration-300 ${
                    expandedSections.about ? 'block' : 'max-h-24 overflow-hidden'
                  }`}>
                    <p className="text-gray-600 dark:text-gray-300">{internshipData.aboutCompany}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Responsibilities */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Responsibilities</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleSection('responsibilities')}
                    >
                      {expandedSections.responsibilities ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </div>
                  <ul className={`mt-4 list-inside list-disc space-y-2 text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                    expandedSections.responsibilities ? 'block' : 'max-h-24 overflow-hidden'
                  }`}>
                    {internshipData.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Requirements</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleSection('requirements')}
                    >
                      {expandedSections.requirements ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </div>
                  <ul className={`mt-4 list-inside list-disc space-y-2 text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                    expandedSections.requirements ? 'block' : 'max-h-24 overflow-hidden'
                  }`}>
                    {internshipData.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Similar Internships */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Similar Internships</h2>
                  <div className="space-y-4">
                    {similarInternships.map((internship) => (
                      <InternshipCard
                        key={internship.id}
                        {...internship}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Internship Details</h2>
                <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <span>Deadline: {internshipData.deadline}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <span>{internshipData.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <span>{internshipData.companyName}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <span>${internshipData.stipend}/month</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <span>Duration: {internshipData.duration}</span>
                  </div>
                </div>
                <Button
                  className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => setIsApplicationModalOpen(true)}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        handleCopyLink={handleCopyLink}
      />

      {/* Application Modal */}
      {isApplicationModalOpen && (
        <Dialog open={isApplicationModalOpen} onOpenChange={() => setIsApplicationModalOpen(false)}>
          <ApplicationForm
            isOpen={isApplicationModalOpen}
            onClose={() => setIsApplicationModalOpen(false)}
          />
        </Dialog>
      )}
    </div>
  );
};

export { InternshipDetailsPage };