import { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';
import { educationData } from '../data/education';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('education');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="education" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 dark:text-white">
          Education
        </h2>
        
        <div 
          className={`max-w-4xl mx-auto transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={edu.id}
                className="bg-white rounded-lg p-6 shadow-md dark:bg-gray-900"
                style={{ 
                  transitionDelay: `${index * 150}ms` 
                }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-blue-600 font-medium mb-2 dark:text-blue-400">
                      {edu.institution}
                    </div>
                    <div className="text-gray-500 mb-4 dark:text-gray-400">
                      {edu.location} | {edu.period}
                    </div>
                    
                    {/* {edu.description && (
                      <ul className="space-y-2">
                        {edu.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-600 mr-2 mt-1.5 flex-shrink-0">•</span>
                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 