
import Layout from './Components/Layout/Layout'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from 'aos';
import Home from './pages/Home/Home';
import UnivDetails from './pages/Services/Universitiy/UnivDetails';
import Rental from './pages/Services/Rental/Rental';
import Work from './pages/Services/Work/Work';
import University from './pages/Services/Universitiy/University';
import Edu from './pages/Services/Universitiy/Edu';



function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh()
  }, []);
  
  return (
    <Router>
    <Layout>
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UniversityDetails" element={<UnivDetails />} />
            <Route path="/Rental" element={<Rental/>}/>
            <Route path="/Work" element={<Work/>}/>
            <Route path="/edu" element={<Edu/>}/>
          </Routes>
    </Layout>
    </Router>
  )
}

export default App
