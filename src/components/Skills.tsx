import { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { skillsData } from '../data/skills';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
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
      id="skills" 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6 dark:text-white">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 dark:text-gray-400">
          A comprehensive overview of my technical skills and professional expertise in software development.
        </p>
        
        <div 
          className={`max-w-6xl mx-auto transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {skillsData.map((category, index) => {
              const IconComponent = Icons[category.icon as keyof typeof Icons];
              
              return (
                <div 
                  key={category.category}
                  className="bg-gray-50 rounded-lg p-6 shadow-sm dark:bg-gray-800"
                  style={{ 
                    transitionDelay: `${index * 150}ms` 
                  }}
                >
                  <div className="flex items-center mb-6">
                    <IconComponent className="w-6 h-6 text-blue-600 mr-3 dark:text-blue-400" />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-white text-gray-700 text-sm rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;