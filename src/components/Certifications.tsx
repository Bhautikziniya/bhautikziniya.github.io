import { useState, useEffect } from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  certificateUrl?: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn",
    date: "Mar 2024",
    certificateUrl: "https://www.linkedin.com/learning/certificates/c45bfc5eb026216564187ab6b68fad0bdbc6cde2b51ed1fca7984a7f5bc2f399",
    skills: ["Computer Ethics", "Artificial Intelligence for Business", "Generative AI", "Prompt Engineering"]
  },
  {
    title: "Cert Prep: Scrum Master",
    issuer: "LinkedIn & PMI®",
    date: "Mar 2024",
    certificateUrl: "https://www.linkedin.com/learning/certificates/44e5f4f5f1390db1dd8b38eee0c3865c9fa2130292c387070866155550a1ef9a",
    skills: ["Scrum"]
  },
  {
    title: "Scrum Foundation Professional Certificate - SFPC™",
    issuer: "CertiProf®",
    date: "Jan 2024",
    certificateUrl: "https://www.credly.com/badges/97f66e14-b916-42fe-950e-f6152d3172e2/public_url",
    skills: ["Agile", "Agile Mindset", "Agile Practices", "Agile Teams", "Scrum", "Scrum Artefacts", "Scrum EventSource", "Scrum Roles", "Scrum Theory"]
  }
];

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('certifications');
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
      id="certifications" 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 dark:text-white">
          Certifications
        </h2>
        
        <div 
          className={`max-w-4xl mx-auto transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
                style={{ 
                  transitionDelay: `${index * 150}ms` 
                }}
              >
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0 dark:text-blue-400" />
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {cert.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-1 dark:text-gray-300">
                      {cert.issuer}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {cert.certificateUrl && (
                      <div className="flex items-end justify-between mt-3">
                        <a
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Certificate
                        </a>
                        {cert.title === "Scrum Foundation Professional Certificate - SFPC™" && (
                          <img
                            src="/certiprof-scrum-foundation-badge.png"
                            alt="CertiProf Scrum Foundation Certification Badge"
                            width={100}
                            height={100}
                            className="self-end"
                          />
                        )}
                      </div>
                    )}
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

export default Certifications;