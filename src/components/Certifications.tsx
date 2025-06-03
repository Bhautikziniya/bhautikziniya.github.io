import { useState, useEffect } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import badge from '../assets/certiprof-scrum-foundation-badge.png';
import dsaCertificateUrl from '../assets/Bhautik Ziniya DSA & System Design Certificate.pdf';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  certificateUrl?: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    title: "DSA & System Design",
    issuer: "HeyCoach",
    date: "Jun 2025",
    certificateUrl: dsaCertificateUrl,
    skills: ["DSA", "System Design"]
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
    date: "Mar 2024",
    certificateUrl: "https://www.credly.com/badges/97f66e14-b916-42fe-950e-f6152d3172e2/public_url",
    skills: ["Agile", "Agile Mindset", "Agile Practices", "Agile Teams", "Scrum", "Scrum Artefacts", "Scrum EventSource", "Scrum Roles", "Scrum Theory"]
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn",
    date: "Jan 2024",
    certificateUrl: "https://www.linkedin.com/learning/certificates/c45bfc5eb026216564187ab6b68fad0bdbc6cde2b51ed1fca7984a7f5bc2f399",
    skills: ["Computer Ethics", "Artificial Intelligence for Business", "Generative AI", "Prompt Engineering"]
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
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6 dark:text-white">
          Certifications
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 dark:text-gray-400">
          Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise.
        </p>
        
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
                      <div className="flex items-end justify-between mt-6">
                        <a
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
                        >
                          View Certificate
                          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        {cert.title === "Scrum Foundation Professional Certificate - SFPC™" && (
                          <img
                            src={badge}
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