import { useState, useEffect } from 'react';
import { Briefcase, Award } from 'lucide-react';
import { experiences } from '../data/experience';

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('experience');
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
      id="experience" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 dark:text-white">
          Where I’ve Worked
        </h2>
        
        <div 
          className={`max-w-4xl mx-auto transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Timeline tabs */}
            <div className="w-full md:w-1/3">
              <div className="sticky top-24 space-y-1">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.id}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeIndex === index
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 dark:bg-gray-700 dark:text-blue-400 dark:border-blue-400'
                        : 'hover:bg-gray-100 text-gray-700 dark:hover:bg-gray-700 dark:text-gray-300'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="font-medium">{exp.company}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Timeline content */}
            <div className="w-full md:w-2/3 relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
              
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`pl-8 pb-12 relative transition-all duration-500 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                  style={{ display: activeIndex === index ? 'block' : 'none' }}
                >
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center -translate-x-1/2 dark:bg-blue-500">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md dark:bg-gray-900">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 dark:text-white">{exp.title}</h3>
                    <div className="text-blue-600 font-medium mb-2 dark:text-blue-400">{exp.company}</div>
                    <div className="text-gray-500 mb-4 dark:text-gray-400">
                      {exp.location} | {exp.period}
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1.5 flex-shrink-0">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.achievements && (
                      <div className="mb-6">
                        <div className="flex items-center mb-3">
                          <Award className="w-5 h-5 text-blue-600 mr-2 dark:text-blue-400" />
                          <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements</h4>
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-blue-600 mr-2 mt-1.5 flex-shrink-0">★</span>
                              <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full dark:bg-gray-800 dark:text-blue-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;