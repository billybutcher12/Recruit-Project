import React from "react";
import { Button } from "@/components/ui/button";

interface CompanyInfoProps {
  title?: string;
  mission?: string;
  values?: string[];
  description?: string;
  foundedYear?: number;
  teamSize?: number;
  onClose?: () => void;
}

const CompanyInfo = ({
  title = "About Our Company",
  mission = "To connect talented individuals with their dream careers and help organizations find the perfect candidates.",
  values = [
    "Excellence",
    "Integrity",
    "Innovation",
    "Diversity",
    "Collaboration",
  ],
  description = "Founded with a vision to revolutionize the recruitment process, our platform brings together cutting-edge technology and human expertise. We believe in creating meaningful connections between employers and job seekers, fostering growth and success for both parties.",
  foundedYear = 2015,
  teamSize = 120,
  onClose = () => {},
}: CompanyInfoProps) => {
  return (
    <section className="w-full py-12 bg-white text-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600">{title}</h2>
            <Button
              variant="ghost"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </Button>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-500">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">{mission}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-500">
                Who We Are
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {description}
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="font-medium">Founded:</span> {foundedYear}
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="font-medium">Team Size:</span> {teamSize}+
                  professionals
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-500">
                Our Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 p-4 rounded-lg text-center"
                  >
                    <span className="font-medium text-blue-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open("#contact", "_self")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
