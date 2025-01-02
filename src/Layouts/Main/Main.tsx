import About from '../../Components/About/About';
import ContactSection from '../../Components/ContactSection/ContactSection';
import ProjectsSection from '../../Components/ProjectsSection/ProjectsSection';
import WelcomeBlock from '../../Components/WelcomeSection/WelcomeSection';

function MainLayout() {
  return (
    <>
      <WelcomeBlock />
      <About />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default MainLayout;
