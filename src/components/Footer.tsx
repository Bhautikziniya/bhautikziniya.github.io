import { Heart, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch">
          {/* Left: Logo and Socials */}
          <div className="flex flex-col items-start mb-8 md:mb-0 min-w-[180px]">
            <a href="#home" className="text-2xl font-bold mb-4">
              BZ
            </a>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/bhautikziniya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/bhautikziniya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/bhautikziniya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/bhautikziniya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/bhautikziniya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Center: Columns */}
          <div className="flex-1 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-24 text-center md:text-left">
              {/* First Column */}
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold mb-2">Navigation</h3>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </div>

              {/* Second Column */}
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold mb-2">Professional</h3>
                <a href="#education" className="text-gray-400 hover:text-white transition-colors">Education</a>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              </div>

              {/* Third Column */}
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold mb-2">More</h3>
                <a href="#certifications" className="text-gray-400 hover:text-white transition-colors">Certificates</a>
                <a href="#leetcode" className="text-gray-400 hover:text-white transition-colors">LeetCode</a>
                <a href="#awards" className="text-gray-400 hover:text-white transition-colors">Awards</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>

          {/* Right: Language and Theme Toggle */}
          <div className="flex flex-col items-end min-w-[140px] mt-8 md:mt-0">
            <div className="mb-4 w-full flex justify-end">
              <div className="relative">
                <button
                  className="flex items-center px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-300 cursor-default"
                  disabled
                >
                  <span className="mr-2">🌐</span> English
                </button>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Bhautik Ziniya
          </p>
          <p className="mt-2">© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;