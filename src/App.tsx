import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainLayout from './Layouts/Main/Main';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
