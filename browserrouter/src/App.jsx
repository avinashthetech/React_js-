import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import  Home  from './pages/Home';
import Services from './pages/Services';
import Contacts from './pages/Contacts';

const App = () => {
  return (
    <div>
      Navbar component and routes setup
      <BrowserRouter>
        {/* The navigation bar (Navbar) component */}
        <Navbar />
        <hr />
        <Routes>
          {/* Defining the routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
