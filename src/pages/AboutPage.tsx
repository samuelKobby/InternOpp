import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export function AboutPage() {
  const mission = 'To bridge the gap between aspiring individuals and their dream internships by providing a seamless platform that connects talented students with innovative companies.';
  const vision = 'Empowering the next generation of professionals by creating meaningful internship opportunities that launch successful careers.';
  
  const teamMembers = [
    {
      name: 'Jane Smith',
      role: 'Founder & CEO',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&auto=format&fit=crop&q=60',
      bio: 'Former tech executive passionate about creating opportunities for students'
    },
    {
      name: 'John Doe',
      role: 'Co-Founder & CTO',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&auto=format&fit=crop&q=60',
      bio: 'Tech enthusiast with 15 years of experience in software development'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&auto=format&fit=crop&q=60',
      bio: 'Operations expert focused on creating efficient processes'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Partnerships',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&auto=format&fit=crop&q=60',
      bio: 'Building bridges between academia and industry'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly strive to improve and innovate in how we connect talent with opportunities.'
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all our operations.'
    },
    {
      title: 'Impact',
      description: 'We measure our success by the positive impact we create in students\' careers.'
    },
    {
      title: 'Inclusion',
      description: 'We believe in creating equal opportunities for all, regardless of background.'
    }
  ];

  const features = [
    {
      title: 'Internship Opportunities',
      description: 'We offer a wide range of internship opportunities in various fields, from tech to finance.'
    },
    {
      title: 'Career Development',
      description: 'Our platform provides resources and tools to help students develop their skills and advance their careers.'
    },
    {
      title: 'Networking',
      description: 'We connect students with professionals in their desired field, providing valuable networking opportunities.'
    },
    {
      title: 'Community Support',
      description: 'Our community is dedicated to supporting students throughout their internship journey.'
    }
  ];

  const team = [
    {
      name: 'Jane Smith',
      role: 'Founder & CEO',
      bio: 'Former tech executive passionate about creating opportunities for students'
    },
    {
      name: 'John Doe',
      role: 'Co-Founder & CTO',
      bio: 'Tech enthusiast with 15 years of experience in software development'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      bio: 'Operations expert focused on creating efficient processes'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Partnerships',
      bio: 'Building bridges between academia and industry'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About InternOp
          </h1>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            Your gateway to meaningful internship opportunities
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              At InternOp, we believe in connecting talented individuals with opportunities that shape their future careers.
              Our platform serves as a bridge between ambitious students and forward-thinking companies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              What We Offer
            </h2>
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Our Team
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {team.map((member, index) => (
                <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Have questions or suggestions? We'd love to hear from you!
              </p>
              <a 
                href="mailto:contact@internop.com" 
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                contact@internop.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}