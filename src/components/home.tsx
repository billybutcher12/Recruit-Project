import React, { useState } from "react";
import HeroSection from "./home/HeroSection";
import CompanyInfo from "./home/CompanyInfo";

const Home = () => {
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);

  const handleLearnMore = () => {
    setShowCompanyInfo(true);
  };

  const handleCloseCompanyInfo = () => {
    setShowCompanyInfo(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main content */}
      <div className="flex flex-col items-center">
        {/* Hero Section */}
        <HeroSection onLearnMore={handleLearnMore} />

        {/* Company Info Section - conditionally rendered */}
        {showCompanyInfo && <CompanyInfo onClose={handleCloseCompanyInfo} />}

        {/* Additional content placeholder */}
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">For Employers</h3>
                <p className="text-gray-600">
                  Post job openings, review applications, and find the perfect
                  candidates for your organization.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">For Job Seekers</h3>
                <p className="text-gray-600">
                  Browse job listings, submit applications, and track your
                  application status all in one place.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Streamlined Process
                </h3>
                <p className="text-gray-600">
                  Our platform simplifies the recruitment process with intuitive
                  tools and automated workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action section */}
        <section className="w-full py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of companies and job seekers who have already found
              success through our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium">
                Register as Employer
              </button>
              <button className="bg-blue-700 text-white hover:bg-blue-800 px-6 py-3 rounded-md font-medium">
                Register as Job Seeker
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
