import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import LeetCode from './components/LeetCode';

function App() {
  useEffect(() => {
    // Update the page title
    document.title = 'Bhautik Ziniya | Portfolio';
    
    // Implement smooth scrolling
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Find the closest anchor tag if the click was on a child element
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const section = document.querySelector(href);
          if (section) {
            // Add a small offset to account for the fixed navbar
            const navbarHeight = 80; // Approximate navbar height
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({
              top: sectionTop,
              behavior: 'smooth'
            });
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
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Certifications />
        <LeetCode />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;