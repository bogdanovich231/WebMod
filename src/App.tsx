import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainLayout from './Layouts/Main/Main';
import SingleProject from './Layouts/SingleProject/SingleProject';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/about" element={<MainLayout scrollTo="about" />} />
        <Route path="/projects" element={<MainLayout scrollTo="projects" />} />
        <Route path="/projects/:slug" element={<SingleProject />} />
        <Route path="/collaboration" element={<MainLayout scrollTo="collaboration" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
