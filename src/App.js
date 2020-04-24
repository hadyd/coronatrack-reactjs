import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import About from './components/About'
import Home from './pages/Home'
import Contact from './components/contact'

function App() {
  return (
    <Router>
    <div>
     <Navigation />

      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
    
        <Route path="/about">
        <About/>
        </Route>

        <Route path="/hotline">
        <Contact />
        </Route>
      
      </Switch>
    </div>
    <Footer />
  </Router>
  
  );
}

export default App;