import { ArrowDownCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import resume from '../assets/Bhautik-SeniorSoftwareEngineer.pdf';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const section = document.querySelector(href);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div 
        className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="text-center">
          <p className="text-blue-600 font-medium mb-4 dark:text-blue-400">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 dark:text-white">
            Bhautik Ziniya
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 mb-8 dark:text-gray-300">
            Senior Software Engineer (iOS)
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 dark:text-gray-400">
            Experienced iOS developer with 10+ years of expertise in creating scalable,
            high-performance mobile solutions using Swift, Objective-C, and SwiftUI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-offset-gray-900"
            >
              Get in Touch
            </a>
            {/* <a
              href="#projects"
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-700"
            >
              View Projects
            </a> */}
            <a
              href={resume}
              download
              onClick={() => {
                (window as any).gtag?.('event', 'resume_download', {
                  event_category: 'Resume',
                  event_label: 'Bhautik Ziniya CV',
                  value: 1,
                });
              }}
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-700"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDownCircle className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        <span className="sr-only">Scroll down</span>
      </a>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10 dark:from-gray-900 dark:to-gray-800" />
      
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] -z-10" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.2) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
    </section>
  );
};

export default Hero;