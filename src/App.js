import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './containers/Navbar'


function App() {
  return (
    <Router>
      <Navbar />
      
      <Switch>
        <Route path="about-me" exact></Route>
        <Route path="projects"></Route>
        <Route path="blogs"></Route>
        <Route path="/" exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
