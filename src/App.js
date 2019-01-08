import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Body from './components/Body.js';
import SpringApp from './components/spring/App.js';
import MotionApp from './components/motion/App.js';
import OomphedApp from './components/cssAnimations/OomphedApp.js';
import PlainApp from './components/cssAnimations/PlainApp.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/css/plain">Plain CSS</Link></li>
              <li><Link to="/css/oomph">Good CSS</Link></li>
              <li><Link to="/spring/basic">React Spring</Link></li>
              <li><Link to="/motion/basic">React Motion</Link></li>
            </ul>
          </nav>
    
          <Route path="/" exact component={Body} />
          <Route path="/css/plain" component={PlainApp} />
          <Route path="/css/oomph" component={OomphedApp} />
          <Route path="/spring/basic" component={SpringApp} />
          <Route path="/motion/basic" component={MotionApp} />
        </div>
      </Router>
    );
  }
}

export default App;
