import React, { useEffect } from 'react';
// 👇 Add this block
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
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
import Education from './components/Education';
import Award from './components/Award';

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

            // Fire manual GA4 event
            if (window.gtag) {
              const sectionName = href.replace('#', '');
              window.gtag('event', 'page_view', {
                page_path: href,
                page_title: sectionName,
                screen_class: 'Portfolio'
              });
            }
          }
        }
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    // --- STEP 2: Scroll-based tracking with IntersectionObserver ---
    const sectionIds = [
      'hero',
      'about',
      'timeline',
      'education',
      'skills',
      'projects',
      'certifications',
      'leetcode',
      'award',
      'contact'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.gtag) {
            const sectionId = entry.target.id;
            window.gtag('event', 'page_view', {
              page_path: `/${sectionId}`,
              page_title: sectionId,
              screen_class: 'Portfolio'
            });
          }
        });
      },
      {
        threshold: 0.6
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      document.removeEventListener('click', handleLinkClick);
      observer.disconnect();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <main>
          <section id="hero"><Hero /></section>
          <section id="about"><About /></section>
          <section id="timeline"><Timeline /></section>
          <section id="education"><Education /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="certifications"><Certifications /></section>
          <section id="leetcode"><LeetCode /></section>
          <section id="award"><Award /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;