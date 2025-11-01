'use client';

import { useRef, useEffect, useState, lazy, Suspense, memo } from 'react';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

// Loading component for lazy-loaded routes
import Loading from '@/components/Loading';

// Critical components - load immediately
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// Dynamically load non-critical components
const About = dynamic(() => import('@/components/About'), { 
  loading: () => <div className="min-h-screen flex items-center justify-center"><Loading /></div> 
});
const Skills = dynamic(() => import('@/components/skills'), { 
  loading: () => <div className="min-h-screen flex items-center justify-center"><Loading /></div> 
});
const Projects = dynamic(() => import('@/components/Project'), { 
  loading: () => <div className="min-h-screen flex items-center justify-center"><Loading /></div> 
});
const Work = dynamic(() => import('@/components/Works'), { 
  loading: () => <div className="min-h-screen flex items-center justify-center"><Loading /></div> 
});
const Certificate = dynamic(() => import('@/components/certificate'), { 
  loading: () => <div className="min-h-screen flex items-center justify-center"><Loading /></div> 
});
const Contact = dynamic(() => import('@/components/Contact'), { 
  loading: () => <div className="min-h-screen flex items-center justify-center"><Loading /></div> 
});
const ResearchPublications = dynamic(() => import('@/components/Research'), { 
  loading: () => <div className="min-h-screen flex items-center justify-center"><Loading /></div> 
});

// ScrollToTop component to handle scroll to top on route change
const ScrollToTop = memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
});

ScrollToTop.displayName = 'ScrollToTop';

export default function Home() {
  const isScrollingProgrammatically = useRef(false);
  const [currentSection, setCurrentSection] = useState<string>('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingProgrammatically.current) return;

      const sections = ["home", "about", "skills", "projects", "works", "research", "certificate", "contact"];
      const navbarHeight = 80; // Height of your navbar
      const scrollPosition = window.scrollY + navbarHeight + 50; // Add some offset for better detection
      
      let activeSection = 'home'; // Default to home

      // Check each section to find which one is currently in view
      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionStart = offsetTop;
          const sectionEnd = offsetTop + offsetHeight;
          
          // Check if scroll position is within this section
          if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
            activeSection = sections[i];
            break;
          }
          
          // Special case for the last section (contact)
          if (i === sections.length - 1 && scrollPosition >= sectionStart) {
            activeSection = sections[i];
            break;
          }
        }
      }

      // Only update if the section has actually changed
      if (activeSection !== currentSection) {
        setCurrentSection(activeSection);
        
        // Update URL hash without causing scroll
        const newHash = `#${activeSection}`;
        if (window.location.hash !== newHash) {
          window.history.replaceState(null, '', newHash);
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [currentSection]); // Add currentSection as dependency

  // Handle hash changes from direct URL access
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== currentSection) {
        setCurrentSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentSection]);

  // Performance monitoring (only in development)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      import('@/utils/webVitals').then((module) => {
        module.initWebVitals();
      });
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar
        activeSection={currentSection}
        setActiveSection={setCurrentSection}
        isScrollingProgrammatically={isScrollingProgrammatically}
      />
      {/* Make sure each section has the correct ID attribute */}
      <div id="home"><Hero /></div>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loading /></div>}>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="works"><Work /></div>
        <div id="research"><ResearchPublications /></div>
        <div id="certificate"><Certificate /></div>
        <div id="contact" className="contact-mobile-margin"><Contact /></div>
      </Suspense>
    </>
  );
}
