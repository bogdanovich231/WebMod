import About from '../../Components/About/About';
import ProjectsSection from '../../Components/ProjectsSection/ProjectsSection';
import WelcomeBlock from '../../Components/WelcomeSection/WelcomeSection';

function MainLayout() {
  return (
    <>
      <WelcomeBlock />
      <About />
      <ProjectsSection />
    </>
  );
}

export default MainLayout;
