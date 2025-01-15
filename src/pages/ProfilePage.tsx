import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export function ProfilePage({
  name = 'John Doe',
  email = 'john.doe@example.com',
  bio = 'Aspiring software engineer passionate about building scalable web applications.',
  resumeLink = 'https://example.com/resume.pdf',
  profileImage = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60',
  skills = ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Git'],
  education = {
    university: 'Stanford University',
    degree: 'Bachelor of Science in Computer Science',
    graduationYear: '2024'
  },
  bookmarkedInternships = [],
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Personal Details */}
        <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={profileImage} alt={name} />
                <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h2>
                <p className="text-gray-700 dark:text-gray-300">{email}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Bio</label>
                <Input value={bio} disabled className="mt-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Skills</label>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-gray-900 dark:text-blue">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Education</h2>
            <div className="space-y-2">
              <p className="font-medium text-gray-900 dark:text-white">{education.university}</p>
              <p className="text-gray-700 dark:text-gray-300">{education.degree}</p>
              <p className="text-gray-500 dark:text-gray-400">Expected Graduation: {education.graduationYear}</p>
            </div>
          </CardContent>
        </Card>

        {/* Resume Section */}
        <Card className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Uploaded Resume</h2>
            <div className="flex items-center space-x-4">
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                View Resume
              </a>
              <Button variant="outline" className="text-gray-900 dark:text-blue-400 border-gray-200 dark:border-gray-600">Update Resume</Button>
            </div>
          </CardContent>
        </Card>

        {/* Bookmarked Internships */}
        <Card className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Bookmarked Internships</h2>
            {bookmarkedInternships.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">No bookmarked internships yet.</p>
            ) : (
              <div className="space-y-4">
                {bookmarkedInternships.map((internship, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 last:pb-0 pb-4">
                    <h3 className="font-medium text-gray-900 dark:text-white">{internship.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{internship.company}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}