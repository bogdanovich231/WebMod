// @ts-nocheck
import { useEffect } from 'react';
import About from '../../Components/About/About';
import ContactSection from '../../Components/ContactSection/ContactSection';
import ProjectsSection from '../../Components/ProjectsSection/ProjectsSection';
import WelcomeBlock from '../../Components/WelcomeSection/WelcomeSection';
import ServicesSection from '../../Components/ServicesSection/ServicesSection';

function MainLayout({ scrollTo }) {
  useEffect(() => {
    if (scrollTo) {
      const targetSection = document.getElementById(scrollTo);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [scrollTo]);
  return (
    <>
      <WelcomeBlock />
      <About id="about" />
      <ServicesSection />
      <ProjectsSection id="projects" />
      <ContactSection id="collaboration" />
    </>
  );
}

export default MainLayout;
