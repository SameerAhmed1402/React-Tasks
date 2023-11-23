import React from 'react';
import "./styles/App.css";
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AllCourses from './components/AllCourses';
import FullStack from './components/FullStack';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';




function App() {
  const padding ={
    paddingLeft:'25%'
  }
  return (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={padding}>
        <div className="container ">
       
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark">All</Link>
              </li>
              <li className="nav-item">
                <Link to="/fullstack" className="nav-link text-dark">Full Stack Development</Link>
              </li>
              <li className="nav-item">
                <Link to="/datascience" className="nav-link text-dark">Data Science</Link>
              </li>
              <li className="nav-item">
                <Link to="/cybersecurity" className="nav-link text-dark">Cyber Security</Link>
              </li>
              <li className="nav-item">
                <Link to="/career" className="nav-link text-dark">Career</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <Routes>
        <Route path='/' element={ <AllCourses />} />
        <Route path='/fullstack' element={<FullStack />} />
        <Route path='/datascience' element={<DataScience />} />
        <Route path='/cybersecurity' element={ <CyberSecurity />} />
        <Route path='/career' element={ <Career /> } />
      
        </Routes>
    </Router>
  );
}

export default App;