import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Experiences from './Pages/Experiences';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from "./Pages/ProjectDisplay"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Projects/:id"   element={<ProjectDisplay/>}/>
          <Route path="/Experiences" element={<Experiences/>}/>
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
