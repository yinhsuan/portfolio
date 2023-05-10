import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Overview from "./components/Overview/Overview";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.css";

const App = () => {

  return (
    <Router>
        {/* <Preloader load={load} /> */}
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
            <Footer />
        </div>
        </Router>
  );
}

export default App;