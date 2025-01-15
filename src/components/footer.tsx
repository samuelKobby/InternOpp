import React from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseIcon, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center">
              <BriefcaseIcon className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">InternshipFinder</span>
            </div>
            <p className="text-sm text-gray-500">
              Connecting students with meaningful internship opportunities.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Platform
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/search" className="text-base text-gray-500 hover:text-gray-900">
                      Browse Internships
                    </Link>
                  </li>
                  <li>
                    <Link to="/companies" className="text-base text-gray-500 hover:text-gray-900">
                      Companies
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources" className="text-base text-gray-500 hover:text-gray-900">
                      Resources
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/help" className="text-base text-gray-500 hover:text-gray-900">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} InternshipFinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}