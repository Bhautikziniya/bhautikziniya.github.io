import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 dark:text-white">
            About Me
          </h2>
          
          <div 
            className={`transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="relative rounded-full overflow-hidden aspect-square shadow-xl">
                  <img
                    src="/bhautik.jpg"
                    alt="Bhautik Ziniya"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 ring-4 ring-blue-600 rounded-full" />
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <p className="text-gray-700 mb-4 dark:text-gray-300">
                  I'm a Senior Software Engineer with over 10 years of experience in iOS development, 
                  specializing in creating scalable, high-performance mobile, iPad, and Mac solutions.
                </p>
                <p className="text-gray-700 mb-4 dark:text-gray-300">
                  Throughout my career, I've successfully developed and published 15+ iOS apps, 
                  demonstrating expertise in Swift, Objective-C, and SwiftUI. My work has consistently 
                  resulted in enhanced user satisfaction and app performance.
                </p>
                <p className="text-gray-700 mb-6 dark:text-gray-300">
                  I'm passionate about creating pixel-perfect interfaces and maintaining high standards 
                  in code quality and user experience.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="ml-2 text-gray-800 dark:text-gray-200">Based in Ahmedabad, India</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="ml-2 text-gray-800 dark:text-gray-200">10+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="ml-2 text-gray-800 dark:text-gray-200">iOS Development Expert</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="ml-2 text-gray-800 dark:text-gray-200">Available for Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;