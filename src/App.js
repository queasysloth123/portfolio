import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Craigslist from './pages/Craigslist'
import Discz from './pages/Discz';
import Valorant from './pages/Valorant';
import Snackpass from './pages/Snackpass';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (    
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/craigslist-redesign" element={<Craigslist />} />
        <Route path="/discz-design" element={<Discz />} />
        <Route path="/valorant-shop" element={<Valorant />} />
        <Route path="/snackpass-interface-review" element={<Snackpass />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
