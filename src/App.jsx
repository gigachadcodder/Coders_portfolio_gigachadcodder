import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Common/Header/Header';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import ContactMe from './Pages/ContactMe';
import Projects from './Pages/Projects';
import ErrorPage from './Pages/ErrorPage';
import "./App.css";
import Footer from './Components/Common/Footer/Footer';

function App() {
  return (
    <Router>
      <div className='w-full'>
      <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
