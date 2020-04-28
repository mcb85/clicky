import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavTab from "./components/Navbar/NavTab"
import Home from "./pages/Home"


function App() {
  return (
    <Router>
      <div>
        <NavTab />
        <Route exact path = "/" component = {Home} />
      </div>

    </Router>


    
  );
}

export default App;
