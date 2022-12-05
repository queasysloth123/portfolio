import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Craigslist from './pages/Craigslist'
import Discz from './pages/Discz';
import Valorant from './pages/Valorant';
import Snackpass from './pages/Snackpass';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (    
    <Home />
    // <Router>
    //   <ScrollToTop />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/craigslist-redesign" element={<Craigslist />} />
    //     <Route path="/discz-design" element={<Discz />} />
    //     <Route path="/valorant-shop" element={<Valorant />} />
    //     <Route path="/snackpass-interface-review" element={<Snackpass />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
