import React from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onLearnMore?: () => void;
}

const HeroSection = ({
  title = "Welcome to Our Recruitment Platform",
  subtitle = "We connect talented professionals with leading companies. Our platform streamlines the recruitment process, making it easier for both candidates and HR personnel to find their perfect match.",
  buttonText = "Learn More",
  onLearnMore = () => console.log("Learn More clicked"),
}: HeroSectionProps) => {
  return (
    <section className="w-full py-20 bg-white flex items-center justify-center">
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>

          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg"
            onClick={onLearnMore}
          >
            {buttonText}
          </Button>

          <div className="mt-12 w-full max-w-4xl">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                alt="Professional office environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
