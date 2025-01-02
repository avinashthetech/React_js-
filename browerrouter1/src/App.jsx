import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Contects from "./pages/Contects";
import Services from "./pages/Services";
import About from "./pages/About";
import Notfound from "./pages/Notfound";


const App = () => {
  return (
    <div>
      {/* <h1>
        Welcome to App Components
      </h1> */}
     
      <BrowserRouter>
      <Navbar />
      <hr />
        <Routes>
          <Route path="/" element={<Home />} />  
          {/* path,element ek props hai  */}
          <Route path="/Contects" element={<Contects />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="*" element={<Notfound/>} />

        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
