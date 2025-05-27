import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'LeetCode', href: '#leetcode' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id') || '';

        if (sectionTop < 100 && sectionTop >= -100) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md dark:bg-gray-900' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="text-2xl font-bold text-gray-900 dark:text-white">
            BZ
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`
                      relative px-2 py-1 font-semibold transition-colors duration-300
                      ${activeSection === link.href.substring(1)
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                      }
                      focus:outline-none
                      after:content-[''] after:absolute after:w-full after:h-0.5 
                      after:bottom-0 after:left-0 after:bg-blue-600 dark:after:bg-blue-400
                      after:transform after:scale-x-0 after:origin-left
                      after:transition-transform after:duration-300
                      hover:after:scale-x-100
                    `}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                                block px-3 py-2 rounded-md text-base font-medium
                                relative overflow-hidden
                                ${activeSection === link.href.substring(1)
                    ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-gray-800'
                    : 'text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white'
                  }
                                focus:outline-none
                                after:content-[''] after:absolute after:w-full after:h-0.5
                                after:bottom-0 after:left-0 after:bg-blue-600 dark:after:bg-blue-400
                                after:transform after:scale-x-0 after:origin-left
                                after:transition-transform after:duration-300
                                hover:after:scale-x-100
                              `}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;